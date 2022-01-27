import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 0;
  /* background-color: bisque; */
`

const Img = styled.img`
  align-self: flex-start;
  border-radius: 10px;
  justify-self: center;
  display: block;
  margin: 0;
  /* width: min(auto, 380px); */
  height: min(380px, 30vmin);
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    -webkit-transform: scale(1.02);
    -moz-transform: scale(1.02);
    -ms-transform: scale(1.02);
    -o-transform: scale(1.02);
    transition: transform .2s;  
    -o-transition: transform .2s;
    -moz-transition: transform .2s;
    -webkit-transition: transform .2s;
  }
`

const Inform = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  font-weight: 500;
  color: gray;
`

function Main({postId, imgSrc, like, view, selectPost}) { 
  return (
    <Div>
      <Img key={postId} src={imgSrc} onClick={()=> {selectPost(postId)}}></Img>
      <Inform>조회수 {view}{" "}·{" "}좋아요 {like}</Inform>
    </Div>
  )
}

export default Main;