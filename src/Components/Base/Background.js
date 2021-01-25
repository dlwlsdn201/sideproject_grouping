import React from 'react';
import Styled from 'styled-components';
import backgroundImg from '../../lib/images/background1.jpg';
import Header from './Header';

const BackgroundContainer = Styled.section`
    width : 90vw;
    height: 80vh;
    color: white;
`

const StyledBackgroundWrap = Styled.div`
    position: relative;
    background: url(${backgroundImg}) no-repeat 100%/100% 100%;
    background-size: 100%;
    width: 100%;
    height: 100%;
    
`

const StyledSloganWrap = Styled.h1`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    max-width: 100vw;
    margin-top : 14vh;
    /* max-height: 20vh; */
    /* height: 25vh; */
    text-align : center;


    span{
        font-size: 2.8vw;
    }

    p{
        font-weight: 300;
        font-size: 1.5vw;
        word-break: keep-all;
        margin-top : 3vh;
        margin-bottom: 0;
        line-height: 2rem;
    }

    @media(min-width: 320px) and (max-width: 768px){
        width: 100vw;
        height: 40vh;
        padding: 10vh;

        span{
        font-size: 2.5vw;
        }

        p{
            font-size: 1.5vw;
            max-width: 60%;
            line-height: 1.2rem;

    }
    }
`


const Background = () => {
    return (
        <BackgroundContainer>
            {/* <img src={backgroundImg} alt='Grouping'></img> */}
            <StyledBackgroundWrap/>
            <StyledSloganWrap>
                <span>그루핑에 들어온 이 순간, 당신은 이제 혼자가 아닙니다</span>
                <p>여기는 웹 개발자의 꿈을 가지고 있는 예비 개발자들이 함께 성장할 수 있도록 도와줄 커뮤니티 플랫폼입니다. </p>
            </StyledSloganWrap>
        </BackgroundContainer>
    );
};

export default Background;