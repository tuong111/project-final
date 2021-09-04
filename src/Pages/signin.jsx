import { Button, TextField } from '@material-ui/core';
import { React, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import InfoHeader from '../Components/info-header';
import userServices from './../Services/getUsersAPI';


export default function Signin(props) {

    const [data, setData] = useState([])
    useEffect(() => {
        userServices.getUserInfo().then(
            res => setData(res)
        )

    }, [])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const SignIn = () => {
        let isCorrect = false
        let userName = ''
        let id = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email && data[i].password === password) {
                isCorrect = true
                userName = `${data[i].['first name']} ${data[i].['last name']}`
                id = data[i].id
                break;
            }
        }

        if (isCorrect) {
            localStorage.setItem('isLogin', true)
            localStorage.setItem('userName', userName)
            localStorage.setItem('id',id)
            history.push('/')
            swal(
                {
                    title: "SUCCESS",
                    text: "Successful login",
                    icon: "success",
                    button: "OK",
                }
            )
        } else {
            localStorage.setItem('isLogin', false)
            swal(
                {
                    title: "FAIL",
                    text: "Email or Password wrong!!!",
                    icon: "error",
                    button: "OK",
                }
            )
            setEmail('')
            setPassword('')
        }
    }

    const EnterSignIn = (value) => {
        if (value === 'Enter') {
            SignIn()
        }
    }
    return (
        <div className="signin" onKeyDown={(e) => EnterSignIn(e.key)}>
                <InfoHeader/>
            <div className="signin-main">
                <div className="signin-form">
                    <div className="signin-form-main">
                        <h2>Sign In</h2>
                        <div className="signin-form-input">
                            <TextField
                                id="outlined-full-width"
                                label="Email"
                                style={{ margin: 8 }}
                                placeholder="Input your Email"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="signin-form-text text-primary">
                            <span>Forgot Password ?</span>
                        </div>
                        <div className="signin-form-btn">
                            <Button variant="contained" style={{ background: '#eb8810' }} onClick={SignIn}
                                fullWidth>
                                <b>LOG IN</b>
                            </Button>
                        </div>
                        <div className="signin-form-text-signup text-content">
                            <span>Dont have account ?</span>
                            <Link to="/signup" className="ml-20 link text-primary"><b>{`Sign Up!`}</b></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
