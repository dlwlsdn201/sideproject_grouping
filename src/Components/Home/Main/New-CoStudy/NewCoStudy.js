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


const NewCoStudy = () => {
    return (
        <Container>
            <Contents/>
        </Container> 
    );
}



export default NewCoStudy;

