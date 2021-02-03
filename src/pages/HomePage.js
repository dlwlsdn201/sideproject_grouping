import React, {useState} from 'react';
import Template from "../components/base/Template";
import Main from '../components/base/Main';
import NewCoStudyContents from '../components/home/NewCoStudyContents';
import NewCoProjectContents from '../components/home/NewCoProjectContents';
import NewQnAContents from '../components/home/NewQnAContents';

const HomePage = () => {
    const [DATA, setDATA] = useState({
        target : 'New Co-Study',
        title : "FrontEnd Study",
        brief : "하반기 네이버 공채 준비하시는 분 같이해요~",
        tag : ["프론트엔드","네이버","카카오"],
        people : [4,5],
        subject : ["html5","css3","js","react"],
    })

    return (
        <Template>
            <Main>
                <NewCoStudyContents data={DATA}/>
                <NewCoProjectContents data={DATA}/>
                <NewQnAContents data={DATA}/>
            </Main>
        </Template>
    );
};

export default HomePage;