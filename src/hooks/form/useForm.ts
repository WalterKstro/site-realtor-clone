import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from "react"
import {auth, db} from '../../firebase'
import { FieldValue, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface IAccount {
    email:string,
    password:string,
    name?:string
}

type FormDataValue = {
    email:FormDataEntryValue,
    password:FormDataEntryValue,
    name:FormDataEntryValue
}

type FormDataString = {
    [K in keyof FormDataValue]: string;
}

const useForm = () => {
    const navigate = useNavigate()
    const [data, setState] = useState<IAccount>({
        password:'',
        email:'',
        name:''
    })

    async function handlerSubmit(evt:FormEvent):Promise<void> {
        evt.preventDefault()
        const form = evt.target as HTMLFormElement
        const fields = Object.fromEntries( new FormData(form))
        const {email,password,name} = fields as FormDataString
        
        try {
            // create an account
            const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
            const currentUser = userCredentials.user

            // update the profile
            updateProfile(currentUser, {
                displayName: name
            })

            // store user document
            const timestamp:FieldValue = serverTimestamp()
            await setDoc(doc(db,'users',currentUser.uid),{email,name,timestamp})
            
            navigate('/')
            
        } catch (error:any) {
            toast.error('Tú registro no se completo, revisa que los campos esten llenos', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
              });
        }
    }

    function handlerChange(evt:ChangeEvent):void {
        const input = evt.target as HTMLInputElement
        setState({
            ...data,
            [input.name]:input.value
        })
    }

    return {
        data,
        handlerSubmit,
        handlerChange
    }
}


export default useForm