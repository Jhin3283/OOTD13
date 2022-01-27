import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router-dom";
var AWS = require("aws-sdk/dist/aws-sdk-react-native");

const ImgBox = styled.div`
  // 이미지 Div
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(30, 30, 30, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  width: min(400px, 20vw);
  height: 40vh;
`;

const ImgDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 0;
  color: white;
  font-weight: 600;
  background-color: rosybrown;
`

const ImgDesc = styled.span`
  margin: 0 0;
  color: white;
  font-weight: 600;
  background-color: rosybrown;
`

const ImgPreview = styled.img`
  width: 100%;
  height: 95%;
  `;

const ImgSrc = styled.input`
  display: flex;
  /* align-items: center; */
  align-content: center;
  /* justify-content: center; */
  justify-self: center;
  align-self: center; 
  width: 50%;
  height: 30px;
  margin-top: 10px;
  padding: 0 0;
  /* background-color: black; */
`;
const DescribeContainer = styled.div`
  // 옆에 설명 Div
  background-color: rgba(30, 30, 30, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Tmp = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  justify-content: center;
`;

const DescribeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;
`;

const Div = styled.div`
  // 전체 Div
  height: 100vh;
  width: 100vw;
  margin: auto;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SpanDescription = styled.span`
  // span.description , span.ootd-tag, span.selected-tag
  display:inline-block;
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
`;
const SpanProduct = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  /* display: inline-block; */
  font-size: 16px;
  font-weight: 600;
  margin: 0 0;
  padding: 0 0;
  width: 6%;
  color: white;
  border-radius: 6px;
  background-color: rosybrown;
  // span.shirts, span.pants, span.acc, span.outer, span.shoes
`;
const InputProduct = styled.input`
  // input.shirts, input.pants, input.acc, input.outer, input.shoes
  width: 100%;
  border-radius: 7px;
  border: none;
  margin: 0 10px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  height: 100%;
`;
const SelectTagBox = styled.div`
  // select 묶음 Div
`;
const SelectTag = styled.select`
  // select.sex, select.weather, select.season, select.style

  width: auto;
  height: 2.5rem;
  margin: 0 8px 8px 0;
  padding-left: 10px;
  border-radius: 6px;
  border: none;
  background-color: #c8c8c8;
  font-size: 16px;
  font-weight: 700;
  color: rgb(60, 60, 60);
  cursor: pointer;
  &:hover {
    background-color: (20, 20, 20);
  }
`;
const OptionTag = styled;
const ButtonTagBox = styled.div`
  width: 100%;
  height: 32px;
  // button 묶음 Div

  
`;
const ButtonTag = styled.button`
  // button.order, button.sex, button.season, button.weather

  width: auto;
  height: 32px;
  color: #fff;
  padding: 0 8px;
  margin: 0 8px 8px 0;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  font-weight: 800;
  background-color: #7ad7f5;
`;

const ButtonReset = styled(ButtonTag)`
  border: none;
  color: gray;
  background-color: white;
`

const ButtonCancle = styled.button`
  border: 2px solid black;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  margin: 5px;
  background-color: rgb(255, 255, 255);
  color: black;
`;

const ButtonSubmit = styled.button`
  background-color: rgba(102, 51, 153, 0.7);
  border: 2px solid rgba(102, 51, 153, 1);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 5px;
  /* margin-right: 50; */
`;
const Footer = styled.div`
  width: 350px;
  height: 20%;
  display: grid;
  // justify-content: center;
  // align-self: center;
  // color: gray;
  // font-size: 14px;

  margin: 20px;

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  width: 100%;
`;

export const NewPost = ({ userInfo, accessToken }) => {
  const [shirts, setShirts] = useState("");
  const [pants, setPants] = useState("");
  const [acc, setAcc] = useState("");
  const [outer, setOuter] = useState("");
  const [shoes, setShoes] = useState("");
  const [sex, setSex] = useState("");
  const [weather, setWeather] = useState("");
  const [season, setSeason] = useState("");
  const [style, setStyle] = useState("");
  const [isTagSelected, setIsTagSelected] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if(sex === "" && weather === "" && season === "" && style === "") {
      setIsTagSelected(false);
    } else {
      setIsTagSelected(true);
    }
  }, [sex, weather, season, style])
  const sexTag = { 남성: "1", 여성: "2" };
  const weatherTag = {
    "비 오는 날": "1",
    "흐린 날": "2",
    "눈 오는 날": "3",
    "맑은 날": "4",
  };
  const seasonTag = { SS시즌: "1", FW시즌: "2" };
  const styleTag = {
    Casual: "1",
    Dandy: "2",
    Street: "3",
    Hiphop: "4",
    Modern: "5",
    Classic: "6",
  };

  AWS.config.update({
    region: "ap-northeast-2", // 버킷이 존재하는 리전을 문자열로 입력하기. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:2103383f-abd8-41b1-bd30-b700ce368c14", // cognito 인증 풀에서 받아온 키를 문자열로 입력하기. (Ex. "ap-northeast-2...")
    }),
  });
  const imageHandler = (e) => {
    const firstImageFile = e.target.files[0];
    if (!firstImageFile) {
      setPreviewSrc(null);
    }
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "ootd13image", // 업로드할 대상 버킷명 문자열로 작성.
        Key: firstImageFile.name, //업로드할 파일명
        Body: firstImageFile, // 업로드할 파일 객체
      },
    });
    const promise = upload.promise();

    promise.then(
      function (data) {
        setPreviewSrc(data.Location);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  const deleteTag = (tagname) => {
    switch (tagname) {
      case "all" : 
      setSex("");
      setSeason("");
      setWeather("");
      setStyle("");
      break;
      case "sex": setSex("");
      break;
      case "weather": setWeather("");
      break;
      case "season": setSeason("");
      break;
      case "style": setStyle("");
      break;
    }
  }

  const cancleHandler = () => {
    window.location.href = "http://localhost:3000";
  };

  const submitHandler = () => {
    if (!previewSrc) {
      alert("이미지를 넣어주세요");
    } else {
      axios({
        url: `http://localhost:5000/post?loginmethod=${
          userInfo.loginMethod || 0
        }`,
        method: "post",
        headers: { authorization: accessToken },
        data: {
          email: userInfo.email,
          imageSrc: previewSrc,
          shirts,
          pants,
          acc,
          outer,
          shoes,
          sex: sexTag[sex],
          weather: weatherTag[weather],
          season: seasonTag[season],
          style: styleTag[style],
        },
      }).then(() => {
        alert("작성이 완료되었습니다");
        setFinish(true);
      });
    }
  };

  const shirtsHandler = (e) => {
    setShirts(e.target.value);
  };
  const pantsHandler = (e) => {
    setPants(e.target.value);
  };
  const accHandler = (e) => {
    setAcc(e.target.value);
  };
  const outerHandler = (e) => {
    setOuter(e.target.value);
  };
  const shoesHandler = (e) => {
    setShoes(e.target.value);
  };
  const sexHandler = (e) => {
    setSex(e.target.value);
  };
  const weatherHandler = (e) => {
    setWeather(e.target.value);
  };
  const seasonHandler = (e) => {
    setSeason(e.target.value);
  };
  const styleHandler = (e) => {
    setStyle(e.target.value);
  };

  return (
    <Div>
      {finish ? <Redirect to="/"></Redirect> : null}
      <Tmp>
        <ImgBox>
        {!previewSrc
        ? <ImgDescDiv><ImgDesc>이미지를 넣어주세요. </ImgDesc><br></br>(이미지 크기는 1:1 비율의 정방향을 추천합니다.)</ImgDescDiv>
        : <ImgPreview src={previewSrc}></ImgPreview>
        }
          <ImgSrc type="file" onChange={imageHandler}></ImgSrc>
        </ImgBox>
        <DescribeContainer>
          <>
          <SpanDescription>옷에 대한 정보를 올려주세요</SpanDescription>
          <DescribeBox>
            <SpanProduct>shirts</SpanProduct>
            <InputProduct onChange={shirtsHandler}></InputProduct>
          </DescribeBox>
          <DescribeBox>
            <SpanProduct>pants</SpanProduct>
            <InputProduct onChange={pantsHandler}></InputProduct>
          </DescribeBox>
          <DescribeBox>
            <SpanProduct>acc</SpanProduct>
            <InputProduct onChange={accHandler}></InputProduct>
          </DescribeBox>
          <DescribeBox>
            <SpanProduct>outer</SpanProduct>
            <InputProduct onChange={outerHandler}></InputProduct>
          </DescribeBox>
          <DescribeBox>
            <SpanProduct>shoes</SpanProduct>
            <InputProduct onChange={shoesHandler}></InputProduct>
          </DescribeBox>
          </>
          <>
          <SpanDescription>태그를 선택해 주세요</SpanDescription>
          <SelectTagBox>
            <SelectTag onChange={sexHandler}>
              <option selected disabled>성별</option>
              <option>남성</option>
              <option>여성</option>
            </SelectTag>
            <SelectTag onChange={weatherHandler}>
              <option selected disabled>날씨</option>
              <option>비 오는 날</option>
              <option>흐린 날</option>
              <option>눈 오는 날</option>
              <option>맑은 날</option>
            </SelectTag>
            <SelectTag onChange={seasonHandler}>
              <option selected disabled>계절</option>
              <option>SS시즌</option>
              <option>FW시즌</option>
            </SelectTag>
            <SelectTag onChange={styleHandler}>
              <option selected disabled>스타일</option>
              <option>Casual</option>
              <option>Dandy</option>
              <option>Street</option>
              <option>Hiphop</option>
              <option>Modern</option>
              <option>Classic</option>
            </SelectTag>
          </SelectTagBox>
          <SpanDescription>선택한 태그</SpanDescription>
          <ButtonTagBox>
            {sex === "" 
            ? null 
            : <ButtonTag onClick={()=> {deleteTag("sex")}}>{sex}</ButtonTag>}
            {weather === "" 
            ? null 
            : <ButtonTag onClick={()=> {deleteTag("weather")}}>{weather}</ButtonTag>}
            {season === "" 
            ? null 
            : <ButtonTag onClick={()=> {deleteTag("season")}}>{season}</ButtonTag>}
            {style === "" 
            ? null 
            : <ButtonTag onClick={()=> {deleteTag("style")}}>{style}</ButtonTag>}
            {!isTagSelected
            ? null
            : <ButtonReset onClick={()=> {deleteTag("all")}}>초기화</ButtonReset>}
          </ButtonTagBox>
          <ButtonContainer>
          <ButtonSubmit onClick={submitHandler}>완료</ButtonSubmit>
          <ButtonCancle onClick={cancleHandler}>취소</ButtonCancle>
          </ButtonContainer>
        </>
        </DescribeContainer>
      </Tmp>
      <Footer>© OOTD13, Co., Ltd.. All Rights Reserved</Footer>
    </Div>
  );
};

export default NewPost;
