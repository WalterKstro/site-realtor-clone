import { ChangeEvent, FormEvent, useState } from "react"

interface IAccount {
    email:string,
    password:string
}

const useForm = () => {


    const [data, setState] = useState<IAccount>({
        password:'',
        email:''
    })

    function handlerSubmit(evt:FormEvent):void {
        evt.preventDefault()
        const form = evt.target as HTMLFormElement
        const fields = Object.fromEntries( new FormData(form) )
        console.log(fields)
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