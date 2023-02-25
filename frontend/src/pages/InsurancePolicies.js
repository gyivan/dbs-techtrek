import React, { useState} from "react";
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import moment from 'moment'


// const InsurancePolicy = () => {
//   const [insuranceData, setInsuranceData] = useState([]);

// }


//   useEffect(() => {  
//     fetch("InsurancePolicies.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setInsuranceData(data);
//       });

//   }, []);



  const policies = [
    {
     "InsuranceID": 1005,
     "EmployeeID": 58001002,
     "Insurance Type": "Personal Accident",
     "PolicyStartDate": "2022-03-31T00:00:00+08:00",
     "PolicyTerm": "12 months",
     "PolicyEndDate": "2023-03-31T00:00:00+08:00",
     "ClaimLimit": 1000.00,
     "RemainingClaimLimit": 400.00
    },
    {
     "InsuranceID": 1006,
     "EmployeeID": 58001002,
     "Insurance Type": "Housing",
     "PolicyStartDate": "2022-03-31T00:00:00+08:00",
     "PolicyTerm": "24 months",
     "PolicyEndDate": "2024-03-31T00:00:00+08:00",
     "ClaimLimit": 50000.00,
     "RemainingClaimLimit": 50000.00
    },
    {
     "InsuranceID": 1007,
     "EmployeeID": 58001002,
     "Insurance Type": "Car",
     "PolicyStartDate": "2022-03-31T00:00:00+08:00",
     "PolicyTerm": "24 months",
     "PolicyEndDate": "2024-03-31T00:00:00+08:00",
     "ClaimLimit": 25000.00,
     "RemainingClaimLimit": 20000.00
    },
    {
     "InsuranceID": 1008,
     "EmployeeID": 58001003,
     "Insurance Type": "Personal Accident",
     "PolicyStartDate": "2022-05-31T00:00:00+08:00",
     "PolicyTerm": "3 months",
     "PolicyEndDate": "2022-08-31T00:00:00+08:00",
     "ClaimLimit": 1000.00,
     "RemainingClaimLimit": 800.00
    },
    {
     "InsuranceID": 1009,
     "EmployeeID": 58001004,
     "Insurance Type": "Personal Accident",
     "PolicyStartDate": "2022-05-31T00:00:00+08:00",
     "PolicyTerm": "12 months",
     "PolicyEndDate": "2023-05-31T00:00:00+08:00",
     "ClaimLimit": 5000,
     "RemainingClaimLimit": 4600
    },
    {
     "InsuranceID": 1010,
     "EmployeeID": 58001004,
     "Insurance Type": "Housing",
     "PolicyStartDate": "2022-05-31T00:00:00+08:00",
     "PolicyTerm": "24 months",
     "PolicyEndDate": "2024-05-31T00:00:00+08:00",
     "ClaimLimit": 50000.00,
     "RemainingClaimLimit": 50000.00
    },
    {
     "InsuranceID": 1011,
     "EmployeeID": 58001003,
     "Insurance Type": "Car",
     "PolicyStartDate": "2022-07-31T00:00:00+08:00",
     "PolicyTerm": "12 months",
     "PolicyEndDate": "2023-07-31T00:00:00+08:00",
     "ClaimLimit": 25000.00,
     "RemainingClaimLimit": 25000.00
    },
    {
     "InsuranceID": 1012,
     "EmployeeID": 58001004,
     "Insurance Type": "Car",
     "PolicyStartDate": "2022-09-30T00:00:00+08:00",
     "PolicyTerm": "24 months",
     "PolicyEndDate": "2024-09-30T00:00:00+08:00",
     "ClaimLimit": 25000.00,
     "RemainingClaimLimit": 25000.00
    },
    {
     "InsuranceID": 1013,
     "EmployeeID": 58001001,
     "Insurance Type": "Housing",
     "PolicyStartDate": "2022-11-30T00:00:00+08:00",
     "PolicyTerm": "24 months",
     "PolicyEndDate": "2024-11-30T00:00:00+08:00",
     "ClaimLimit": 50000.00,
     "RemainingClaimLimit": 50000.00
    },
    {
     "InsuranceID": 1014,
     "EmployeeID": 58001005,
     "Insurance Type": "Travel",
     "PolicyStartDate": "2023-01-31T00:00:00+08:00",
     "PolicyTerm": "1 month",
     "PolicyEndDate": "2023-02-28T00:00:00+08:00",
     "ClaimLimit": 1000.00,
     "RemainingClaimLimit": 1000.00
    },
    {
     "InsuranceID": 1015,
     "EmployeeID": 58001005,
     "Insurance Type": "Housing",
     "PolicyStartDate": "2023-01-31T00:00:00+08:00",
     "PolicyTerm": "24 months",
     "PolicyEndDate": "2025-01-31T00:00:00+08:00",
     "ClaimLimit": 50000.00,
     "RemainingClaimLimit": 50000.00
    },
    {
     "InsuranceID": 1016,
     "EmployeeID": 58001001,
     "Insurance Type": "Travel",
     "PolicyStartDate": "2023-01-31T00:00:00+08:00",
     "PolicyTerm": "1 month",
     "PolicyEndDate": "2023-02-28T00:00:00+08:00",
     "ClaimLimit": 1000.00,
     "RemainingClaimLimit": 900.00
    }
]








const InsurancePolicies = () => {

    const [InsID, setInsID] = useState(null)

    const ApprovedID = localStorage.getItem('EmployeeID');

    const Navigate = useNavigate()
    
    const handleClick = (data) => Navigate(`/${data.InsuranceID}`);        

    return (
        <div className="container">
        <h1>Insurance Policies</h1>
        <Table bordered hover>
            <thead>
            <tr>
                <th>Insurance ID</th>
                <th>Employee ID</th>
                <th>Insurance Type</th>
                <th>Policy Start Date</th>
                <th>Policy Term</th>
                <th>Policy End Date</th>
                <th>Claim Limit</th>
                <th>Remaining Claim Limit</th>
            </tr>
            </thead>
            <tbody>

            
            {/* {policies.filter(function(item){return item.EmployeeID === ApprovedID}).map((data) => ( */}
            {policies.map((data) => (
                

                
                
                    <tr key={data.InsuranceID}>
                    <td>{data.InsuranceID}</td>
                    <td>{data.EmployeeID}</td>
                    <td>{data["Insurance Type"]}</td>
                    <td>{moment.utc(data.PolicyStartDate).format('MM/DD/YYYY')}</td>
                    <td>{data.PolicyTerm}</td>
                    <td>{moment.utc(data.PolicyEndDate).format('MM/DD/YYYY')}</td>
                    <td>{data.ClaimLimit}</td>
                    <td>{data.RemainingClaimLimit}</td>
                    <button onClick = {() => handleClick(data)}>Claim under {data.InsuranceID}</button>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    );
};

export default InsurancePolicies;

