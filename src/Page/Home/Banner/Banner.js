import { Button, Grid } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner/banner.png';
import './Banner.css';
import shadow from '../../../images/banner/Path 3624.png'

const Banner = () => {
  return (
    <div className='FullBanner'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className='TextReleted' item xs={5}  md={5} sm={12} >
          <Button># NO 1 Platform for learning</Button>
          <h1>Discover new things to enrich your
            skill anytime anywhere</h1>

          <p>Education began in prehistory, as adults
            trained the young in the knowledge
            and skills deemed necessary
            in their society</p>

          <Button className='Button'>Enroll Now</Button>

        </Grid>
        <Grid className='PhotoReleted' item xs={7}  md={7} sm={12}>
          <div>
            <img className='PhotoOne' src={banner} alt="" />
            <img className='PhotoTwo' src={shadow} alt="" />
          </div>

        </Grid>

      </Grid>
    </div>
  );
};

export default Banner;