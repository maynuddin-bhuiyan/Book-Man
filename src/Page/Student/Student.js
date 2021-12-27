import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Students from '../Students/Students';

const Student = () => {

    const [student, setStudent] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('http://localhost:7000/student')
            .then(res => res.json())
            .then(data => setStudent(data))
    },
        []);

    return (
        <div>
            <h1> Student Page</h1>

            <div className="Book">

                {
                    student.map(student => <Students

                        key={student._id}
                        student={student}

                    />)
                }

<Link to="/"><Button  variant="outlined"> Home </Button></Link>
            </div>





        </div>
    );
};

export default Student;