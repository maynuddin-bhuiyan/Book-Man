import React from 'react';
import './Footer.css';
import logo from '../../../images/Footer/FooterLogo.png';
import { Grid, Typography } from '@mui/material';
import FacebookIcon from '../../../images/social/facebook.png';
import TwitterIcon from '../../../images/social/twitter.png';
import LinkedInIcon from '../../../images/social/linkedin.png';
import GitHubIcon from '../../../images/social/github.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer'>


<Grid className='Footer_Text' container spacing={2} columns={12}>

<Grid className='Text' item xs={4} md={4}>
    <Typography>
    <Link className='text-alin' to="/home">
        <img src={logo} alt="" /></Link>
    </Typography>
    <Typography variant="h6" >
        <p>Most Popular Types Of CCTV Cameras Available Here</p>
    </Typography>

</Grid>
<Grid className='Link' item xs={4} md={4}>
    <Typography>

        <h2>Quick Link </h2>

        <ul className='UnorderLisrt'>
            <Link className='Itam' to='access'>
                <li>Help Center Support</li>
            </Link>

            <Link className='Itam' to='courses'>
                    <li>Best Courses
</li>
            </Link>

            <Link className='Itam' to='privacyPolicy'>
                    <li>Privacy Policy</li>
            </Link>


            <Link className='Itam' to='certification'>
                  <li>Terms &amp; Conditions</li>
            </Link>
            
            
            
        </ul>
    </Typography>
</Grid>




<Grid className='Contact' item xs={4} md={4}>
    <Typography >
        <h2>Contact Us</h2>

       <div className="Contact-text">
           <h5>eye-world.com</h5>
           <h6>01908145097</h6>
           </div>
            
            

        

            <div className="Contact-img">
        <a href="https://www.facebook.com/freelancer.maynuddin.7" target='_blank'> <img src={FacebookIcon} alt="" /></a>

        <a href="https://www.linkedin.com/in/maynuddin-bhuiyan-7909a5216/" target='_blank'> <img src={LinkedInIcon} alt="" /></a>

        <a href="https://github.com/uxmain" target='_blank'> <img src={GitHubIcon} alt="" /></a>

        <a href="https://twitter.com/MaynuddinBh/" target='_blank'> <img src={TwitterIcon} alt="" /></a>

        </div>
    </Typography>
</Grid>




</Grid>

        </div>
    );
};

export default Footer;