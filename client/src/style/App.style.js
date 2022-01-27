import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  font-family: "Roboto";
  justify-content: center;
  align-items: space-between;
  `
;

export const Header = styled.div`
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.05);
  `
;

export const Logo = styled.img`
  width: 90px;
  margin: 540%;
  display:block;
`
;

export const LoginButton = styled.button`
  width: 72px;
  height: 36px;
  background: #8746A7;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  color: #ffff;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  `;

export const SignupButton = styled.button`
  width: 72px;
  height: 36px;
  background: #8746A7;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  color: #ffff;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
  `
;

export const Body = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(128, 185, 239, 0.1), rgba(128, 185, 239, 0.1)), #39AEB7;
  `
;

export const Footer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  `
;

export const FooterContainer = styled.div`
  background: linear-gradient(0deg, rgba(128, 185, 239, 0.1), rgba(128, 185, 239, 0.1)), #fbfbfb;
  width: 100vw;
  div {
    margin: 0 auto;
    height: 1px;
    border-bottom: 1px solid #dcdcdc;
    background: linear-gradient(0deg, rgba(128, 185, 239, 0.1), rgba(128, 185, 239, 0.1)), #fbfbfb;
    width: 1260px;
  }
  `
;

export const FooterInput = styled.div`
  display: flex;
  justify-content: space-between;
  `
;