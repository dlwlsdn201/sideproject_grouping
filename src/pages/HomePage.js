import React from 'react';
import Header from "../components/base/Header";
import HomeMain from "../components/home/HomeMain";
import Footer from '../components/base/Footer';
import Backgruond from '../components/base/Background';

const HomePage = () => {
    return (
        <>
            <Header/>
            <Backgruond />
            <HomeMain />
            <Footer />
        </>
    );
};

export default HomePage;