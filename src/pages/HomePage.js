import React, {useState} from 'react';
import Template from "../components/base/Template";
import Main from '../components/base/Main';
import NewCoStudyContents from '../components/home/NewCoStudyContents';
import NewCoProjectContents from '../components/home/NewCoProjectContents';
import NewQnAContents from '../components/home/NewQnAContents';

const HomePage = () => {
    const [Studies, setStudyDATA] = useState(
        {
            target : 'Co-Study',
            title : "FrontEnd Study",
            brief : "하반기 네이버 공채 준비하시는 분 같이해요~",
            tag : ["프론트엔드","네이버","카카오"],
            people : [4,5],
            subjects : ["html5","css3","js","react"],
        },
    )

    const [Projects, setProjectDATA] = useState(
        {   id : 1,
            target : 'Co-Project',
            title : "Let's make Project",
            brief : "심리테스트 웹페이지 제작",
            tag : ["심리테스트","포트폴리오","주3회"],
            people : [2,4],
            positions : ["front","back","server","design"],
        },

    )

    const [QnAs, setQnADATA] = useState(
        {
        target : 'QnA',
        title : "리액트 프로젝트 처음 시작 시 고려해야할 점?",
        date : "2021-02-04",
        tag : ["프론트엔드","네이버","카카오"],
        views : [35],
    })

    return (
        <Template>
            <Main>
                <NewCoStudyContents Studies={Studies}/>
                <NewCoProjectContents Projects={Projects}/>
                <NewQnAContents data={QnAs}/>
            </Main>
        </Template>
    );
};

export default HomePage;