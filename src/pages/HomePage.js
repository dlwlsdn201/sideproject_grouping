import React from 'react';
import Header from "../components/base/Header";
import HomeMain from "../components/home/HomeMain";
import Footer from '../components/base/Footer';
import Background from '../components/base/Background';

const HomePage = () => {
    return (
        <>
            <Header/>
            <Background />
            <HomeMain />
            <Footer />
        </>
    );
};

export default HomePage;