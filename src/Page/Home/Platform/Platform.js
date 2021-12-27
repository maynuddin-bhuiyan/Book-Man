import { Button, Grid } from '@mui/material';
import React from 'react';
import './Platform.css';
import Platformimg from '../../../images/Platform/Platform.png';


const Platform = () => {
    return (
        <div id='emoloyes' className='Platform-part'>
            <Grid container spacing={2}>
                <Grid item xs={2} md={6}>
                    <div className='PlatformImg'>
                        <img src={Platformimg} alt="" />
                    </div>
                </Grid>
                <Grid item xs={10} md={6}>
                    <div className='PlatformText'>
                        <Button># NO 1 Platform for learning</Button>
                        <h1>Best platform for gain your
                            skill and learning new
                            things
                        </h1>
                        <p>A learning system based on formalized teaching
                            but with the help of electronic resources is known
                            as, E-learning. While teaching can be based in or
                            out of the classrooms the use of computers and
                            the internet forms the major component.</p>
                        <Button className='Button' variant="outlined">Enroll Now</Button>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default Platform;