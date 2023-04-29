import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useToogleMenu from "./hooks/useToogleMenu";

function Logo() {
    const navigate = useNavigate()
    const { closeMenu } = useToogleMenu()
    return (
        <div className="p-4 flex justify-between lg:px-0">
            <img
                className="h-5 cursor-pointer"
                src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                alt="logo"
                onClick={() => navigate('/')} />
            {/* button close */}
            < button className="lg:hidden" onClick={closeMenu}> <FiX size='1.5rem' /></button>
        </div >
    )
}

export default Logo