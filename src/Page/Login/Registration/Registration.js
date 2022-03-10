import React, { useState } from 'react';
import { Button, ButtonGroup, FormControl, Input, InputAdornment} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockClockIcon from '@mui/icons-material/LockClock';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import './Registration.css';


import { AccountCircle } from '@mui/icons-material';
import UseAuth from '../../../Hooks/UseAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Registration = () => {

  const [logindata, setLogindata] = useState({});



  const {  bandNewUser,  isLogindata, userErrer, user, signInWithGoogle, signInWithFacebook } = UseAuth();
  const hostory = useHistory();
  const location = useLocation();


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

  bandNewUser(logindata.email, logindata.password, logindata.name, location, hostory);
}


 const handelOnClickGoogle = () => {
    signInWithGoogle(location, hostory)
  }


  const handelOnClickFacebook = () => {
    signInWithFacebook(location, hostory)
  }



    return (
        <div className='Log-In'>
             <h1 className='Header'>Registration</h1>

            

{<form onClick={handelOnclick}> 
  

            <FormControl variant="standard">

           
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle sx={{color: '#1d37a3'}} />
            </InputAdornment>
          }
          placeholder='User name'
        />

            
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon sx={{color: '#1d37a3'}} />
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
              <LockClockIcon sx={{color: '#1d37a3'}} />
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
              <LockClockIcon sx={{color: '#1d37a3'}} />
            </InputAdornment>
          }

          placeholder='Re-Password'
          type='Password'
          variant="standard"
          name='password2'
          onBlur={onBlure}
        />

<small style={{ color: 'blue', fontWeight: '700', padding: '20px' }} >By continue you agree to conditions and privacy notice</small> 
        



          <Button sx={{marginBottom: '20px'}} variant='contained' type="Submit"> Registration </Button>
      </FormControl>

      </form>}

      
      <Button variant='contained'> OR </Button>
      <br></br>
      <br></br>

          <ButtonGroup className='Button-Images'>

          <Button onClick={handelOnClickGoogle} sx={{ width: '50%', border: 'none' }} type="Submit"><GoogleIcon className='GoogleIcon' /> </Button>

<br />
<Button onClick={handelOnClickFacebook} sx={{ width: '50%', border: 'none' }} type="Submit"> <FacebookIcon className='GoogleIcon' /> </Button>
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