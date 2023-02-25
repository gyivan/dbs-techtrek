import React from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function EditClaim() {
  
	const claim = {
		ClaimID: 2010,
		InsuranceID: 1009,
		FirstName: "Martin",
		LastName: "Ong",
		ExpenseDate: "2022-07-14T08:00:00+08:00",
		Amount: 100.0,
		Purpose: "Dentist",
		FollowUp: 0,
		PreviousClaimID: null,
		Status: "Approved",
		LastEditedClaimDate: "2022-07-15T12:22:45+08:00",
	};

	return (
		<div style={{}}>
			<h1>Edit Claims</h1>

			<div>
				<h2>Claim Details</h2>
				<Container>
					<Form>
						<Row>
							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Claim ID</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Insurance ID</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>First Name</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Last Name</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Expense Date</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Amount</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Form.Group className="md-3" controlId="formEditClaim">
								<Form.Label>Purpose</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</Row>

						<Row>
							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Previous Claim Id</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="md-3" controlId="formEditClaim">
									<Form.Label>Last Edited Claim Date</Form.Label>
									<Form.Control type="text" />
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<Button>Back</Button>
								<Button>Update</Button>
							</div>
						</Row>
					</Form>
				</Container>
			</div>
		</div>
	);
}
