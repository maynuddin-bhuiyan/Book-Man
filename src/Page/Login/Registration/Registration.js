import React, { useState } from 'react';
import { Button, ButtonGroup, FormControl, Input, InputAdornment} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockClockIcon from '@mui/icons-material/LockClock';
import { Link } from 'react-router-dom';
import './Registration.css';

import icon1 from '../../../images/Login/facebook-logo.png';
import icon2 from '../../../images/Login/linkedin.png';
import icon3 from '../../../images/Login/google-plus.png';

import { AccountCircle } from '@mui/icons-material';
import UseAuth from '../../../Hooks/UseAuth';
import { useHistory } from 'react-router-dom';

const Registration = () => {

  const [logindata, setLogindata] = useState({});



  const {  bandNewUser, loginWithGoogle } = UseAuth();
  const hostory = useHistory();


  const onBlure = e => {

    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logindata };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLogindata(newLoginData)

}

const handelOnclick = e => {
  e.preventDefault();
  if(logindata.password2 !== logindata.password){
      alert('jkdfhgfjkdsg ')
      return
  }

  bandNewUser(logindata.email, logindata.password, logindata.name, hostory);
}




    return (
        <div className='Log-In'>
             <h1>Registration</h1>

            <br></br><br></br>

{<form onClick={handelOnclick}> 
  

            <FormControl variant="standard">

           
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          placeholder='User name'
        />

            
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
          placeholder='Email'
          type='email'
          label="Name"
          variant="standard"
          name='email'
          onBlur={onBlure}
        />


        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LockClockIcon />
            </InputAdornment>
          }

          placeholder='Password'
          type='Password'
          variant="standard"
          name='password'
          onBlur={onBlure}
        />

        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LockClockIcon />
            </InputAdornment>
          }

          placeholder='Re-Password'
          type='Password'
          variant="standard"
          name='password2'
          onBlur={onBlure}
        />

<small style={{ color: '#000', fontWeight: '700' }} >By continue you agree to conditions and privacy notice</small> 
        <br></br>



          <Button variant='contained' type="Submit"> Registration </Button>
      </FormControl>

      </form>}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button variant='contained'> OR </Button>
      <br></br>
      <br></br>

          <ButtonGroup className='Button-Images'>

      <Button  sx={{ width: '50%' }} type="Submit"><img src={icon1} alt="" /></Button>
      <Button  sx={{ width: '50%' }} type="Submit"><img src={icon2} alt="" /></Button>
      <Button onClick={loginWithGoogle}  sx={{ width: '50%' }} type="Submit"><img src={icon3} alt="" /></Button>
      </ButtonGroup>

      <br></br>
      <br></br> <br></br>
      <br></br>

      <Link to='/login' style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                    <small >Already have an account? Log in</small> 

                <Link to="/"><Button style={{ textDecoration: 'none', color: '#FFFFFF' }} variant="outlined">Home</Button></Link>

                </Link>

                

        </div>
    );
};

export default Registration;