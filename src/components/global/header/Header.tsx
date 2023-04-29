import Container from "../../layout/Container"
import { FiMenu } from "react-icons/fi";
import Navigaitor from "./Navigaitor";
import ButtonsAccount from "./ButtonsAccount";
import Logo from "./Logo";
import { gsap } from "gsap";
import ButtonSecondary from "./ButtonSecondary";


function Header() {
    function openMenu() {
        gsap.to('#menu', { left: '0', duration: .8 })
    }

    return (
        <header className="border-b border-slate-200 text-sm">
            <Container>
                <div className="flex lg:items-center lg:justify-between">

                    {/* mobile button */}
                    <button className="lg:hidden"><FiMenu size='1.5rem' onClick={openMenu} /></button>
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