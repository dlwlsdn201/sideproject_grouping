import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-around;
    margin : auto 1%;
    border: 1px dashed blue;
    width: 100%;
    height: 20em;
`;


const Content = styled.div`
    border: 1px dashed green;
    display: inherit;
    width: 30%;
    height : 90%;
`;



const Contents = () => {
    return (
        <ContentBox>
            <Content>
                Content1
            </Content>
            <Content>
                Content2
            </Content>
            <Content>
                Content3
            </Content>
        </ContentBox>
        );
};

export default Contents;