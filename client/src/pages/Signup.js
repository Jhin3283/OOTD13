import { useState, useEffect, useRef } from 'react';
import logo from "../public/img/logo.png"; 
import githubLogo from "../public/img/github_logo.png"
import styled from 'styled-components';

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  
  const Nav = styled.div`
    height: 10%;
    align-self: flex-start;
  `
  const GithubLink = styled.a`
    display: block;
    margin: 10px auto;
    width: auto;
    height: auto;
    align-self: flex-end;
  `
  const Main = styled.div`
    width: 600px;
    height: 10%;
    align-self: center;
  `

  const TopForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-self: flex-start; */
    /* background-color: black; */
  `
  const TopTitle = styled.h2`
    align-self: flex-start;
  `
  const SnsSpan = styled.span`
    color: gray;
    text-align: center;
    justify-content: center;
  `

  const Hr = styled.hr`
    color: black;
    width: 100%;
    border: 1;
  `

  const CommonForm = styled.div`
    display: flex;
    flex-direction: column;
  `

  const H3 = styled.h3`
    margin-bottom: 10px;
  `

  const EmailSection = styled.form`
    display: flex;
    justify-items: space-around;
  `

  const EmailInput = styled.input`
    width: 45%;
    height: 50px;
    color: black;
    border: 1px solid #d4e3fc;
    font-size: 16px;
    padding-left: 7px;
    margin-bottom: 5px;
    box-sizing: border-box;
  `

  const EmailIcon = styled.span`
    display: flex;
    align-items: center;
  `

  const EmailSelect = styled.select`
    width: calc(100% - 47% - 70px);
    height: 50px;
    margin-right: 5px;
    display: inline-block;
  `

  const CheckButton = styled.button`
    width: 70px;
    height: 50px;
    margin: 0 0;
    padding: 0 0;
    color: white;
    border: 1px solid #d4e3fc;
    background-color: #36C5F0;
    border: 1px solid #00bcf5;
    font-size: 14px;
  `

  const DescSpan = styled.span`
    color: gray;
    margin: 0 10px 10px 0;
    font-size: 16px;
  `

  const EssentialSpan = styled(DescSpan)`
    color: #36C5F0;
  `

  const OptionSpan = styled(DescSpan)`
    color: rgb(45, 45, 45);
  `
  const PasswordInput = styled.input`
    width: 100%;
    height: 50px;
    color: black;
    border: 1px solid #d4e3fc;
    font-size: 16px;
    padding-left: 7px;
    margin: 0 0 5px 0;
    box-sizing: border-box;
  `

  const UsernameInput = styled(PasswordInput)``

  const UsernameSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
  `

  const AgreementSection = styled.form`
    border: solid 1px lightgray;
    padding: 15px;
    margin-bottom: 5px;
  `

  const Label = styled.label`
    display: block;
  `

  const SubmitButton = styled(CheckButton)`
    width: 100%;  
    font-size: 18px;
    height: 60px;
    margin-bottom: 10px;
  `
  
  const LoginRedirectionSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const LoginRedirection = styled.a`
    padding-left: 5px;
    text-decoration-line: underline;
    text-decoration-style: none;
    color: black;
  `

  const AgreementSpan = styled(DescSpan)`
    display: inline-block;
    margin-bottom: 10px;
  `

  const WrongSpan = styled.span`
    color: red;
  `

