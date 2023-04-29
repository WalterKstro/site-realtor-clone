import Container from "../../layout/Container"
import { FiMenu } from "react-icons/fi";
import Navigaitor from "./Navigaitor";
import ButtonsAccount from "./ButtonsAccount";
import Logo from "./Logo";
import ButtonSecondary from "./ButtonSecondary";
import useToogleMenu from "./hooks/useToogleMenu";


function Header() {
    const { openMenu } = useToogleMenu()
    return (
        <header className="border-b border-slate-200 text-sm">
            <Container>
                <div className="flex justify-between lg:items-center">

                    {/* mobile button */}
                    <button className="lg:hidden"><FiMenu size='1.5rem' onClick={openMenu} /></button>
                    {/* logo mobile */}
                    <img
                        className="h-5 lg:hidden"
                        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                        alt="logo" />

                    <div className="fixed max-w-[320px] bg-white h-screen w-3/4 -left-full top-0 flex flex-col justify-between lg:w-auto lg:static lg:h-auto lg:flex-row lg:flex-grow lg:max-w-full" id="menu">

                        {/* logo + navigaitor */}
                        <div className="lg:flex lg:gap-8">
                            <Logo />
                            <Navigaitor />
                        </div>

                        {/* secondary buttons */}
                        <ButtonSecondary />

                        {/* account buttons */}
                        <ButtonsAccount />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header