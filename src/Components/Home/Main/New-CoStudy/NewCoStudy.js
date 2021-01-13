import React, { Component } from 'react';
import styled from 'styled-components';
import Content1 from './Contents/Contents1';
import Content2 from './Contents/Contents2';
import Content3 from './Contents/Contents3';



const NewCoStudy = () => {
    return (
        <Container>
            <ContentBox>
                Content1
            </ContentBox>
            <ContentBox>
                Content2
            </ContentBox>
            <ContentBox>
                Content3
            </ContentBox>
        </Container> 
    );
}

const Container = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: center;
    align-items: center;
    width : 100%;
    height: 100%;
    margin : 2% auto;
`;

const ContentBox = styled.div`
    display: flex;
    justify-content: space-around;
    margin : auto 1%;
    border: 1px dashed blue;
    width: 30%;
    height: 16em;
`;

export default NewCoStudy;

