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
    display: inherit;
    height: 100%;
    width: 30%;
    padding : 2em 0.6em;
    margin: 1em 0.7em;
    background: #415580;
    /* border : 1px dotted red; */
    svg{
        animation: ${RotateHorizonal} 2s infinite;
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
    display: inline;
    background : #2b2b2b;
    text-align: center;
    width: auto;
    padding: 0.3rem;
    align-self: flex-end;
`
const Icon = {
    fontSize: '1.5em',
    margin: '0.2em'
}


const Content = ({data}) => {
    // const [title, setTitle] = useState('');
    // const [brief, setBrief] = useState('');
    // const [period, setPeriod] = useState('');
    // const [personnal, setPersonnal] = useState('');
    // const [tag, setTag] = useState('');
    
    const Tags = data.tag.map((TAG, index)=><li key={index}>#{TAG}</li>);
    const Subjects = data.subject.map((SUBJECT, index)=>{
        switch (SUBJECT) {
            case 'html5':
                return <FontAwesomeIcon key={index} style={Icon} icon={faHtml5} color="orange"/>;
            case 'css3':
                return <FontAwesomeIcon key={index} style={Icon} icon={faCss3} color="#526cff"/>;
            case 'js':
                return <FontAwesomeIcon key={index} style={Icon} icon={faJsSquare} color="#fdda3c"/>;
            case 'react':
                return <FontAwesomeIcon key={index} style={Icon} icon={faReact} spin color={palette.cyan[5]}/>;
            default: 
                return false;
        }
    });

    return (
        <StyledContentWrap>
            <StyledTitle>
                {data.title}
            </StyledTitle>
            <StyledBrief>
                {data.brief}
            </StyledBrief>
            <StyledRowWrap>
                <StyledPeriod>
                    2월1일 ~ 8월 30일
                </StyledPeriod>
                <StyledPersonnal>
                    {data.people[0]}명|{data.people[1]}명
                </StyledPersonnal>
            </StyledRowWrap>
            <StyledRowWrap>
                <StyledHashTag>
                    {Tags}
                </StyledHashTag>
                <StyledIconWrap>
                    {Subjects}
                </StyledIconWrap>
            </StyledRowWrap>
        </StyledContentWrap>
    );
};

export default Content;