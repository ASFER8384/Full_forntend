import React from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"

export default function Dash({email}) {
  return (
    <>
    <div className="dash" >

        <Link >
       <h5 className="logout">DOT APP</h5>
        </Link>
        <Link to="/">
       <h3 className="logout">LOGOUT</h3>
        </Link>
    </div>
    <div className="user">
      <h1>USER</h1><br></br>
    </div>
    <div className="user">
      <h1>Email:{email}</h1>
    </div>
    </>
  )
}
