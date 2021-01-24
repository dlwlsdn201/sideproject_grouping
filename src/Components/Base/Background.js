import React from 'react';
import Styled from 'styled-components';
import backgroundImg from '../../lib/images/background1.jpg';


const BackgroundContainer = Styled.section`
    width : 100%;
    height: 33.3%;
    img{
        width: 100%;
        height: 100%;
        opacity: 0.8;
        z-index: 0;
    }
`


const Background = () => {
    return (
        <BackgroundContainer>
            <img src={backgroundImg} alt='Grouping'></img>
        </BackgroundContainer>
    );
};

export default Background;