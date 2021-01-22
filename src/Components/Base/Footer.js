import React from 'react';
import Styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledFooterContainer = Styled.footer`
    background : ${palette.gray[6]};
    width: 100%;
    
`
const Footer = () => {
    return (
        <StyledFooterContainer>
            Footer
        </StyledFooterContainer>  
    );
};

export default Footer;