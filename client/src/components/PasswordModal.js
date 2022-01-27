import { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 0 0;
  cursor: cursor;
  z-index: 999;
  width: 100vw;
  height: 100vh;
`

const Main = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-sizing: border-box;
  justify-content: space-between;
  width: 400px;
  height: min(250px, 450px);
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 0;
  padding: 0 0;
  box-sizing: border-box;
`
const Title = styled.span`
  margin: 0 5px;
  padding: 0 0;
  align-self: center;
  font-size: 15px;
`

const Input = styled.input`
  width: 70%;
  height: 30px;
  color: black;
  border: 1px solid #d4e3fc;
  font-size: 14px;
  padding-left: 7px;
  box-sizing: border-box;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background-color: #36C5F0;
  border: 1px solid #00bcf5;
  font-size: 14px;
  align-self: center;
`

const Cancel = styled(Button)`
  background-color: white;
  border: 1px solid gray;
  color: black;
`
export const PasswordModal = ({email, password, openPwModal, accessToken}) => {
  const [curPassword, setCurPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  
  useEffect(()=> {
    checkingSamePassword();
    checkingPasswordRegExp();
  }, [curPassword, newPassword, newPasswordCheck])
  

  const checkingPasswordRegExp = () => {
    const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    if(!newPassword.match(passwordRegExp)) setIsValidPassword(false);
    else setIsValidPassword(true);
  }

  const changeCurPassword = (event) => {
    setCurPassword(event.target.value);
  }

  const changeNewPassword = (event) => {
    setNewPassword(event.target.value);
  }

  const changeNewPasswordCheck = (event) => {
    setNewPasswordCheck(event.target.value);
  }

  const checkingSamePassword = () => {
    if(newPassword === newPasswordCheck) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false)
    }
  };

  const checkingPassword = () => {
    console.log(`현재 비밀번호는 ${password}입니다.`);
    console.log(`입력한 비밀번호는 ${curPassword}입니다.`);
    console.log(`변경할 비밀번호는 ${newPassword}입니다.`);
    console.log(curPassword === password);

    // 하나라도 공백이면 단순 return
    if(curPassword === "") {
      alert("현재 비밀번호를 입력하세요");
      return;
    } else if(!(curPassword === password)) {
      alert("현재 비밀번호가 일치하지 않습니다.");
      return;
    }
    
    
    if(newPassword === "") {
      alert("변경할 비밀번호를 입력하세요");
      return;
    } else if(newPasswordCheck === "") {
      alert("변경할 비밀번호 확인을 입력하세요");
      return;
    } else if(!isValidPassword) {
      alert("새 비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.");
      return;
    } else if(newPassword === password) {
      alert("새 비밀번호가 현재 비밀번호와 같습니다.");
      return;
    } else if(!(newPassword === newPasswordCheck)) {
      alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    } else {
      axios({
        url: "http://localhost:5000/password",
        method: "patch",
        headers: {authorization: accessToken},
        data: {
          curPassword,
          newPassword,
          email
      }})
      .then((res) => {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        openPwModal();
      })
      .catch((err) => console.log(err));
    }
  }
  const reDirectToHome = () => {
    openPwModal();
  }
  return (
    <Div>
    <Main>
      <Section>
        <Title>현재 비밀번호</Title>
        <Input type="password" onChange={changeCurPassword} placeholder="현재 비밀번호 입력"></Input>
      </Section>
      <Section>
        <Title>변경할 비밀번호</Title>
        <Input type="password" onChange={changeNewPassword} placeholder="변경할 비밀번호 입력"></Input>
          </Section>
      <Section >
        <Title>비밀번호 확인</Title>
        <Input type="password" onChange={changeNewPasswordCheck} placeholder="변경할 비밀번호 확인"></Input>
      </Section>
        <Button onClick={checkingPassword}>확인</Button>
        <Cancel onClick={reDirectToHome}>취소</Cancel>
    </Main>
  </Div>
  )
}

export default PasswordModal;
