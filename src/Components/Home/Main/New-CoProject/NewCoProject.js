import React, { Component } from 'react';
import styled from 'styled-components';
import Contents from './Contents';

//--------styled-Components Codes-----------
const Container = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: center;
    align-items: center;
    width : 100%;
    height: 100%;
    margin : 2% auto;
`;
//------------------------------------------


const NewCoProject = () => {
    return (
        <Container>
            <Contents/>
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



export default NewCoProject;

