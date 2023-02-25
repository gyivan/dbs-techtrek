import Card from 'react-bootstrap/Card'
import Background from '../assets/DBS_Image.jpeg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const navigate = useNavigate()

    const [alert, setAlert] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()
        const EmployeeID = e.target.elements.EmployeeID.value
        const Password = e.target.elements.Password.value

        console.log(EmployeeID, Password)

        try {
            const res = await axios.post('http://localhost:5000/auth/login', {EmployeeID, Password})
            const token = res.data.token
            window.localStorage.setItem('token', `${JSON.stringify(token)}`)
            navigate('/')
        } catch (err) {
            setAlert(err.response.data.message)

            setTimeout(() => {
                setAlert(null)
            }, 3000)
        }
        e.target.reset()
    }
        

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Card style={{display: "flex", width: "50rem", height: "30rem", border: "0", flexDirection: "row"}}>
                <div style={{height: "100%", width: "50%", borderRadius: "10px 0px 0px 10px", backgroundImage: `url("${Background}")`, backgroundSize: "100% 100%"}}>
                </div>
                <div style={{display: "flex", flexDirection: "column", backgroundColor: "lightGrey", borderRadius: "0px 10px 10px 0px", height: "100%", width: "50%"}}>
                {alert != null ? <Alert variant="danger" style={{margin: "10px 10px"}}> address</Alert> : ""}
                <div  >
                    <Card.Body style={{flex: ".65 .75 auto", paddingTop: "2rem"}}>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3">
                                <Form.Label>Employee ID</Form.Label>
                                <Form.Control name="EmployeeID" type="number" placeholder="Enter Employee ID" required/>
                                <Form.Text className="text-muted">
                                We'll never share your ID with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="Password" type="password" placeholder="Password" required/>
                            </Form.Group>
                            <Button variant="danger" type="submit" style={{width: "100%", marginTop: "1rem"}}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </div> 
            </div>
            </Card>
        </div>
    )
}

export default Auth