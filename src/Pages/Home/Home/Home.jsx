import React from 'react';
import Banner from '../Banner/Banner/Banner';
import SportsProgrammes from '../SportsProgrammes/SportsProgrammes';
import Facilities from '../Facilities/Facilities';
import Instructors from '../Instructors/Instructors';
import BoardMembers from '../BoardMembers/BoardMembers';
import AboutUs from '../AboutUs/AboutUs';
import ScrollUp from '../../../Components/ScrollUp/ScrollUp';
import ContactUs from '../ContactUs/ContactUs';
import QuickContact from '../QuickContact/QuickContact';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SportsProgrammes/>
            <BoardMembers/>
            <Instructors/>
            <AboutUs/>
            <ContactUs/>
            <QuickContact/>
            <ScrollUp/>
            <Facilities/>
            <News/>
        </div>
    );
};

export default Home;