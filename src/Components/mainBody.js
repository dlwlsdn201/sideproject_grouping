import React, { Component } from 'react';
import styled from 'styled-components';

class mainBody extends Component {
    render() {
        return (
            <BodyWrap>
                'Body' Component Area
            </BodyWrap>
        );
    }
}

const BodyWrap = styled.div`
    display : flex;
    justify-content : center;
    align-items : center ;
    border : 2px dashed red;
    height : 500px;
`


export default mainBody;