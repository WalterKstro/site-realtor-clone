import { FC } from "react"
import { IChildren } from "../../../interface"


const Form:FC<IChildren> = ({children,handlerSubmit}) => {
  return (
    <form onSubmit={handlerSubmit} className="flex flex-col gap-4">{children}</form>
  )
}

export default Form