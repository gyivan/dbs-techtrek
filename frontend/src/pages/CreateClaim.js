import { useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const CreateClaim = () => {


    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)



    useEffect (() => {
        const token = window.localStorage.getItem('token')
        function parseJwt(token) {
            if (!token) {
              return;
            }
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace("-", "+").replace("_", "/");
            return JSON.parse(window.atob(base64));
          }
          const {name, lastname} = parseJwt(token)
          setFirstName(name)
          setLastName(lastname)
        }, [])

    
    const [alertMsg, setAlertMsg] = useState(null);
    const [variant, setVariant] = useState(null);


    const token = window.localStorage.getItem('token')
    const {id} = useParams()

    const handleSubmit = async (e) => {

        e.preventDefault()

        const InsuranceID = e.target.elements.InsuranceID.value
        const FirstName = e.target.elements.FirstName.value
        const LastName = e.target.elements.LastName.value
        let ExpenseDate = e.target.elements.ExpenseDate.value
        const Amount = e.target.elements.Amount.value
        const Purpose = e.target.elements.Purpose.value
        const FollowUp = e.target.elements.FollowUp.value === "y" ? true : false
        ExpenseDate = moment(ExpenseDate).toISOString();

        const newClaim = {token, InsuranceID, FirstName, LastName, Amount, Purpose, FollowUp, ExpenseDate}
        try {
            console.log(token)
            await axios.post('http://localhost:5000/createClaim/user', newClaim)
            
            setVariant("success")
            setAlertMsg("Claim Submitted")
            setTimeout(() => {
                setAlertMsg(null)
            }, 3000)

        } catch (error) {
            console.log(error)
            setVariant("danger")
            setAlertMsg("Error Submitting Claim")
            setTimeout(() => {
                setAlertMsg(null)
            }, 3000)
        }

        e.target.reset()
    }

    return (
        <Container fluid="md" style={{width: "50%", marginTop: "2rem"}}>
           
            <Card style={{width: "32rem", padding: "0", boxShadow: "none", transform: "none"}}>
                <Card.Header>Submit a Claim </Card.Header>
                <Card.Body>
                    {alertMsg !== null ? <Alert variant={variant}>{alertMsg}</Alert> : ""}
                    <Form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Insurance ID</Form.Label>
                                <Form.Control
                                    value={id} 
                                    name="InsuranceID"
                                    type="number" 
                                    disabled
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    value={firstName}
                                    name="FirstName"
                                    type="text" 
                                    disabled
                                    />
                            </Form.Group>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    value={lastName}
                                    name="LastName"
                                    type="text" 
                                    disabled
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    name="Amount"
                                    type="text" 
                                    placeholder="Enter Amount to Claim"
                                    pattern="^[1-9][0-9]*(\.[0-9]{2})?$"
                                    title="Enter a valid amount more than zero with maximum of 2 decimal places"
                                    required
                                    />
                            </Form.Group>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <Form.Group className="mb-3" style={{display: "flex", flexDirection: "column"}}>
                                    <Form.Label>Expense Date</Form.Label>
                                    <input name="ExpenseDate" type="date" required/>
                                </Form.Group>
                            </div>
                            <Form.Group style={{display: "flex", flexDirection: "column"}}>
                                <Form.Label>Follow Up?</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        name="FollowUp"
                                        type="radio"
                                        value="y"
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="FollowUp"
                                        type="radio"
                                        value="n"
                                    />
                                </div>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Purpose</Form.Label>
                            <Form.Control
                                name="Purpose" 
                                as="textarea" 
                                style={{overflow: "auto"}} 
                                type="text" 
                                placeholder="Enter Comment" 
                                />
                        </Form.Group>
                        <Button style={{display: "block", marginLeft: "auto"}} variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )

}

export default CreateClaim