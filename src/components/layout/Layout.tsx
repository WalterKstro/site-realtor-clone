import { Outlet } from "react-router-dom"
import Header from "../global/header/Header"

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout