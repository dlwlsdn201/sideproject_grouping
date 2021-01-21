import React from 'react';
import logoImg from "../../../../../images/logo.png";
import styled from "styled-components";

//Header Logo 컴포넌트

const Logo = () => {
    return (
        <LogoWrap>
            <img src={logoImg} width="100%"></img>
        </LogoWrap>
    );
};

const LogoWrap = styled.div`
    display: flex;
    align-items : flex-start;
    width: 10%;
    height : 3em;
    /* max-width : 30em; */
    /* min-width: 5em; */
    background-color: blueviolet;
`;

export default Logo;