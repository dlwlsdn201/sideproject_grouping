import React from 'react';
import styled from 'styled-components';

const HeaderBottomWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    /* width: 100%; */
    background-color: lightcoral;
`;


const Header_bottom = () => {
    return (
        <HeaderBottomWrap>
            Header 슬로건
        </HeaderBottomWrap>
    );
};



export default Header_bottom;


