import { ChangeEvent, FormEvent, useState } from "react"
import { FieldValue, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { db, auth } from "../firebase"
import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth"

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

const useSignUp = () => {
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
            toast.error(`Error en tú registro ${error.message}`, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
              });
        }
    }

    async function handlerSignUpGoogle():Promise<void> {
        const auth = getAuth()
        const provider = new GoogleAuthProvider();
        try {
            // sing up with Google Account
            const result:UserCredential = await signInWithPopup(auth,provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user
            
            // get reference of one document
            const docReference = doc(db,'users', user.uid)
            // get one snapshot of a document
            const docSnap = await getDoc(docReference)

            
            // exist uid of user in database
            if( !docSnap.exists() ) {
                // save to database
                await setDoc(doc(db,'users',user.uid),{
                    email: user.email,
                    name: user.displayName,
                    timestamp: serverTimestamp()
                })    
            }

            navigate('/')
            
        } catch (error) {
            toast.error('Tú registro no se completo, intente después', {
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
        handlerSubmit,
        handlerChange,
        handlerSignUpGoogle
    }
}
export default useSignUp