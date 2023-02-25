import React from 'react'
import { format } from 'date-fns'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Userclaim({user}) {
  return (
    <div className="claims" style={{ margin:"10px 0", padding:"20px", border:"2px solid #e5e5e5", width:"50%", margin:"0 auto"}}>
        <div style={{margin:"30px 0"}} className="user-profile">
            <p>FirstName: {user.FirstName}</p>
            <p>LastName: {user.LastName}</p>
        </div>
        <div className="user-purpose">
            <p>UserAmount: ${user.Amount}</p>
            <p>ExpenseDate: {format(new Date(user.ExpenseDate), 'dd/MM/yyyy')}</p>
            <p>Purpose: {user.Purpose}</p>
            <p>FollowUp: {user.FollowUp}</p>
            <p>Last Update: {formatDistanceToNow(new Date(user.LastEditedClaimDate), {addSuffix: true})}</p>
        </div>
        <button style={{borderRadius:'5px', padding:"5px 10px"}}>Edit</button>
  
    </div>

  )
}

export default Userclaim