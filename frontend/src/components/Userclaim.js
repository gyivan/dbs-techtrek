import React from 'react'
import { format } from 'date-fns'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import EditClaim from '../pages/EditClaim'
import { Link } from 'react-router-dom'

function Userclaim({user}) {
  return (
    <div className="claims" style={{ margin:"10px 0", padding:"20px", border:"2px solid #e5e5e5", width:"50%", margin:"0 auto"}}>
        <div style={{margin:"30px 0"}} className="user-profile">
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>FirstName:</span>{user.FirstName}</p>
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>LastName:</span>{user.LastName}</p>
        </div>
        <div className="user-purpose">
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>UserAmount:</span>${user.Amount}</p>
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>ExpenseDate:</span>format(new Date(user.ExpenseDate), 'dd/MM/yyyy')}</p>
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>Purpose:</span>{user.Purpose}</p>
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>FollowUp:</span>{user.FollowUp}</p>
            <p><span style={{fontWeight:600, paddingRight:"5px"}}>Last Update:</span>{formatDistanceToNow(new Date(user.LastEditedClaimDate), {addSuffix: true})}</p>
        </div>
        <Link to="/edit-claim/:id" className="btn btn-primary">Edit</Link>
  
    </div>

  )
}

export default Userclaim