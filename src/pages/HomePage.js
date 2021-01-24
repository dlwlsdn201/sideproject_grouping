import React from 'react';
import Header from "../components/base/Header";
import Main from "../components/base/Main";
import Footer from '../components/base/Footer';
import Backgruond from '../components/base/Background';

const HomePage = () => {
    return (
        <>
            <Header/>
            <Backgruond />
            <Main />
            <Footer />
        </>
    );
};

export default HomePage;