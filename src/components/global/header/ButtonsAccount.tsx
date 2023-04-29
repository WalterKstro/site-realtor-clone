import { NavLink, Link } from "react-router-dom"

function ButtonsAccount() {
    return (
        <div className="px-4 gap-4 lg:px-0 flex flex-col lg:flex-row lg:items-center">
            <NavLink className="text-center lg:h-full flex items-center" to="/sign-in">Sign in</NavLink>
            <Link className="hover:bg-red-700 py-1 bg-red-600 text-white rounded-full text-center lg:px-4 lg:py-2" to="/sign-up">Sign up</Link>
        </div>
    )
}

export default ButtonsAccount