import React, {useState} from 'react';
import Styled from 'styled-components';
import HomeTemplete from '../home/HomeTemplete';

const FormContainer = Styled.div`
    form { 
        display: flex;
        flex-flow: column nowrap;
        justify-contents: center;
    }
`


const WriteForm = () => {
    const [DATA, setData] = useState({
        target : "",
        title : "",
        brief : "",
        tag : [""],
        people : [],
        subject : [],
    })

    const onChangeTarget = (e) => {
        setData({...DATA,
            [e.target.name] : e.target.value
    })
    }

    const sendDATA = () => {
        HomeTemplete(DATA);
    }

    return (
        <FormContainer>
            <form action="" className="writeform">
                <input type="text" name="target" className="inputTarget" placeholder="카테고리" onChange={onChangeTarget}/>
                <input type="text" name="title" className="inputTitle" placeholder="title" onChange={onChangeTarget}/>
                <input name="brief" className="inputBrief" type="text" placeholder="설명" onChange={onChangeTarget}/>
                <input name="tag" className="inputTag" type="text" placeholder="태그" onChange={onChangeTarget}/>
                <input name="people" className="inputPeople" type="text" placeholder="인원" onChange={onChangeTarget}/>
                <input name="subject" className="inputSubject" type="text" placeholder="웹언어" onChange={onChangeTarget}/>
                <button type="submit" onSubmit={sendDATA}>등록</button>
            </form>
        </FormContainer>

    );
};

export default WriteForm;