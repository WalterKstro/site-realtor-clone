import { FC } from "react"

interface IProps {
    children: React.ReactNode
}
function Container({ children }: IProps) {
    return (
        <div className="container mx-auto p-4 lg:p-0">{children}</div>
    )
}

export default Container