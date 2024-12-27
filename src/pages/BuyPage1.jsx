import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export default function BuyPage1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};
    console.log(data)
        return (
          <>
            <Container>
                <PrevBtn onClick={()=>navigate('/bookdetail')}><MdNavigateBefore /></PrevBtn>
                <Div src={data.imageUrl} alt={data.id} />
                <BookInfo>
                    <Title>{data.title}</Title>
                    <div>{data.author}</div>
                    <div>평점 {data.rating}</div>
                </BookInfo>
                <ButtonWrapper>
                    <Button onClick={()=>navigate(`/buybook2/:${data.bookId}`, { state: { data: data } })}>책도 필요해요</Button>
                    <Button onClick={()=>navigate(`/buybook3/:${data.bookId}`, { state: { data: data } })}>책은 필요없어요</Button>
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
const Div = styled.img`
    width:190px;
    height:270px;
    border-radius:8px;
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
    border-radius:100px;
    border:1.5px solid black;
    background-color:white;
    margin-bottom:30px;
`;
    