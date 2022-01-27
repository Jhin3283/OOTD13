import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: #343A40;
  color: lightgray;
  margin: 0 0;
  height: 150px;
  width: 100%;
`
;

const GithubList = styled.div`
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
const Span = styled.span`

`
;


function Footer() {
  return (
    // <FooterContainer>
    // </FooterContainer>
    <FooterDiv>
      {/* <GithubList>

      </GithubList> */}
      © OOTD13, Co., Ltd.. All Rights Reserved
    </FooterDiv>
  )
}

export default Footer;