export const Signup = () => {
  const [emailHead, setEmailHead] = useState("");
  const [emailTail, setEmailTail] = useState("");
  const [userEmail, setUserEmail] = useState("123");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [isEmailNull, setIsEmailNull] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [useSpan, setUseSpan] = useState({email: 0, password: 0, passwordCheck: 0, username: 0})

  useEffect(()=>{
    console.log(useSpan.email);

    setUserEmail(`${emailHead}@${emailTail}`);
    // 이메일 정규식 비교
    // checkingEmailRegExp();
    // 패스워드 정규식 비교
    checkingPasswordRegExp();
    // 패스워드, 패스워드체크 비교
    checkingPassword();
  },[checkedItems,emailHead, emailTail, password, passwordCheck, username]);

  const changeUseSpan = (val) => {
    console.log(val);
    setUseSpan(useSpan[val] = useSpan[val]);
    console.log(useSpan);
  }

  const handleCheckChange = (checked, val) => {
    if (checked) {
      setCheckedItems([...checkedItems, val]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== val));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(['age', 'use', 'agree', 'event'])
    }
    else {
      setCheckedItems([]);
    }
  };

  const changeEmailHead = (event) => {
    if(event.target.value === "") {
      setIsEmailNull(true);
    } else {
      setIsEmailNull(false);
    }
    setEmailHead(event.target.value);
    checkingEmailRegExp();
  }

  const changeEmailTail = (event) => {
    setEmailTail(event.target.value);
    checkingEmailRegExp();
  }

  const changePassword = (event) => {
    setPassword(event.target.value);
  }

  const changePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
  }

  const changeUsername = (event) => {
    setUsername(event.target.value);
  }

  const checkingUsername = () => {
    if(username.length <= 1) {
      alert("별명이 형식에 맞지 않습니다.") //Delete
      return;
    } else {
      alert(`입력하신 별명은 '${username}'입니다.`) //Delete
      // isUsernameChecked(false);
    }
  }

  const checkingEmail = (event) => {
    event.preventDefault();
    if(!isValidEmail) {
      return;
    } else {
      alert(`입력하신 이메일은 ${userEmail}입니다.`)
    }
    setIsEmailChecked(true);
    // alert("이미 사용 중인 이메일입니다."); 
    // alert("사용 가능한 이메일입니다.")
  }

  const checkingPassword = () => {
    if(password === passwordCheck) setIsSamePassword(true);
    else setIsSamePassword(false);
  }

  const clickSignup = () => {
    if(!isValidEmail || isValidPassword) {
      return;
    } else {
      alert("회원가입 성공!")
    }
  }

  const checkingEmailRegExp = () => {
    console.log("checkingEmailRegExp 작동!");
    const emailRegExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    if(!userEmail.match(emailRegExp)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true); 
    }
  };
  
  const checkingPasswordRegExp = () => {
    const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    if(!password.match(passwordRegExp)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  }

  return (
    <Div>
      <Nav>
      <a href="#" className=" center-form-github">
        <img src={logo} width="150px"></img>
      </a>
      </Nav>
      <Main>
        <TopForm>
          <TopTitle>회원가입</TopTitle>
          <SnsSpan>SNS계정으로 간편 로그인/회원가입</SnsSpan>
          <GithubLink href="#" className="signup-form-github">
            <img src={githubLogo} width="50px"></img>
          </GithubLink>
        <Hr></Hr>
        </TopForm>
        <CommonForm>
          <H3>이메일</H3>
          <EmailSection>
            <EmailInput onChange={changeEmailHead} onKeyDown={() => changeUseSpan('email')} placeholder='이메일' required></EmailInput>
            <EmailIcon>@</EmailIcon>
          <EmailSelect onChange={changeEmailTail}>
            <option value> 선택해주세요</option>
            <option>naver.com</option>
            <option>hanmail.net</option>
            <option>daum.net</option>
            <option>gmail.com</option>
            <option>nate.com</option>
            <option>hotmail.com</option>
            <option>outlook.com</option>
            <option>icloud.com</option>
            <option>icloud.com</option>
          </EmailSelect>
          <CheckButton type="submit" onClick={checkingEmail}>중복확인</CheckButton>
          </EmailSection>
          {useSpan["email"] <= 1 
          ? null
          : isEmailNull === true 
            ? <WrongSpan>필수 입력 항목입니다.</WrongSpan>
            : !isValidEmail
              ? <WrongSpan>이메일 형식이 올바르지 않습니다.</WrongSpan>
              : null
            
          }
        </CommonForm>
        <CommonForm>
          <H3>비밀번호</H3>
          <DescSpan>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</DescSpan>
          <PasswordInput helperText="필수 입력 항목입니다." onKeyDown={() => changeUseSpan('password')} onChange={changePassword} type="password" placeholder='비밀번호' required></PasswordInput>
          {useSpan["password"] <= 1
          ? null
          : password === "" 
            ? <WrongSpan>필수 입력 항목입니다.</WrongSpan>
            : !isValidPassword
              ? <WrongSpan>비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.</WrongSpan>
              : null}
        </CommonForm>
        <CommonForm>
          <H3>비밀번호 확인</H3>
          <PasswordInput onKeyDown={() => changeUseSpan('passwordCheck')} onChange={changePasswordCheck} type="password" placeholder='비밀번호 확인' required></PasswordInput>
          {useSpan["passwordCheck"] <= 1
          ? null
          : passwordCheck === ""
            ? <WrongSpan>확인을 위해 한 번 더 입력해주세요.</WrongSpan>
            : !isSamePassword
              ? <WrongSpan>비밀번호가 일치하지 않습니다.</WrongSpan>
              : null}
        </CommonForm>
        <CommonForm>
          <H3>닉네임</H3>
          <DescSpan>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</DescSpan>
          <UsernameSection>
            <UsernameInput onKeyDown={() => changeUseSpan('username')} onChange={changeUsername} placeholder="별명(2~15자)" required></UsernameInput>
            <CheckButton onClick={checkingUsername} type="submit">중복확인</CheckButton>
          </UsernameSection>
          {useSpan["username"] <= 1
          ? null
          : username.length === 0
            ? <WrongSpan>필수 입력 항목입니다.</WrongSpan>
            : username.length === 1
              ? <WrongSpan>2자 이상 입력해주세요.</WrongSpan>
              : null}
        </CommonForm>
        <CommonForm>
          <H3>약관동의</H3>
          <AgreementSection>
          <Label for="agree">
            <input 
              type="checkbox" 
              checked={
                checkedItems.length === 4 ? true : false
              }
              onChange={(e) => handleAllCheck(e.target.checked)}></input>
            <AgreementSpan>전체동의 </AgreementSpan>
          </Label>
          <hr></hr>
          <Label for="agree">
            <input 
              type="checkbox"  
              value="age"
              checked={checkedItems.includes('age')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)}
              required></input>
            <AgreementSpan>만 14세 이상입니다. <EssentialSpan className="essential">(필수)</EssentialSpan></AgreementSpan>
            <br></br>
          </Label>
          <Label for="agree">
            <input 
              type="checkbox" 
              value="use" 
              checked={checkedItems.includes('use')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)}
              required></input>
            <AgreementSpan>이용약관 <EssentialSpan className="essential">(필수)</EssentialSpan></AgreementSpan>
            <br></br>
          </Label>
          <Label for="agree">
            <input 
              type="checkbox" 
              value="agree"
              checked={checkedItems.includes('agree')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)} 
              required></input>
            <AgreementSpan>개인정보수집 및 이용동의 <EssentialSpan className="essential">(필수)</EssentialSpan></AgreementSpan>
            <br></br>
          </Label>
          <Label for="agree">
            <input 
              type="checkbox" 
              value="event"
              checked={checkedItems.includes('event')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)} 
              ></input>
            <AgreementSpan>이벤트, 프로모션 알림 메일 및 SMS 수신 <OptionSpan className="option">(선택)</OptionSpan></AgreementSpan>
          </Label>
        </AgreementSection>
      </CommonForm>
      <SubmitButton onClick={clickSignup}>회원가입하기</SubmitButton>
      <LoginRedirectionSection>
        <DescSpan >이미 아이디가 있으신가요?<LoginRedirection href="#">로그인</LoginRedirection></DescSpan>
      </LoginRedirectionSection>
      </Main>
    </Div>
  )
}

export default Signup;