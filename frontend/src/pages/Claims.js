import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Userclaim from '../components/Userclaim'
import { Tab, Tabs } from 'react-bootstrap'

function Claims() {
    const [user,setUser] = useState({
        ClaimID: 2010,
        InsuranceID: 1009,
        FirstName: "John",
        LastName: "Ong",
        ExpenseDate: "2022-07-14T08:00:00+08:00",
        Amount: 100.00,
        Purpose: "Dentist",
        FollowUp: 0,
        PreviousClaimID: null,
        Status: "Approved",
        LastEditedClaimDate: "2022-07-15T12:22:45+08:00"
       })
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
    <div>
    <h2 className="mb-3">My claims</h2>
    <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
      <Tab eventKey="one" title="Pending">
        <p>{user.Status === "Pending" && <Userclaim user={user} /> }</p>
      </Tab>
      <Tab eventKey="two" title="Approved">
        <p>{user.Status === "Approved" && <Userclaim user={user} /> }</p>
      </Tab>
      <Tab eventKey="four" title="Rejected">
        <p>{user.Status === "Rejected" && <Userclaim user={user} /> }</p>
      </Tab>
    </Tabs>
  </div>

  )
}

export default Claims