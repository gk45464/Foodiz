import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"

function ResetPassword() {

  const {id,token} = useParams();

  const history = useNavigate();

  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("");

  const setval = (e)=>{
    setPassword(e.target.value)
  }

  const sendpassword = async(e)=>{
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/auth/${id}/${token}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({password})

    });

    const data = await res.json()
    if(data.status == 201){
      setPassword("")
      setMessage(true)
    }else{
      // res.status(401).json({status:401, message:"!Token expaire generate new Link "})
    }
  }


  const userValid = async()=>{
    const res = await fetch(`http://localhost:5000/api/auth/ResetPassword/${id}/${token}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });

    const data = await res.json()
    if(data.status == 201){
      console.log("user valid")
    }
    else{
      history("*")
    }
  }
  useEffect(()=>{
    userValid()
  },[])
  return (
    <div>
      <div className='w-50 m-auto mt-5 border bg-dark border-success rounded'>
        <div class="card-header h5 text-white bg-primary">Enter your new Password</div>
          
        <div class="card-body px-5">
      
          
          <div class="form-outline">
            <input type="password" id="password" class="form-control my-3"  value ={password} onChange={setval} placeholder='Enter your new Password' name = "password"/>
            <label class="form-label" for="typeEmail">
              
            </label>
            
          </div>
          <a href="#" class="btn btn-primary w-10" onClick={sendpassword}>
            SEND
          </a>
          
          <div class="d-flex justify-content-between mt-4">
          <Link to="/Login" className="m-3 mx-1 btn btn-success">Login</Link>
          </div>
        </div>
      </div>
    
      
    </div>
  )
}

export default ResetPassword;
