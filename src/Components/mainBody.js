import React, { Component } from 'react';
import styled from 'styled-components';

class MainBody extends Component {
    render() {
        return (
            <BodyWrap>
                <CoStudyWrap>
                    <TitleBox>
                        New Co-Study
                    </TitleBox>
                    <ContentBox>

                    </ContentBox>
                </CoStudyWrap>
                <CoStudyWrap>
                    <TitleBox>
                        New Co-Project
                    </TitleBox>
                    <ContentBox>
                        <ProjectContentBox>
                            new project 1
                        </ProjectContentBox>
                        <ProjectContentBox>
                            new project 2
                        </ProjectContentBox>
                        <ProjectContentBox>
                            new project 3
                        </ProjectContentBox>
                    </ContentBox>
                </CoStudyWrap>
                <CoStudyWrap>
                    <TitleBox>
                        New Q&A
                    </TitleBox>
                    <ContentBox>

                    </ContentBox>
                </CoStudyWrap>
            </BodyWrap>
        );
    }
}

const BodyWrap = styled.section`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center ;
    border : 2px dashed red;
`

const CoStudyWrap = styled.div`
    justify-content : center;
    align-items : center;
`

const TitleBox = styled.h3`
    justify-self : flex-start;
    border : 1px dashed red;
    width : 10rem;
    text-align : center;
    `

const ContentBox = styled.div`
    display : flex;
    justify-content : space-around;
    border : 1px dashed blue;
    width : 60rem;
    height : 15rem;
`

const ProjectContentBox = styled.div`
    border : 1px dashed green;
    display : inherit;
    width : 18rem;
`


export default MainBody;