import { useState, useEffect } from 'react';
import '../css/common.css'
import logo from "../images/logo.png"; 
import githubLogo from "../images/github_logo.png"
import styled from 'styled-components';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

const LoginGrid = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

const LoginGridNav = styled.div`
width: 350px;
height: 20%;
`

const LoginGridMain = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  width: 350px;
  background-color: white;
  flex-basis: 700px;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 150px;
  align-content: center;
  cursor: pointer;
`;

const InputId = styled.input`
  box-sizing: border-box;
  padding-left: 5px;
  border-radius: 6px;
  border: 1px solid #d4e3fc;
  background-color: #E8F0FE;
  width: 100%;
  height: 50px;
`;

const InputPw = styled(InputId)``;

const Submit = styled.button`
  width: 100%;
  height: 50px;
  background-color: #36C5F0;
  border: 1px solid #00bcf5;
  color: white;
  margin: 30px 0 5px 0;
  font-size: 18px;
`;


const Signup = styled(Submit)`
  background-color: #0199a4;
  border: 1px solid #01857c;
  margin-top: 0px;
  margin-bottom: 15px;
`
const Span = styled.span`
  color: gray;
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 15px;
`
const Footer = styled.div`
  width: 350px;
  height: 20%;
  display: grid;
  justify-content: center;
  align-self: center;
  color: gray;
  font-size: 14px;
`

const Line = styled.hr`
  margin-top: 10px;
  color: black;
  border: 1;
  width: 100%;
  /* height: 100%; */
`
const EmailValidSpan = styled.span`
  margin-top: 0px;
  align-self: flex-start;
  color: red;
  font-size: 14px;
`


export const Login = ({accessLogin, changeUserInfo, changeAccessToken, accessToken, userInfo, reDirectToGithub}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validity, setValidity] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  

  useEffect(()=> {
  },[accessToken, userInfo])

  const clickToLogin = async (event) => {
    event.preventDefault();
    if(!validity || password === "" || email === "") {
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, {email, password})
      .then((result) => {
        const {accessToken, userInfo} = result.data.data; // result.data??? ????????? ?????? main???????????? redirect ??????
        changeAccessToken(accessToken);
        changeUserInfo(userInfo);
        alert("???????????? ?????????????????????.");
        localStorage.setItem("key", accessToken);
        localStorage.setItem("user",userInfo.loginMethod)
        localStorage.setItem('username',userInfo.username)
        setIsLogin(!isLogin);
        accessLogin();
      })
      .catch((err) => alert('????????? ?????? ??????????????? ??????????????????.'));
  }

  const clickToSignup = () => {
    window.location.href = `${process.env.REACT_APP_HOME_URL}/signup`;
  }
  
  const clickToHome = () => {
    window.location.href = process.env.REACT_APP_HOME_URL;
  }

  const changeEmail = (event) => {
    setEmail(event.target.value);
    // isValidEmail();
  }

  const changePassword = (event) => {
    setPassword(event.target.value);
  }

  const isValidEmail = () => {
    const regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i
    if(!email.match(regExp)) {
      setValidity(false)
    } else {
      setValidity(true)
    };
  }
  return (
    <LoginGrid>
      {!isLogin 
      ? null
      : <div>
      <Redirect to="/"></Redirect>
      </div>
      }
      <LoginGridNav></LoginGridNav>
      <LoginGridMain>
      <Img src={logo} onClick={clickToHome}></Img>
      <form>
      <InputId type="text" onChange={changeEmail} onBlur={isValidEmail} placeholder="???????????? ??????????????????"></InputId>
      <InputPw type="password" onChange={changePassword} placeholder="??????????????? ??????????????????"></InputPw>
      {!validity 
      ? <EmailValidSpan>????????? ????????? ???????????? ????????????.</EmailValidSpan>
      : null}
      <Submit type="submit" onClick={clickToLogin}>?????????</Submit>
      </form>
      <Signup type="submit" onClick={clickToSignup}>????????????</Signup>
      <Span>SNS???????????? ?????? ?????????/????????????</Span>
      <a>
      <img src={githubLogo} onClick={reDirectToGithub}width="50px"></img>
      </a>
      <Line />
    </LoginGridMain>
    <Footer>?? OOTD13, Co., Ltd.. All Rights Reserved</Footer>
    </LoginGrid>
  )
}

export default Login;
