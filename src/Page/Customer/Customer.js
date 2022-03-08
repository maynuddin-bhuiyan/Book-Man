import React from 'react';
import image1 from '../../images/Customer/book1.png';
import image2 from '../../images/Customer/book2.png';
import image3 from '../../images/Customer/book3.png';
import image4 from '../../images/Customer/book4.png';
import image5 from '../../images/Customer/book5.png';

import './Customer.css';


const Customer = () => {
    return (
        <div className='Customer'>
            <h1>Our Valued  Sponsored </h1>
            <p>Large online bookstores offer used books for sale, too. Individuals wishing to sell their used Books</p>

            <div className="imeages">
                
                
                
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image1} alt="" />
                <img src={image2} alt="" />
               
                </div>



        </div>
    );
};

export default Customer;