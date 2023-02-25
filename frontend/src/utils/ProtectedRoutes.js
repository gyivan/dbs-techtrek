import {useEffect, useState} from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import axios from 'axios'

const ProtectedRoutes = () => {

    const [successAuth, setSuccessAuth] = useState(null)

    useEffect(() => {
        
        const authUser = async () => {
            const token = window.localStorage.getItem('token')
            if (token != null) {
                const parsedToken = JSON?.parse(token)
                const config = {headers: {Authorization: `bearer ${parsedToken}`}}
                if (parsedToken) {
                    await axios.post('http://localhost:5000/api/auth', {}, config)
                    setSuccessAuth(true)
                }
            }
            setSuccessAuth(false)
        }

        authUser()
    }, [])

    if (successAuth === true) {
        return <Outlet/>
    } else if (successAuth === false) {
        return <Navigate to="/login"/>
    } else {
        return <div>Loading...</div>
    }

}

export default ProtectedRoutes