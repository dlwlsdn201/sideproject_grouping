import React from 'react';
import styled from 'styled-components';

const HeaderBottomWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: lightcoral;
    flex-basis : 1;
`;


const Header_bottom = () => {
    return (
        <HeaderBottomWrap>
            슬로건 & 배경사진
        </HeaderBottomWrap>
    );
};



export default Header_bottom;


