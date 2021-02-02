import React from 'react';
import Styled from 'styled-components';
import WriteForm from './WriteForm';

const WriteContainer = Styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-contents: center;
    color: black;

`

const WriteTemplate = ({children}) => {

    
    return (
        <WriteContainer>
            {children}
        </WriteContainer>
    );
};

export default WriteTemplate;