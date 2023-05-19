import {User, UserCredential, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from "react"
import {auth} from '../../firebase'
interface IAccount {
    email:string,
    password:string,
    name?:string
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
        const data = Object.fromEntries( new FormData(form))
        const {email,password,name} = data

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email.toString(),password.toString())
            const currentUser = auth.currentUser as User

            // update the profile
            updateProfile(currentUser, {
                displayName: name.toString()
            })
            
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