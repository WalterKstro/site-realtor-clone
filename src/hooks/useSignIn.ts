import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'

interface IAccount {
    email:string,
    password:string,
}

type FormDataValue = {
    email:FormDataEntryValue,
    password:FormDataEntryValue,
}

type FormDataString = {
    [K in keyof FormDataValue]: string;
}

const useSignIn = () => {
    const navigate = useNavigate()
    const [data, setState] = useState<IAccount>({
        password:'',
        email:'',
    })

    async function handlerSubmit(evt:FormEvent):Promise<void> {
        evt.preventDefault()
        const form = evt.target as HTMLFormElement
        const fields = Object.fromEntries( new FormData(form))
        const {email,password} = fields as FormDataString
        
        try {
            const auth = getAuth()
            const credentialsUser = await signInWithEmailAndPassword(auth,email,password)
            if( credentialsUser.user ){
                navigate('/')
            }

        } catch (error:any) {
            toast.error(`Error en tú autenticación ${error.message}`, {
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


export default useSignIn