import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
)

export default Layout