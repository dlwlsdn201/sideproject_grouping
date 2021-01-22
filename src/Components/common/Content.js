import React from 'react';
import Styled from 'styled-components';

const StyledContentWrap = Styled.div `
    width : 30%;
    height : 15em;
    padding : 1em;
    border : 1px dotted red;
`
const StyledTitle = Styled.strong`
    width : 100%;
    padding : 0 auto;
    border : 1px dashed blue; 
`

const Content = () => {
    return (
        <StyledContentWrap>
            <StyledTitle>
                Title
            </StyledTitle>
        </StyledContentWrap>
    );
};

export default Content;