import React, { useState } from 'react';
import { Button, ButtonGroup,  Input, InputAdornment, InputLabel } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockClockIcon from '@mui/icons-material/LockClock';
import { Link } from 'react-router-dom';
import './Login.css';

import icon1 from '../../../images/Login/facebook-logo.png';
import icon2 from '../../../images/Login/linkedin.png';
import icon3 from '../../../images/Login/google-plus.png';
import UseAuth from '../../../Hooks/UseAuth';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Login = () => {

  const { signInWithGoogle, isLoding, logInUser,  signInWithFacebook } = UseAuth();

  const hostory = useHistory();
  const location = useLocation();

  const [logingData, serLogingData] = useState({});

  const onBluer = (bler) => {
    const feild = bler.target.name;
    const value = bler.target.value;
    const newLoingData = {...logingData};
    newLoingData[feild] = value;
    serLogingData(newLoingData);
    console.log(newLoingData);


  }

 
  const handelOnClickGoogle = () => {
    signInWithGoogle(location, hostory)
  }


  const handelOnClickFacebook = () => {
    signInWithFacebook(location, hostory)
  }







  return (
    <div className='Log-In'>

      <h1>LOG-IN</h1>

      <br></br>
      <br></br>

      <form>

        <InputLabel style={{ color: '#000', marginRight: '200px', fontWeight: '700' }} htmlFor={"input-with-icon-adornment"}>
          User name/Email
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon sx={{color: '#1d37a3'}} />
            </InputAdornment>
          }
          placeholder='User name/Email'
          type='email'
          name='email'
          onBlur={onBluer}
        />
        <br></br>
        <br></br>


        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LockClockIcon sx={{color: '#1d37a3'}} />
            </InputAdornment>
          }

          placeholder='Password'
          type='Password'
          name='password'
          onBlur={onBluer}
        />
        <br></br>


        <small style={{ color: '#000', marginRight: '200px', fontWeight: '700' }} >Forget Password</small>
        <br></br>
        
        <br></br>


        <Button variant='contained'> Log-In </Button>


        
        <br></br>
        <br></br>
        <Button variant='contained'> OR </Button>
        <br></br>
        <br></br>

        <ButtonGroup className='Button-Images'>



         
          <Button onClick={handelOnClickFacebook} sx={{ width: '50%' }} >
            <FacebookIcon className='GoogleIcon' />
            </Button>
          <Button onClick={handelOnClickGoogle} sx={{ width: '50%' }} ><GoogleIcon className='GoogleIcon' /> </Button>
        </ButtonGroup>

        <br></br>
        <br></br>

        <Link to='/registration' style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          <small >New? Register Here</small>
          <Link to="/"><Button style={{ textDecoration: 'none', color: '#FFFFFF' }} variant="outlined">Home</Button></Link>
        </Link>

      </form>





    </div>
  );
};

export default Login;