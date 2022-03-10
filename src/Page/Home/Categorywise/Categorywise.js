import React from 'react';
import Usedata from '../../Usedata/Usedata';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Books from '../Books/Books';
import './Categorywise.css';
import { Link } from 'react-router-dom';



const Categorywise = () => {
    const [course] = Usedata([]);

    console.log(course);
    
    return (
        <div className='Categorywise'>

            <Link className='CategorywiseIcon' to='home'>

            <ArrowBackIosNewIcon  />BookReader

            </Link>
            
            <h1>The Most Important Course Are</h1>
            <p>A professional course feeds our continuous need to upgrade our skills. It enables candidates  to identify their strengths as well as weaknesses.</p>

            <div className="Book">

                {
                    course.map(course => <Books

                        key={course._id}
                        courses ={course}

                    />)
                }
            </div>


        </div>
    );
};

export default Categorywise;