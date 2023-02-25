import React from 'react'
import "../styles/Userclaim.css"

function Userclaim({user}) {
  return (
    <div className="claims" key={user.id}>
        <div className="user-profile">
            <h2>FirstName: {user.FirstName}</h2>
            <h2>LastName: {user.LastName}</h2>
        </div>
        <div className="user-purpose">
            <p>UserAmount: ${user.Amount}</p>
            <p>Purpose: {user.Purpose}</p>
            <p>FollowUp: {user.FollowUp}</p>
            <p>FollowUp: {user.LastEditedClaimDate}</p>
        </div>
    </div>

  )
}

export default Userclaim