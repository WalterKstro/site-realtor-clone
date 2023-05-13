import { FC, ReactNode } from "react"
interface IProps {
  children:ReactNode
}

const Options:FC<IProps> = ({children}) => {
  return (
    <div className="md:flex md:justify-between text-sm">
        {children}
    </div>
  )
}

export default Options