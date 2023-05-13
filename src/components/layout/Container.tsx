import { FC } from "react"
import { IChildren} from "../../interface"

const Container:FC<Partial<IChildren>> = ({ children }) => {
    return (
        <div className="container mx-auto p-4 lg:p-0">{children}</div>
    )
}

export default Container