import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function EditClaim() {
	const navigate = useNavigate();
	const [convertedDate, setConvertedDate] = useState("");

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

	const onUpdate = (e) => {
		e.preventDefault();
		const newAmount = e.target.elements.amount.value;
		const newPurpose = e.target.elements.purpose.value;

		const newDate = moment(convertedDate).toISOString();

		const newClaim = {
			ClaimID: claim.ClaimID,
			InsuranceID: claim.InsuranceID,
			FirstName: claim.FirstName,
			LastName: claim.LastName,
			ExpenseDate: newDate,
			Amount: newAmount,
			Purpose: newPurpose,
			FollowUp: claim.FollowUp,
			PreviousClaimID: claim.PreviousClaimID,
			Status: claim.Status,
			LastEditedClaimDate: claim.LastEditedClaimDate,
		};

		console.log("newClaim", newClaim);
		// call api call
	};

	const onBack = () => {
		navigate(-1);
	};

	const onDateChange = (e) => {
		console.log(e.target.value);
		setConvertedDate(e.target.value);
	};

	useEffect(() => {
		setConvertedDate(moment(claim.ExpenseDate).utc().format("YYYY-MM-DD"));
	}, []);
	return (
		<div style={{}}>
			<h1 style={{ margin: 10 }}>Edit Claim</h1>

			<div>
				<h3 style={{ margin: 15 }}> Claim Details</h3>
				<Container>
					<Form onSubmit={onUpdate}>
						<Form.Group controlId="editClaiomForm">
							<Row>
								<Col>
									<Form.Group className="m-1">
										<Form.Label>Claim ID</Form.Label>
										<Form.Control
											type="text"
											defaultValue={claim.ClaimID}
											disabled
											readOnly
										/>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group className="m-1">
										<Form.Label>Insurance ID</Form.Label>
										<Form.Control
											type="text"
											defaultValue={claim.InsuranceID}
											disabled
											readOnly
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col>
									<Form.Group className="m-1">
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="text"
											defaultValue={claim.FirstName}
											disabled
											readOnly
										/>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group className="m-1">
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											type="text"
											defaultValue={claim.LastName}
											disabled
											readOnly
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col>
									<Form.Group className="m-1">
										<div style={{ display: "flex", flexDirection: "column" }}>
											<Form.Label>Expense Date</Form.Label>
											<input
												type="date"
												value={convertedDate}
												onChange={onDateChange}
											></input>
											{/* <Form.Control
											type="date"
											defaultValue={claim.ExpenseDate}
											disabled
											readOnly
										/> */}
										</div>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group className="m-1">
										<Form.Label>Amount</Form.Label>
										<Form.Control
											type="text"
											defaultValue={claim.Amount}
											name="amount"
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Form.Group className="m-1">
									<Form.Label>Purpose</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										defaultValue={claim.Purpose}
										name="purpose"
									/>
								</Form.Group>
							</Row>

							<Row>
								<Col>
									<Form.Group className="m-1">
										<Form.Label>Previous Claim Id</Form.Label>
										<Form.Control
											type="text"
											defaultValue={
												claim.PreviousClaimID === null
													? "N.A"
													: claim.PreviousClaimID
											}
											disabled
											readOnly
										/>
									</Form.Group>
								</Col>

								<Col>
									<Form.Group className="m-1">
										<Form.Label>Last Edited Claim Date</Form.Label>
										<Form.Control
											type="text"
											defaultValue={claim.LastEditedClaimDate}
											disabled
											readOnly
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										paddingTop: 20,
										gap: 10,
									}}
								>
									<Button variant="secondary" onClick={onBack}>
										Back
									</Button>
									<Button variant="primary" type="submit">
										Update
									</Button>
								</div>
							</Row>
						</Form.Group>
					</Form>
				</Container>
			</div>
		</div>
	);
}
