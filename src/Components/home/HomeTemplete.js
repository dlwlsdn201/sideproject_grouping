import React from 'react';
import Styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Content from '../common/Content';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledMainContainer = Styled.main`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-contents: center;
    background : white;
    width: 90vw;
    height: auto;
`

const StyledOddSectionWrap = Styled.section`
    display: block;
    padding : 2em;
    flex: 1;
    width: 100%;
    background : ${palette.skyblue[1]};
`;

const StyledEvenSectionWrap = Styled.section`
    display: inherit;
    padding : 2em;
    flex: 1;
    width: 100%;
    background : ${palette.gray[5]};
`;

// const StyledSlideBlock = Styled.div`
//         display: flex;
//         flex-flow: row wrap;
//     `


const settings = {
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	//드래그 가능 여부
    swipeToSlide: true,
};


const DATA = {
    target : 'New Co-Study',
    title : "FrontEnd Study",
    brief : "하반기 네이버 공채 준비하시는 분 같이해요~",
    tag : ["프론트엔드","네이버","카카오"],
    people : [4,5],
    subject : ["html5","css3","js","react"],
};

const HomeTemplete = () => {
    return (
        <StyledMainContainer>
            <StyledOddSectionWrap>
                <h1>{DATA.target}</h1>
                <Slider {...settings}>
                    <div className="StyledSlideBlock slider-item">
                        <Content data={DATA}/>
                        <Content data={DATA}/>
                        <Content data={DATA}/>
                    </div>
                    <div className="StyledSlideBlock slider-item">
                        <Content data={DATA}/>
                        <Content data={DATA}/>
                        <Content data={DATA}/>
                    </div>
                </Slider>
            </StyledOddSectionWrap>
            <StyledEvenSectionWrap>
                section2_Co-Project 
            </StyledEvenSectionWrap>
            <StyledOddSectionWrap>
                section3_Q&A
            </StyledOddSectionWrap>
        </StyledMainContainer>
    );
};

export default HomeTemplete;