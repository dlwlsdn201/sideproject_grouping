import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png'

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[2]};
    /* flex로 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    img { 
        max-width : 80%;
    }

    .logo-area {
        display: inline-block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        font-size : 2em;
        letter-spacing: 2px;
        text-decoration: none;
        text-decoration-style: none;
        
    }
    box-shadow: 0 0 8px rgba(0,0,0,0.025); 
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;

`
;

const AutoTemplate = ({children}) => {
    return (
    <AuthTemplateBlock>
        <WhiteBox>
            <div className="logo-area">
                <img src={Logo} alt='logo'></img>
                <Link style={{textDecoration:"none"}} to="/">Grouping</Link>
            </div>
            {children}
        </WhiteBox>
    </AuthTemplateBlock>
    )
};

export default AutoTemplate;