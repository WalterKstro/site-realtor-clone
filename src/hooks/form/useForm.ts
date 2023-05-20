import {User, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from "react"
import {auth, db} from '../../firebase'
import { FieldValue, doc, serverTimestamp, setDoc } from 'firebase/firestore'

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
            const userCredentials = await createUserWithEmailAndPassword(auth, email,password)
            const currentUser = auth.currentUser as User

            // update the profile
            updateProfile(currentUser, {
                displayName: name
            })

            // store user document
            const timestamp:FieldValue = serverTimestamp()
            await setDoc(doc(db,'users',currentUser.uid),{email,name,timestamp})
            
        } catch (error) {
            console.log(error)
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