import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BuyPage1() {
    const navigate = useNavigate();
        return (
          <>
            <Container>
                <PrevBtn onClick={()=>navigate('/bookdetail')}><MdNavigateBefore /></PrevBtn>
                <Div></Div>
                <BookInfo>
                    <Title>요절</Title>
                    <div>조용훈</div>
                    <div>평점 4.2점</div>
                </BookInfo>
                <ButtonWrapper>
                    <Button onClick={()=>navigate('/buybook2')}>책도 필요해요</Button>
                    <Button onClick={()=>navigate('/buybook3')}>책은 필요없어요</Button>
                </ButtonWrapper>
            </Container>
          </>
        );
    }
const Container = styled.div`

`;
const PrevBtn = styled.div`
    font-size:50px;
    position:fixed;
    top:20px;
    left:10px;
`;
const Div = styled.div`
    width:190px;
    height:270px;
    border-radius:8px;
    background-color:gray;
    margin:0 auto;
    margin-top:100px;
`;
const BookInfo = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction: column;
    align-items: left; 
    gap:5px;
    *{font-size:16px;}
`;
const Title = styled.div`
    font-size:30px;
`;
const ButtonWrapper = styled.div`
    margin-top:30px;
`;
const Button = styled.button`
    font-size:20px;
    font-weight:600;
    width:320px;
    height:70px;
    border-radius:8px;
    border:1.5px solid black;
    background-color:white;
    margin-bottom:30px;
`;
    