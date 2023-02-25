import { useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";

const CreateClaim = () => {
    
    const [alertMsg, setAlertMsg] = useState(null);
    const [variant, setVariant] = useState(null);


    const FirstName = window.localStorage.getItem('FirstName')
    const LastName = window.localStorage.getItem('LastName')
    const {id} = useParams()

    // ClaimID
    // InsurancelD
    // FirstName
    // LastName
    // ExpenseDate
    // Amount
    // Purpose
    // FollowUp
    // PreviousClaimID
    // Status
    // LastEditedClaimDate

    const handleSubmit = (e) => {

        e.preventDefault()

        const InsuranceID = e.target.elements.InsuranceID.value
        const FirstName = e.target.elements.FirstName.value
        const LastName = e.target.elements.LastName.value
        const ExpenseDate = e.target.elements.ExpenseDate.value
        const Amount = e.target.elements.Amount.value
        const Purpose = e.target.elements.Purpose.value
        const FollowUp = e.target.elements.FollowUp.value
        
        console.log(InsuranceID, FirstName, LastName, typeof ExpenseDate, Amount, Purpose, FollowUp)

    }

    return (
        <Container fluid="md" style={{width: "50%", marginTop: "2rem"}}>
            {alertMsg !== null ? <Alert variant={variant}>{alertMsg}</Alert> : ""}
            <Card style={{width: "32rem", padding: "0", boxShadow: "none", transform: "none"}}>
                <Card.Header>Submit a Claim </Card.Header>
                <Card.Body>
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
                                    value={FirstName}
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
                                    value={LastName}
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
                                        id="n"
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