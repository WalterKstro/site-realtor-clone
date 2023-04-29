import { NavLink } from "react-router-dom"

function Navigaitor() {
    return (
        <nav className="flex flex-col divide-y-2 lg:flex-row lg:gap-4">
            <NavLink className="px-4 h-12 flex items-center lg:px-0 lg:h-full" to="buy">Buy</NavLink>
            <a className="px-4 h-12 flex items-center lg:px-0 lg:h-full" href="#">Sell</a>
            <a className="px-4 h-12 flex items-center lg:px-0 lg:h-full" href="#">Rent</a>
            <a className="px-4 h-12 flex items-center lg:px-0 lg:h-full" href="#">Mortgage</a>
            <a className="px-4 h-12 flex items-center lg:px-0 lg:h-full" href="#">Find Realtors</a>
            <a className="px-4 h-12 flex items-center lg:px-0 lg:h-full" href="#">My Home</a>
            <a className="px-4 h-12 flex items-center lg:px-0 lg:h-full" href="#">News & Insights</a>
        </nav>
    )
}

export default Navigaitor