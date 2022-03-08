import React from 'react';
import Customer from '../../Customer/Customer';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import Learning from '../Learning/Learning';
import Platform from '../Platform/Platform';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Navigation />
            <Banner />
            <Services />
            <Platform />
            <Customer />          
            <Learning />
            <Footer />


        </div>
    );
};

export default Home;