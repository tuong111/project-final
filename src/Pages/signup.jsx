import { Button, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import userServices from './../Services/getUsersAPI';
import { useState } from 'react';
import swal from 'sweetalert';
import InfoHeader from '../Components/info-header';

export default function Signup(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    userServices.getUserInfo().then(
      res => setData(res)
    )

  }, [])
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const clickSignUp = () => {
    let isExist = false
    for ( let i = 0; i < data.length; i++){
        if (data[i].email === email) {
              isExist =true
              break;
        }
    }
    if (isExist) {
        swal({
            title: "FAIL",
            text: "Email already exists",
            icon: "error",
            button: "OK",
          });
          setFirstName('')
          setLastName('')
          setEmail('')
          setPassword('')
    }else {
        userServices.addUserInfo({
            "first name" : firstname,
            "last name" : lastname,
            "email" : email,
            "password" : password,
            "isLogin" : false
        })
        swal({
            title: "SUCCESS",
            text: "Your account has been registered succesfully",
            icon: "success",
            button: "OK",
          });
          history.push('/signin')
          userServices.getUserInfo()
    }

}
  return (
    <div className="signin">
        <InfoHeader/>
      <div className="signin-main">
        <div className="signin-form">
          <div className="signin-form-main">
            <h2>Sign Up</h2>
            <div className="signin-form-main-2col">
              <TextField
                id="outlined-full-width"
                label="First Name"
                style={{ margin: 8, width: '45%' }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange = {(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="outlined-full-width"
                label="Last Name"
                style={{ margin: 8, width: '45%' }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange = {(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="signin-form-input">
              <TextField
                id="outlined-full-width"
                type="mail"
                label="Email"
                style={{ margin: 8 }}
                placeholder="Input your Email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                className="mt-10"
                onChange = {(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="signin-form-input">
              <TextField
                id="outlined-full-width"
                type="password"
                label="Password"
                style={{ margin: 8 }}
                placeholder="Input your Password"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                className="mt-10"
                onChange = {(e)=> setPassword(e.target.value)}
              />
            </div>


            <div className="text-content">
              <span>By clicking the “Create Account” button, I agree to the Terms of Use and Privacy Policy.</span>
            </div>
            <div className="signin-form-btn mt-20">
              <Button variant="contained" style={{ background: '#eb8810' }} onClick = {clickSignUp}
                fullWidth>
                <b >CREATE ACCOUNT</b>
              </Button>
            </div>
            <div className="signin-form-text-signup text-content mt-20">
              <span>Already have an account?</span>
              <Link to="/signin" className="ml-20 link text-primary"><b>Sign In</b></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
