import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CertificationImg from '../../images/Certification/Certification.jpg';
import './Certification.css';


const Certification = () => {
    return (
        <div className='Certification'>

<Link className='CertificaIcon'  to="home">

<ArrowBackIosIcon /> <span> BookReader</span>
</Link>


            <h1>coming soon in short time,  stay tuned,</h1>



            <img src={CertificationImg} alt="" />
        </div>
    );
};

export default Certification;