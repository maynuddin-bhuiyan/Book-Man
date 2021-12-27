import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png'
import { Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div className='Footer'>


            <Grid className='Footer_Text' container spacing={2} columns={16}>

                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h1" component="h2">
                        <img src={logo} alt="" />
                    </Typography>
                    <Typography variant="h6" >
                        <p>The best social network for <br></br>
                            business</p>
                    </Typography>

                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Quick Link <br /><br /><br />

                        <ul>
                            <li>Help center</li>
                            <li>Apps</li>
                            <li>Privacy Policy</li>
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Get started <br /> <br /> <br />


                        <a href="https://condescending-jennings-f3ad71.netlify.app/#" target='_blank'> With Maynuddin Bhuiyan</a>
                    </Typography>
                </Grid>
                <Grid className='Text' item xs={4} md={4}>
                    <Typography variant="h5" component="h2">
                        Contact Us <br /> <br /> <br />


                        <ul>
                            <li>mayuddinbhuiyan.com</li>
                            <li>01908145097</li>

                        </ul>
                    </Typography>
                </Grid>



            </Grid>

        </div>
    );
};

export default Footer;