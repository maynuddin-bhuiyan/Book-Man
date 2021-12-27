import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import Categorywise from '../Categorywise/Categorywise';
import Learning from '../Learning/Learning';
import Platform from '../Platform/Platform';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>

            <Services></Services>
            <Platform></Platform>
            <Categorywise></Categorywise>
            <Learning></Learning>
            <Footer></Footer>


        </div>
    );
};

export default Home;