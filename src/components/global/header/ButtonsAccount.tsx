import { NavLink, Link } from "react-router-dom"
import useToogleMenu from "./hooks/useToogleMenu"

function ButtonsAccount() {
    const { closeMenu } = useToogleMenu()
    return (
        <div className="px-4 gap-4 lg:px-0 flex flex-col lg:flex-row lg:items-center">
            <NavLink
                className="text-center lg:h-full flex items-center"
                to="/sign-in"
                onClick={closeMenu}>Sign in</NavLink>
            <Link
                className="hover:bg-red-700 px-3 py-1.5 bg-red-600 text-white rounded-full text-center lg:px-4 lg:py-2"
                to="/sign-up"
                onClick={closeMenu}>Sign up</Link>
        </div>
    )
}

export default ButtonsAccount