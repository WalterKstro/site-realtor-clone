import { ChangeEvent, FC, ReactNode } from "react"

interface IProps {
    type:string,
    name:string,
    handlerChange: (evt:ChangeEvent) => void,
    placeholder:string,
    handlerChangeStatusPassword?:()=>void,
    iconPassword?: ReactNode
    
}
const Field:FC<IProps> = ({name,type,handlerChange,placeholder,handlerChangeStatusPassword,iconPassword}) => {
  function showIconPassword() {
    return iconPassword && <span onClick={handlerChangeStatusPassword} className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-xl">{iconPassword}</span>
  }
  return (
    <label htmlFor={name} className="text-sm font-medium leading-6 text-gray-900 first-letter:uppercase">
        {name}
        <div className="relative">
          <input
                type={type}
                id={name}
                name={name} 
                placeholder={placeholder}
                onChange={handlerChange}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-red 
                           focus:border-priring-primary-red w-full"/>
                { showIconPassword() }
        </div>
    </label>
  )
}

export default Field