/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";




const Header_top = () => {
    return (
        <Header_topWrap>
            <Logo/>
            <Nav/>
        </Header_topWrap>
    );
};

export default Header_top;


const Header_topWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
    background-color: lightcyan;
`;