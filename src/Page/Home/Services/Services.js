import { Grid } from '@mui/material';
import React from 'react';
import './Services.css';
import book1 from '../../../images/svg/book-reader (1).png'
import book2 from '../../../images/svg/online-course.png'
import book3 from '../../../images/svg/supporter.png'
import book4 from '../../../images/svg/learn.png'

const Services = () => {
    return (
        <div id='colleges' className='Services'>
            <h1>Book-Reader ensured your satisfication</h1>


            <Grid container spacing={2} columns={16}>

                <Grid item xs={4}>

                    <div className='srevice'>
                        <img src={book1} alt="" />
                        <h2>Expert Instructor</h2>
                        <p>With an expert instructor
                            we make sure your course
                            going well</p>
                        <a href="https://bookreader.en.softonic.com/" target="_blank">Read More</a>

                    </div>
                </Grid>

                <Grid item xs={4}>

                    <div className='srevice'>
                        <img src={book2} alt="" />
                        <h2>Online Courses</h2>
                        <p>Choose your course from
                            1 milion+ online video
                            classes</p>
                        <a href="https://www.rokomari.com/book" target="_blank" >Read More</a>
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className='srevice'>

                        <img src={book3} alt="" />
                        <h2>Lifetime Access</h2>
                        <p>Book-reader ensure your
                            access for life time. And
                            grants your sucess</p>
                        <a href="https://www.pcmag.com/deals/get-lifetime-access-to-12mins-micro-book-library-for-29" target="_blank">Read More</a>
                    </div>

                </Grid>

                <Grid item xs={4}>

                    <div className='srevice'>

                        <img src={book4} alt="" />
                        <h2>Certification</h2>
                        <p>Book-reader ensure your
                            access for life time. And
                            grants your sucess</p>
                        <a href="https://www.comptia.org/training/books" target="_blank">Read More</a>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default Services;