import styled from 'styled-components';
import backArrow from '../images/back.png';
import nextArrow from '../images/next.png';

const Div = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  background-color: lightgray;
  padding: 0 0;
`

const Img = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

function Pagination({page, getPage}) {
  return (
    <Div>
      <Img src={backArrow} onClick={()=> getPage(page-1)} width="50px" height="50px"></Img>
      <span>{page}</span>
      <Img src={nextArrow} onClick={()=> getPage(page+1)} width="50px"></Img>
    </Div>
  )
}
export default Pagination;