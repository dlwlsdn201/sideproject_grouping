import React, {useState} from 'react';
import Styled, { keyframes } from 'styled-components';
// import {FaReact} from 'react-icons/fa';
import palette from '../../lib/styles/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faJsSquare,faHtml5,faCss3 } from '@fortawesome/free-brands-svg-icons';


const RotateHorizonal = keyframes`
    0%{
        transform: rotateY(0deg);
    }50%{
        transform: rotateY(180deg);
    }100%{
        transform: rotateY(360deg);
    }
`
const StyledContentWrap = Styled.div `
    /* position: relative; */
    /* width : 30%; */
    height: 100%;
    padding : 0.7rem;
    border : 1px dotted red;
    svg{
        animation: ${RotateHorizonal} 3s infinite;
    }
    /* (min-width: 320px) and  */
    @media(max-width: 768px){
        width: 38em;
        max-width: 100%;
        min-width: 50%;
        height: auto;
        /* padding: 10vh; */
    };

`;
const StyledTitle = Styled.strong`
    width : 100%;
    padding : 0 auto;
    border : 1px dashed blue; 
`;
const StyledBrief = Styled.p`
    width: 100%;
    padding: 0 auto;
    border: 1px dashed black;
`;
const StyledRowWrap = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow : row nowrap;
    box-sizing: border-box;
`;
const StyledPeriod = Styled.h6`
    border: 1px dashed brown;
    margin-top: 0;
`;
const StyledPersonnal = Styled.h5`
    border: 1px solid black;
    margin-top: 0;
`;
const StyledHashTag = Styled.ul`
    border : 1px solid green;
    width: 40%;
    height: 5rem;
    font-size: 0.8rem;
    padding: 0.3rem;
    /* line-height: 100%; */
    text-align: left;
    font-weight: 700;
    @media(max-width: 768px){
            font-size: 0.001rem;
            background: red;
        }
`
const StyledIconWrap = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background : #333333;
    border : 1px solid #3939ff;
    text-align: center;
    width: 5.5em;
    bottom: 1.4%;
    padding: 0.3rem;

    
`
const Icon = {
    fontSize: '1.5em',
    margin: '0.2em'
}




const Content = () => {
    const [title, setTitle] = useState('');
    const [brief, setBrief] = useState('');
    const [period, setPeriod] = useState('');
    const [personnal, setPersonnal] = useState('');
    const [tag, setTag] = useState('');
    
    return (
        <StyledContentWrap>
            <StyledTitle>
                프론트엔드 스터디
            </StyledTitle>
            <StyledBrief>
                하반기 네이버 입사를 목표로 프론트엔드 준비하실 분 모집합니다!
            </StyledBrief>
            <StyledRowWrap>
                <StyledPeriod>
                    2월1일 ~ 8월 30일
                </StyledPeriod>
                <StyledPersonnal>
                    2명|5명
                </StyledPersonnal>
            </StyledRowWrap>
            <StyledRowWrap>
                <StyledHashTag>
                    <li>#프론트엔드</li>
                    <li>#네이버</li>
                    <li>#강남구</li>
                </StyledHashTag>
                <StyledIconWrap>
                    <FontAwesomeIcon style={Icon} icon={faHtml5} color="orange"/>
                    <FontAwesomeIcon style={Icon} icon={faCss3} color="#526cff"/>
                    <FontAwesomeIcon style={Icon} icon={faJsSquare} color="#fdda3c"/>
                    <FontAwesomeIcon style={Icon} icon={faReact} spin color={palette.cyan[5]}/>
                </StyledIconWrap>
            </StyledRowWrap>
        </StyledContentWrap>
    );
};

export default Content;