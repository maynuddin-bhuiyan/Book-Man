import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ApprovalIcon from '@mui/icons-material/Approval';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import './CourseDetails.css';


const CourseDetails = () => {


    const {id} = useParams();

    const [courseDetails, setCourseDetails] = useState([]);
    const [detailsItam, setDetailsItam] = useState([]);
    


    useEffect( () => {
        fetch('https://warm-bayou-66003.herokuapp.com/course')
        .then(res => res.json())
        .then(data => setCourseDetails(data))
    }, [])


    console.log(courseDetails);



    useEffect( () => {
        if(courseDetails.length > 0){
            const macthData = courseDetails.find(courseDetails => courseDetails.id == id)
            setDetailsItam(macthData)
        }


    }, [courseDetails])

    console.log(detailsItam);









    return (
        <div className='CourseDetails'>

         
<Link className='NewIcon' to='/'>

<ArrowBackIosNewIcon  />BookReader

</Link>


            <div className="CourseDetailsItam">
                <img className='DetailsImg' src={detailsItam.img} alt="" />
            <h1>{detailsItam.course}</h1>

            <div className="CourseDetailsText">
            <h2> <span className='Requirements'>Requirements</span>   {detailsItam.Requirements}</h2>
            <p>{detailsItam.tital}{detailsItam.designation}</p>
            </div>
            

            <div className="includes">
               

           

           
            <h3>Access <AccessibilityIcon /> {detailsItam.access}</h3>
            <h4>Completion <ApprovalIcon />  {detailsItam.completion}</h4>
            <h5>Video <VideoLibraryIcon /> {detailsItam.video}</h5>
            


            </div>
            
            </div>

        </div>
    );
};

export default CourseDetails;