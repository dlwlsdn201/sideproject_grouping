import React, { useState } from 'react';
import styled from 'styled-components';
import frontEndImg from '../../../../images/frontEnd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//--------styled-Components Codes-----------
const ContentBox = styled.div`
    display: flex;
    justify-content: space-around;
    margin : auto 1%;
    border: 1px dashed blue;
    width: 100%;
    min-width : 100%;
    height: 20em;
    flex-flow : row wrap;
`;

const Content = styled.div`
    /* flex : auto */
    display : flex;
    justify-content : space-around;
    align-items : center;
    border: 1px dashed green;
    width: 30%;
    max-width : 99%;
    height : 70%;
    max-height : 100%;
`;

const ImgWrap = styled.div`
    width : 90%;
    max-width : 90%;
    height : 50%;
    margin : 2% 0;
    padding : 0;
    flex-grow : 0;
    
`

const NewContentTitle = styled.h3`
    margin : 5% 0;
    flex-grow : 2;
    `

const NewContentSubject = styled.div`

`

const Personnel = styled.p`
    width : 90%;
    height :1%;
    text-align : right;
    font-size : 0.8em;
    flex-grow : 2;
`

// -----------------------------------------

const Contents = () => {
    const[info, setInfo] = useState(
        {   img : frontEndImg,
            title : "제목 정의되지 않음",
            maxPersonnel : 4,
            joinedPersonnel : 0 
        }
    )
    return (
        <ContentBox>
            <Content>
                <ImgWrap>
                    <img src={info.img} alt="front-End"></img>
                </ImgWrap>
                <NewContentTitle>
                    {info.title}
                </NewContentTitle>
                <FontAwesomeIcon icon={["fas", "coffee"]}/>
                {/* <button onClick={function(){
                    setInfo({
                        ...info, 
                        joinedPersonnel : info.joinedPersonnel +1})
                }}>참가</button> */}
                <Personnel>{info.joinedPersonnel}명 / {info.maxPersonnel}명</Personnel>
            </Content>
            <Content>Content2</Content>
            <Content>Content3</Content>
        </ContentBox>
    );
};



export default Contents;