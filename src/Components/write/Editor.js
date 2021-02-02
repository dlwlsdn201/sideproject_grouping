import React, {useRef, useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import Styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const EditorBlock = Styled(Responsive)`
    /* 페이지 상하 여백 */
    padding: 5rem 0;
`

const TitleInput = Styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[4]};
    margin-bottom: 2rem;
    width: 100%;
`;

const QuillWrapper = Styled.div`
    /* 최소크기 지정 및 padding 제거 */
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
        color: black;
    }
    .ql-editor.ql-blank::before{
        left: 0px;
    }
`;

const Editor = () => {
    const quillElement = useRef(null); //Quill 적용할 DivElement 설정
    const quillInstance = useRef(null); //Quill 인스턴스 설정

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요..',
            modules: {
                // 이외 옵션 --> https://quilljs.com/docs/modules/toolbar
                toolbar: [
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic','underline','strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block','link','image'],
                ],
            },
        });
    }, []);

    return (
        <EditorBlock>
            <TitleInput placeholder="제목을 입력하세요" />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;