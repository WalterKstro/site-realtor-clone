import { gsap } from "gsap";

const useToogleMenu = () => {
    const duration = .8;
    function openMenu() {
        gsap.to('#menu', { left: '0', duration })
    }

    function closeMenu() {
        gsap.to('#menu', { left: '-100%', duration })
    }

    return { openMenu, closeMenu }
}

export default useToogleMenu