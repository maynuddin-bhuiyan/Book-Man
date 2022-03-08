import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../../Hooks/UseAuth';

const Navigation = () => {

  const { user, logOutUser } = UseAuth();
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>

        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto navpart"  >

            <Link to="/home" className="Itam">Home</Link>
            
            <HashLink className="Itam" smooth to="/home#colleges">Category</HashLink>
            
            <HashLink className="Itam" smooth to="/home#emoloyes">Learning</HashLink>
            
            <HashLink className="Itam" smooth to="/home#blogs">Blogs</HashLink>

            <Link to="/courses" className="Itam">Courses</Link>
            <Link className="Itam" Link to="/dashboard">Dashboard</Link>
          </Nav>
          <Nav className="navpart">

            {


              user?.email ?
                <Button className="Itam-login" variant="outlined" onClick={logOutUser}> Log-Out</Button>

                :

                <Link to="/login">
                  <Button  className="Itam-login" variant="outlined">Log In</Button>
                </Link> &&

                <Link to="/registration">
                  <Button className="Itam-login" variant="outlined">Registration</Button>
                </Link>



            }







          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;