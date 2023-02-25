import React, { useState } from 'react'
import Userclaim from '../components/Userclaim'

function Claims() {
    const [user,setUser] = useState({
        ClaimID: 2010,
        InsuranceID: 1009,
        FirstName: "Martin",
        LastName: "Ong",
        ExpenseDate: "2022-07-14T08:00:00+08:00",
        Amount: 100.00,
        Purpose: "Dentist",
        FollowUp: 0,
        PreviousClaimID: null,
        Status: "Approved",
        LastEditedClaimDate: "2022-07-15T12:22:45+08:00"
       })
  return (
    <div>
        <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Pending</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Approved</button>
            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Rejected</button>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            {user.Status === "Approved" && <Userclaim user={user} /> }
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            {user.Status === "Pending" && <Userclaim user={user} /> }
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            {user.Status === "Rejected" && <Userclaim user={user} /> }
        </div>
        </div>
    </div>
  )
}

export default Claims