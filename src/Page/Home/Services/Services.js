import React from 'react';
import book1 from '../../../images/svg/book-reader (1).png'
import book2 from '../../../images/svg/online-course.png'
import book3 from '../../../images/svg/supporter.png'
import book4 from '../../../images/svg/learn.png'
import Usedata from '../../Usedata/Usedata';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './Services.css';

const Services = () => {

    const [course] = Usedata([])
    console.log(course);






    return (
        <div id='colleges' className='Services'>
            <h1>Expand your career opportunities</h1>


            <Grid container spacing={2} columns={16}>

                <Grid item xs={4}>
                    <Link className='LinkItam' to="instructor">
                        <div className='srevice'>
                            <img src={book1} alt="" />
                            <h2>Expert Instructor</h2>
                            <p>With an expert instructor
                                we make sure your course
                                going well</p>

                            <Link to="instructor">
                                Read More</Link>

                        </div>
                    </Link>
                </Grid>

                <Grid item xs={4}>
                    <Link className='LinkItam' to="courses">
                        <div className='srevice'>
                            <img src={book2} alt="" />
                            <h2>Online Courses</h2>
                            <p>Choose your course from
                                1 milion+ online video
                                classes</p>
                            <Link to="courses">
                                Read More</Link>
                        </div>
                    </Link>
                </Grid>

                <Grid item xs={4}>
                    <Link className='LinkItam' to="access">
                        <div className='srevice'>

                            <img src={book3} alt="" />
                            <h2>Lifetime Access</h2>
                            <p>Book-reader ensure your
                                access for life time. And
                                grants your sucess</p>
                            <Link to="access">
                                Read More</Link>
                        </div>
                    </Link>

                </Grid>

                <Grid item xs={4}>
                    <Link className='LinkItam' to="certification">
                        <div className='srevice'>

                            <img src={book4} alt="" />
                            <h2>Certification</h2>
                            <p>Book-reader ensure your
                                access for life time. And
                                grants your sucess</p>
                            <Link to="certification">
                                Read More</Link>
                        </div>
                    </Link>
                </Grid>

            </Grid>
        </div>
    );
};

export default Services;