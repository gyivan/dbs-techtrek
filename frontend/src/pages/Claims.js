import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Userclaim from '../components/Userclaim'
import { Tab, Tabs } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Claims() {
    const [user,setUser] = useState([
    //     {
    //     ClaimID: 2010,
    //     InsuranceID: 1009,
    //     FirstName: "John",
    //     LastName: "Ong",
    //     ExpenseDate: "2022-07-14T08:00:00+08:00",
    //     Amount: 100.00,
    //     Purpose: "Dentist",
    //     FollowUp: 0,
    //     PreviousClaimID: null,
    //     Status: "Approved",
    //     LastEditedClaimDate: "2022-07-15T12:22:45+08:00"
    //    },
    //    {
    //     ClaimID: 2011,
    //     InsuranceID: 1009,
    //     FirstName: "John",
    //     LastName: "Ong",
    //     ExpenseDate: "2022-07-14T08:00:00+08:00",
    //     Amount: 50.00,
    //     Purpose: "Sick",
    //     FollowUp: 0,
    //     PreviousClaimID: null,
    //     Status: "Approved",
    //     LastEditedClaimDate: "2022-07-15T12:22:45+08:00"
    //    }
        ])
        
        const {id} = useParams()
        const token = window.localStorage.getItem('token')
        const info = {id, token}
        
        useEffect(()=>{
            axios.post('',info)
            .then(response => {
            // Handle response
            if(response.ok){
                setUser(response.data)
            }
            })
            .catch(err => {
            console.error(err)
            })
        },[])

    //    useEffect(()=>{
      
    //     const getClaims = async ()=>{
    //       const response = await fetch("")
    //       const json = await response.json()
    
    //       if(response.ok){
          
    
    //       }
    
    //     }
    //     getClaims()
    //   },[])
    const [tabKey, initTabKey] = useState('one')
  return (
    <div style={{margin:"20px 0"}}>
    <h2 className="mb-3" style={{textAlign:"center"}}>My claims</h2>
    <Tabs style={{display:"flex", justifyContent:"center"}} activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
      <Tab eventKey="one" title="Pending">
        {user.map((user, index)=>(
                <div key={user.ClaimID}>
                    {user.Status === "Pending" && <Userclaim user={user} /> }
                </div>      
            ))}
      </Tab>
      <Tab eventKey="two" title="Approved">
        {user.map((user)=>(
            <div key={user.ClaimID}>
                { user.Status === "Approved" && <Userclaim user={user} /> }
            </div>
     
        ))}
      </Tab>
      <Tab eventKey="four" title="Rejected">
        {user.map((user)=>(
            <div key={user.ClaimID}>
                { user.Status === "Rejected" && <Userclaim user={user} /> }
            </div>      
        ))}
      </Tab>
    </Tabs>
  </div>

  )
}

export default Claims