import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BuyPage2() {
  const navigate = useNavigate();
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    if (modalOpened) {
      console.log("모달 열림 - 데이터 로딩");
      // 여기서 데이터를 가져오는 로직 등을 넣을 수 있음
    } else {
      console.log("모달 닫힘 - 데이터 정리");
      // 모달이 닫히면 데이터를 정리하는 로직을 넣을 수 있음
    }
  }, [modalOpened]);

  const handleOpenModal = () => setModalOpened(true);
  const handleCloseModal = () => setModalOpened(false);

  return (
    <>
      {modalOpened && <Shadow />}
      <Container>
        <PrevBtn onClick={() => navigate("/buybook")}>
          <MdNavigateBefore />
        </PrevBtn>
        <Div></Div>
        <BookInfo>
          <Title>요절</Title>
          <div>조용훈</div>
          <div>평점 4.2점</div>
        </BookInfo>
      </Container>
      <DepositBox>
        <div>완독 보증금</div>
        <Input placeholder="보증금을 입력해주세요"></Input>
        <Won>원</Won>
        <Least>최소 1만원 이상</Least>
      </DepositBox>
      <PayBox>
        <div>책가격 100,000원</div>
        <div>총 120,000원</div>
      </PayBox>
      <RefundMent>완독하시면 보증금을 환급해드립니다!</RefundMent>
      {/* onClick에서 상태 변경 함수를 호출하도록 수정 */}
      <Button onClick={handleOpenModal}>충전하기</Button>
      {modalOpened && (
        <MContainer>
          <MDiv></MDiv>
          <div>내 서재에 등록되었습니다!</div>
          <div>완독하시고 보증금을 환급받아 보세요!</div>
          {/* onClick에서 상태 변경 함수를 호출하도록 수정 */}
          <MButton onClick={handleCloseModal}>확인</MButton>
        </MContainer>
      )}
    </>
  );
}


const Shadow = styled.div`
    position: fixed; /* 화면에 고정 */
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.3);
`;
const Container = styled.div`
    display:flex;
    margin-top:100px;   
    gap:20px;
`;
const PrevBtn = styled.div`
    font-size:50px;
    position:fixed;
    top:20px;
    left:10px;
`;
const Div = styled.div`
    width:150px;
    height:200px;
    border-radius:8px;
    background-color:gray;
`;
const BookInfo = styled.div`
    margin-top:120px;
    display:flex;
    flex-direction: column;
    align-items: left; 
    gap:5px;
    *{font-size:16px;}
`;
const Title = styled.div`
    font-size:30px;
`;
const DepositBox = styled.div`
    margin-top:100px;
    font-weight:600;
    font-size:16px;
`;
const Input = styled.input`
    margin-top:10px;
    width:300px;
    height:20px;
    border:none;
    border-bottom:1.5px solid black;
`;
const Won = styled.div`
    position:relative;
    top:-20px;
    left:290px;
`;
const Least = styled.div`
    color:gray;
    font-size:10px;
    font-weight:600;
`;
const PayBox = styled.div`
    margin-top:20px;
    font-weight:600;
    font-size:13px;
    text-align:right;
`;
const RefundMent = styled.div`
    margin-top:20px;
    color:gray;
    text-align:center;
`;
const Button = styled.div`
    position:fixed;
    top:650px;
    color:white;
    font-weight:600;
    font-size:16px;
    background-color:black;
    border-radius:100px;
    width:300px;
    height:60px;
    text-align:center;
    line-height:60px;
`;
//모달
const MContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center; 
    width:300px;
    height:400px;
    border:1px solid red;
    position:fixed;
    top:30%;
    background-color:white;
    *{
        color:black;
    }
`;
const MDiv = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    width:150px;
    height:200px;
    border-radius:8px;
    background-color:gray;
`;
const MButton = styled.button`
    position:fixed;
    top:550px;
    color:white;
    font-weight:600;
    font-size:16px;
    background-color:black;
    border-radius:100px;
    width:200px;
    height:45px;
    text-align:center;
    line-height:45px;
`;