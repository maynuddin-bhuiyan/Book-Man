import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Instructors.css';



const Instructors = (props) => {
    console.log(props.instructors.profile);

    const {name, profile, tital, id} = (props.instructors)

    const history = useHistory();


    const handleInstructorAdded = (id) => {
        const uri = `/instructorDetails/${id}`;
        history.push(uri);
      }



    return (
        <div onClick={
            () => {
              handleInstructorAdded(id);
            }} className='Instructor'>
    <img src={profile} alt="" />
    <h1>{name}</h1>
    <p>{tital}</p>
    
    <Button onClick={
              () => {
                handleInstructorAdded(id);
              }}
              >View Details</Button>
    
        </div>
    );
};

export default Instructors;