import React from 'react';
import Instructors from '../Instructors/Instructors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Usedata from '../Usedata/Usedata';
import { Link } from 'react-router-dom';
import './Instructor.css';

const Instructor = () => {

    const [course] = Usedata([]);

    console.log(course);


    return (
        <div className='Instructor-text'>

<Link className='InstructorIcon' to='/home'>
                <ArrowBackIosNewIcon /> BookReader
                </Link>

            


            <h1>The Most Important Instructor We Have</h1>

    <div className="Instructors">
        {course.map (course => <Instructors
        
        key={course._id}
        instructors ={course}
        
        
        
        />)}
        </div>

        </div>
    );
};

export default Instructor;