import React, { Component } from 'react';
import styled from 'styled-components';
import Content1 from './Contents/Contents1';
import Content2 from './Contents/Contents2';
import Content3 from './Contents/Contents3';
import ContentBox from '../New-CoStudy/NewCoStudy';
import Container from '../New-CoStudy/NewCoStudy';


const NewQnA = () => {
    return (
        <Container>
            <ContentBox>
                {/* Content1
                    COntent2
                    Content3
                */}
            </ContentBox>
        </Container>
    );
}

// const Container = styled.div`
//     justify-content: center;
//     align-items: center;
// `;


// const ContentBox = styled.div`
//     display: flex;
//     justify-content: space-around;
//     border: 1px dashed blue;
//     width: 60vw;
//     height: 15vw;
// `;

export default NewQnA;

