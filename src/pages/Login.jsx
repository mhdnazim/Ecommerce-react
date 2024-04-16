import { Button, TextField } from '@mui/material'
import React, { useContext, useId, useState } from 'react'
import { v4 as uuid } from "uuid"
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [input , setinput] = useState({
        username:"",
        password:""
    })

    const navigate = useNavigate()

    const getandsetuserNormalInputs = (e) => {
      const { name, value } = e.target
      setinput({ ...input, [name]: value })
    }

    console.log(input);
     const { setIsLogged, setProfile, profile } = useContext(UserContext)
     console.log(setIsLogged,"set")

    const userDetails = {
        id : 1,
        name : "Muhammed Nasim",
        username : "user@gmail.com",
        password : "user@123"
    }

    const handlesubmit = async (e) => {
    e.preventDefault()

    const {username , password } = input

    if (username === userDetails.username && password === userDetails.password){
        console.log("username matches")
        const unique_id = uuid()
        console.log(unique_id)
        window.localStorage.setItem("unique_id", JSON.stringify(unique_id))
        window.localStorage.setItem("user_details", JSON.stringify(userDetails))
        setProfile(userDetails.name)
        console.log(profile, "log")
        navigate('/home')
        // console.log(accessToken)
        //add userdata to local storage 
        // window.location.replace("/home")
    }
    // else{
    //   alert('Please Enter Valid Username or Password')
    //     console.log("not matches")
    // }
}

  return (
    <>
      <br />
      <div className="container" style={{ textAlign: "center" }}>
        <form onSubmit={(e) => handlesubmit(e)}>
          <TextField
            required="true"
            id="outlined-required"
            name="username"
            label="Username / Email"
            onChange={(e) => getandsetuserNormalInputs(e)}
            value={input.value}
          />
          <br />
          <br />
          <TextField
            required="true"
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => getandsetuserNormalInputs(e)}
            value={input.value}
          />
          <br />
          <br />
          <Button type="submit" variant="outlined">
            Login
          </Button>
        </form>
      </div>

      
    </>
  )
}

export default Login