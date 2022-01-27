import styled from 'styled-components';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 0 0 0 0;
  cursor: cursor;
  z-index: 999;
  width: 100vw;
  height: 100vh;
`

const Main = styled.div`
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  /* width: min(600px, 1000px);
  height: min(900px, 1080px); */
  margin-bottom: 100px;
`

const Img = styled.img`
  /* width: 95%;
  height: 70%; */
  justify-self: center;
  align-self: center;
  margin: 15px 15px 0 15px;
`
const Inform = styled.section`
  display: flex;
  justify-content: flex-start;
  /* background-color: blue; */
`

const Username = styled.span`
  font-size: 18px;
  display: flex;
  margin: 10px 0 0 25px;
  font-weight: 500;
`
const Title = styled.span`
  color: gray;
  font-weight: 400;
  margin: 0 5px 0 0;
  display: flex;
  margin: 10px 5px 0 25px;
  font-weight: 500;
  
`
const Number = styled.span` 
  color: black;
  margin: 0 0;
`

const Section = styled.section`
  display: flex;
  justify-items: flex-start;
  align-items: flex-end;
  margin: 0 10;
  padding: 0 0;
`

const Tag = styled.span`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  margin: 0 8px 8px 0;
  font-size: 14px;
  font-weight: 500;
  list-style: none;
  border-radius: 6px;
  background-color: #65b9f9;
`

const Line = styled.hr`
  color: black;
  border: 1;
  background-color: black;
  width: 90%;
`

const TagSection = styled.section`
  margin-left: 23px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: pink; */
`

const InformDetail = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  /* background-color: orangered; */
  margin-left: 20px;
  width: 100%;
  /* height: auto; */
`

const EachInform = styled.div`
  display: flex;
  width: 95%;  
  border-radius: 10px;
  margin: 5px;
  background-color: lightgray;
`

const Desc = styled(Title)`
  color: rgb(45, 45, 45);
  align-self: center;
  margin: 0 10px;
`

const Category = styled(Tag)`
  display: flex;
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
  width: 50px;
  height: 30px;
  margin: 0 0 0 0;
  background-color: burlywood;
`

const Cancel = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  align-content: center;
  width: auto;
  height: 1.5rem;
  color: white;
  margin: 0 10px 10px 0;
  background-color: gray;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  border: none;
`

export const Post = ({selectedPost, openPostModal}) => {
  const [detail, setDetail] = useState({});
  const {postId, username, imageSrc, like, view, tag} = selectedPost[0];

  
  useEffect(()=> {
    axios({url: "http://localhost:5000/post",method: "get",params: {id: postId}})
      .then((res) => {
        setDetail(res.data.data.content);
      })
      .catch((err) => console.log(err));
  },[])
  console.log(detail);
  
  

  return (
    <Div>
      <Main>
        <Img src={imageSrc}></Img>
        <Inform class="post-form-inform">
          <Username class="post-form-username">{username}</Username>
          <Section>
            <Title>조회수</Title>
            <Number class="post-form-views-num">{view}</Number>
          </Section>
          <Section>
            <Title>좋아요</Title>
            <Number class="post-form-like-num">{like}</Number>
          </Section>
        </Inform>
        <Line />
        <TagSection>
          {tag.map((el)=> {
            return (
            <Tag key={el}>{el}</Tag> 
          )})
          }
        </TagSection>
        <InformDetail>
          {Object.keys(detail).map((key)=> {
            return (
              <EachInform>
              <Category>{key}</Category>
              <Desc>{detail[key]}</Desc>
              </EachInform>
            )
          })}
        </InformDetail>
        <Cancel onClick={openPostModal}>닫기</Cancel>
      </Main>
  </Div>
  )
}

export default Post;
