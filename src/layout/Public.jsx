import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


const Public = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Public