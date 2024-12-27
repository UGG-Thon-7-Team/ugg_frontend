import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BuyPage3() {
    const navigate = useNavigate();
        return (
          <>
            <Container>
                <PrevBtn onClick={()=>navigate('/buybook')}><MdNavigateBefore /></PrevBtn>
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
                <div>총 120,000원</div>
            </PayBox>
            <RefundMent>완독하시면 보증금을 환급해드립니다!</RefundMent>
            <Button>충전하기</Button>
          </>
        );
    }
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