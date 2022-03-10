import { Button, Grid } from '@mui/material';
import React from 'react';
import Platformimg from '../../../images/Learning/Learning.jpg';
import YoutubeIcon from '../../../images/Learning/youtube.png';

import './Learning.css';

const Learning = () => {
    return (
        <div id='blogs' className='Learning'>

            <Grid container spacing={2}>
                <Grid item xs={10} md={6}>
                    <div className='LearningText'>
                        <Button className='LearningButton'># NO 1 Platform for learning</Button>
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

                <Grid item xs={2} md={6}>
                    <div className='LearningImg'>
                        <img className='LearningImgOne' src={Platformimg} alt="" />
                        <a target='_Blank' href="https://www.youtube.com/watch?v=VFfnqYQlvEc&list=RDVFfnqYQlvEc&start_radio=1">
                            <img className='LearningImgTwo' src={YoutubeIcon} alt="" />
                        </a>

                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Learning;
