import { useState, useEffect} from 'react';
import logo from "../images/logo.png"; 
import githubLogo from "../images/github_logo.png"
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const StyledLink = styled(Link)`
    margin: 10px;
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

  const Img = styled.img`
    
    margin: 10px;
  `

export const Signup = ({reDirectToGithub}) => {
  const [emailHead, setEmailHead] = useState("");
  const [emailTail, setEmailTail] = useState("");
  const [email, setEmail] = useState("123");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [useSpan, setUseSpan] = useState(
    {
    email: 0, 
    password: 0, 
    passwordCheck: 0, 
    username: 0
    })
  
  const options = ["naver.com", "hanmail.net", "daum.net", "gmail.com", "nate.com", "hotmail.com", "outlook.com", "icloud.com"];

  useEffect(()=>{
    combineEmail();
    // ???????????? ????????? ??????
    checkingPasswordRegExp();
    // ????????????, ?????????????????? ??????
    checkingPassword();
    usernameRegExp();
  },[email, emailHead, emailTail, password, passwordCheck, username, isValidEmail]);

  const changeUseSpan = (val) => {
    setUseSpan(Object.assign({}, useSpan, useSpan[val] = useSpan[val] + 1));
  }

  const usernameRegExp = () => {
    if(username.length > 8) return false;
    else return true;
  };

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

  const changeEmailHead = async (event) => {
    event.preventDefault();
    await setEmailHead(event.target.value);
    combineEmail();
  }

  const changeEmailTail = (event) => {
    event.preventDefault();
    setEmailTail(event.target.value)
  }
  
  const combineEmail = () => {
    setEmail(`${emailHead}@${emailTail}`);
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
    if(username.length <= 1 || username.length > 8 ) {
      alert("????????? 2???~8??? ????????? ??????????????????.");
      return;
    } else {
      axios
      .post(`${process.env.REACT_APP_API_URL}/user/namecheck`, {username})
      .then((res) => {
        if(res.status === 200) {
          alert("?????? ????????? ???????????????.");
          setIsUsernameChecked(true);
        }
      })
      .catch((err) => {
        alert("?????? ?????? ?????? ???????????????.")
        setIsUsernameChecked(false);
    })}     
  }

  const checkingEmail = (event) => {
    event.preventDefault();
    if(!isValidEmail) {
      return;
    } else {
      axios
      .post(`${process.env.REACT_APP_API_URL}/user/emailcheck`, {email: email})
      .then((res) => {
        if(res.status === 200) {
          alert("?????? ????????? ??????????????????.");
          setIsEmailChecked(true);
        }
      })
      .catch((err) => {
        alert("?????? ?????? ?????? ??????????????????.")
        setIsEmailChecked(false);
    })}     
  }

  const checkingPassword = () => {
    if(password === passwordCheck) setIsSamePassword(true);
    else setIsSamePassword(false);
  }

  const clickSignup = () => {
    if(!isValidEmail || !isValidPassword || !isEmailChecked || !isSamePassword || !isUsernameChecked
      || !checkedItems.includes('use' &&'age' &&'agree')) {
      alert("?????? ????????? ??????????????????.");
      return;
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/signup`, {email, password, username})
        .then((res) => {
          alert("??????????????? ??????????????????.");
          window.location.href = process.env.REACT_APP_HOME_URL
        })
        .catch((err) => console.log(err));
    }
  }

  const checkingEmailRegExp = () => {
    const emailRegExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    if(!email.match(emailRegExp)) setIsValidEmail(false);
    else setIsValidEmail(true); 
  };
  
  const checkingPasswordRegExp = () => {
    const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    if(!password.match(passwordRegExp)) setIsValidPassword(false);
    else setIsValidPassword(true);
  }

  return (
    <Div>
      <Nav>
      <StyledLink to="/">
        <Img src={logo} alt="logo" width="150px"></Img>
      </StyledLink>
      </Nav>
      <Main>
        <TopForm>
          <TopTitle>????????????</TopTitle>
          <SnsSpan>SNS???????????? ?????? ?????????/????????????</SnsSpan>
          <GithubLink className="signup-form-github">
            <img src={githubLogo} onClick={reDirectToGithub} alt="githubLogo" width="50px"></img>
          </GithubLink>
        <Hr></Hr>
        </TopForm>
        <CommonForm>
          <H3>?????????</H3>
          <EmailSection>
            <EmailInput onChange={changeEmailHead} onKeyDown={() => changeUseSpan('email')} placeholder='?????????' required></EmailInput>
            <EmailIcon>@</EmailIcon>
          <EmailSelect onChange={changeEmailTail} >
            <option selected disabled> ??????????????????</option>
            {options.map((option) => {
              return (
                <option value={option}>{option}</option>
              )
            })}
          </EmailSelect>
          <CheckButton type="submit" onClick={checkingEmail}>????????????</CheckButton>
          </EmailSection>
          {useSpan.email < 1 
          ? null
          : emailHead === "" 
            ? <WrongSpan>?????? ?????? ???????????????.</WrongSpan>
            : isValidEmail
              ? null
              : <WrongSpan>????????? ????????? ???????????? ????????????.</WrongSpan>
            
          }
        </CommonForm>
        <CommonForm>
          <H3>????????????</H3>
          <DescSpan>??????, ????????? ????????? 8??? ????????? ??????????????? ??????????????????.</DescSpan>
          <PasswordInput helperText="?????? ?????? ???????????????." onKeyDown={() => changeUseSpan('password')} onChange={changePassword} type="password" placeholder='????????????' required></PasswordInput>
          {useSpan.password < 1
          ? null
          : password === "" 
            ? <WrongSpan>?????? ?????? ???????????????.</WrongSpan>
            : !isValidPassword
              ? <WrongSpan>??????????????? ??????, ????????? ???????????? 8??? ??????????????? ?????????.</WrongSpan>
              : null}
        </CommonForm>
        <CommonForm>
          <H3>???????????? ??????</H3>
          <PasswordInput onKeyDown={() => changeUseSpan('passwordCheck')} onChange={changePasswordCheck} type="password" placeholder='???????????? ??????' required></PasswordInput>
          {useSpan.passwordCheck < 1
          ? null
          : passwordCheck === ""
            ? <WrongSpan>????????? ?????? ??? ??? ??? ??????????????????.</WrongSpan>
            : !isSamePassword
              ? <WrongSpan>??????????????? ???????????? ????????????.</WrongSpan>
              : null}
        </CommonForm>
        <CommonForm>
          <H3>?????????</H3>
          <DescSpan>?????? ????????? ????????? ?????? ????????? ??????????????????. (2~8???)</DescSpan>
          <UsernameSection>
            <UsernameInput onKeyDown={() => changeUseSpan('username')} onChange={changeUsername} placeholder="??????(2~15???)" required></UsernameInput>
            <CheckButton onClick={checkingUsername} type="submit">????????????</CheckButton>
          </UsernameSection>
          {useSpan.username < 1
          ? null
          : username.length === 0
            ? <WrongSpan>?????? ?????? ???????????????.</WrongSpan>
            : username.length === 1 || username.length > 8
              ? <WrongSpan>????????? 2???~8??? ????????? ??????????????????.</WrongSpan>
              : null
          }
        </CommonForm>
        <CommonForm>
          <H3>????????????</H3>
          <AgreementSection>
          <Label for="agree">
            <input 
              type="checkbox" 
              checked={
                checkedItems.length === 4 ? true : false
              }
              onChange={(e) => handleAllCheck(e.target.checked)}></input>
            <AgreementSpan>???????????? </AgreementSpan>
          </Label>
          <hr></hr>
          <Label for="agree">
            <input 
              type="checkbox"  
              value="age"
              checked={checkedItems.includes('age')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)}
              required></input>
            <AgreementSpan>??? 14??? ???????????????. <EssentialSpan className="essential">(??????)</EssentialSpan></AgreementSpan>
            <br></br>
          </Label>
          <Label for="agree">
            <input 
              type="checkbox" 
              value="use" 
              checked={checkedItems.includes('use')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)}
              required></input>
            <AgreementSpan>???????????? <EssentialSpan className="essential">(??????)</EssentialSpan></AgreementSpan>
            <br></br>
          </Label>
          <Label for="agree">
            <input 
              type="checkbox" 
              value="agree"
              checked={checkedItems.includes('agree')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)} 
              required></input>
            <AgreementSpan>?????????????????? ??? ???????????? <EssentialSpan className="essential">(??????)</EssentialSpan></AgreementSpan>
            <br></br>
          </Label>
          <Label for="agree">
            <input 
              type="checkbox" 
              value="event"
              checked={checkedItems.includes('event')} 
              onChange={(e) => handleCheckChange(e.target.checked, e.target.value)} 
              ></input>
            <AgreementSpan>?????????, ???????????? ?????? ?????? ??? SMS ?????? <OptionSpan className="option">(??????)</OptionSpan></AgreementSpan>
          </Label>
        </AgreementSection>
      </CommonForm>
      <SubmitButton onClick={clickSignup}>??????????????????</SubmitButton>
      <LoginRedirectionSection>
        <DescSpan >?????? ???????????? ????????????????<LoginRedirection href={`${process.env.REACT_APP_HOME_URL}/login`}>?????????</LoginRedirection></DescSpan>
      </LoginRedirectionSection>
      </Main>
    </Div>
  )
}

export default Signup;
