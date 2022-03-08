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
import { blueGrey } from '@mui/material/colors';



const Login = () => {

  const { loginWithGoogle, isLoding, logInUser } = UseAuth();

  const [logingData, serLogingData] = useState({});

  const onBluer = (bler) => {
    const feild = bler.target.name;
    const value = bler.target.value;
    const newLoingData = {...logingData};
    newLoingData[feild] = value;
    serLogingData(newLoingData);
    console.log(newLoingData);


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
              <EmailIcon />
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
              <LockClockIcon />
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
        <br></br><br></br>
        <br></br>


        <Button variant='contained'> Log-In </Button>


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button variant='contained'> OR </Button>
        <br></br>
        <br></br>

        <ButtonGroup className='Button-Images'>



          <Button sx={{ width: '50%' }} type="Submit"><img src={icon1} alt="" /></Button>
          <Button sx={{ width: '50%' }} type="Submit"><img src={icon2} alt="" /></Button>
          <Button onClick={loginWithGoogle} sx={{ width: '50%' }} type="Submit"><img src={icon3} alt="" /></Button>
        </ButtonGroup>

        <br></br>
        <br></br> <br></br>
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