import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../imges.jpg';
import Common from './Common';
import './Home.scss';

const Home = () => {

    return(
        <>
            <Common  name="Grow your business with" imgsrc={web} visit="/services" btname="Get Started"/>
        </>
    );
}

export default Home;