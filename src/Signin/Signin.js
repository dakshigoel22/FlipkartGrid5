import { GoogleLogin } from '@react-oauth/google';
import logo from "../assets/images/logo/logo.jpg"

import "./Signin.css";
import { useDispatch } from 'react-redux';
import { setToken } from '../store/user/userSlice';

function Signin() {
  const dispatch = useDispatch();

  return <div className="login-page">
    <div className='login-heading'>Welcome</div>
    <div className='app-logo'>
      <img src={logo} width="150" alt="app logo" />
    </div>
    <div className='login-subheading'>Signin using social links.</div>
    <div className="google-login">
      <GoogleLogin
        onSuccess={credentialResponse => {
          dispatch(setToken(credentialResponse.credential))
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  </div>;
}

export default Signin;