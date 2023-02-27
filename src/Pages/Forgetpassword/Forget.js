import React, { useState } from 'react'
import "./Forget.css"
import {Link} from 'react-router-dom'
import { BASE_URL } from '../BaseUrl'

export default function Forget() {
  const [email, setEmail] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await fetch("http://localhost:2006/user/forgetpassword", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email
      })
    })
    const data = await response.json()
console.log(data)
    if(data.status === "error"){
      alert("user not exist")
    }
    if(data.status === "ok"){
      alert("Email send sucessfully")
    }
  }



  return (
    <>
    <div className="wrapper-forget">
      <div className='forget'>
        <form className='form' onSubmit={handleSubmit}>
          <label style={{ textAlign: "center" }}>Forget Password</label><br></br>
          <input
            placeholder='Enter Your Email'
            name='email'
            id='email'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          /><br></br>
          <button type='submit'>Forget</button><br></br><br></br>
          <Link to="/">
          sigin
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}
