import React, {useState} from 'react';
import Styled from 'styled-components';


const StyledMainContainer = Styled.main`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-contents: center;
    background : white;
    width: 90vw;
    height: 90rem;
`

const Main = ({children}) => {
    return (
        <StyledMainContainer>
            {children}
        </StyledMainContainer>
    );
};

export default Main;