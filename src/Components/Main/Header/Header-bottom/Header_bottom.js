import React from 'react';
import styled from 'styled-components';



const Header_bottom = () => {
    return (
        <Header_BottomWrap>
            Header 슬로건
        </Header_BottomWrap>
    );
};

export default Header_bottom;



const Header_BottomWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    /* width: 100%; */
    background-color: lightcoral;
`;