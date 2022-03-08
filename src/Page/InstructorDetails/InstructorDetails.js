import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './InstructorDetails.css';
import { useParams } from 'react-router-dom';



const InstructorDetails = () => {




    const {id} = useParams();

    const [instructorDetails, setInstructorDetails] = useState([]);
    const [detailsItam, setDetailsItam] = useState([]);




    useEffect( () => {
        fetch('http://localhost:7000/course')
        .then(res => res.json())
        .then(data => setInstructorDetails(data))
    }, [])


    console.log(instructorDetails);





    useEffect( () => {
        if(instructorDetails.length > 0){
            const macthData = instructorDetails.find(instructorDetails => instructorDetails.id == id)
            setDetailsItam(macthData)
        }


    }, [instructorDetails])

    console.log(detailsItam);



    return (
        <div className='InstructorDetails'>

<Link className='NewIcon' to='/'>

<ArrowBackIosNewIcon  />BookReader

</Link>


            <h1>{detailsItam.name}</h1>
        </div>
    );
};

export default InstructorDetails;