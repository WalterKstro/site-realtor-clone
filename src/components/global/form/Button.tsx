import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface IProps {
    children: ReactNode,
    icon?:ReactNode,
    type:'button' | 'submit',
    handlerSignUpGoogle?: ()=>Promise<void>
}

const Button:FC<IProps> = ({children,icon,type,handlerSignUpGoogle}) =>{
  return (
    <button 
      onClick={handlerSignUpGoogle}
      type={type}
      className="
        w-full justify-center rounded-md bg-primary-red px-3 py-1.5 flex items-center gap-2 
        text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-red-hover 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-600"
        >
        {icon} {children}
    </button>
  )
}

export default Button

