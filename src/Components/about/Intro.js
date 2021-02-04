import React from 'react';
import Styled from 'styled-components';



const IntroWrapper = Styled.div`
    display: -webkit-box;
    justify-contents: center;
`

const TextBlock = Styled.p`
    padding: 5em;
    font-size: 1.5em;

`

const Intro = () => {
    return (
        <IntroWrapper>
            <TextBlock>
                Grouping 사이트에서는 웹 개발자의 꿈을 가지고 있는 예비 개발자들이 함께 성장해나갈 수 있도록 발판을 마련해 줄 커뮤니티 플랫폼입니다.
            </TextBlock>
        </IntroWrapper>
    );
};

export default Intro;