import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import useCustomFetch from '../api/useCustomFetch';
import { useState, useEffect } from "react";

export default function BookDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { book } = location.state || {};
    const [datas, setDatas] = useState([]);
    const data = useCustomFetch(`book/${book.bookId}`)
    console.log('data',data.data)
    useEffect(() => {
        if (data?.data) {
            console.log('data', data.data);
            setDatas(data.data); // 데이터가 유효하면 상태 업데이트
        }
    }, [data]);
    return (
      <>
        <Container>
            <PrevBtn onClick={()=>navigate(`/celebdetail/${book.bookId}`)}><MdNavigateBefore /></PrevBtn>
            <Div src={book.imageUrl} alt={book.id} />
            <BookInfo>
                <Title>{book.title}</Title>
                <div>{datas.author}</div> 
                
                <div>평점 {book.rating}</div>
                <SummaryWrapper>
                    <div>책소개</div>
                    <SummaryBox>
                    <div>{datas.description}</div>
                    </SummaryBox>
                </SummaryWrapper>
            </BookInfo>
            <FinishBtn onClick={() => navigate(`/buybook/:${book.bookId}`, { state: { data: data.data } })}>완독하기</FinishBtn>
        </Container>
      </>
    );
  }
{/* <div>{data.data.author}</div> */}
{/* <div>{data.data.description}</div> */}
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
const SummaryWrapper = styled.div`
    margin-top:40px;
    height:200px;    
`;
const SummaryBox = styled.div`
    margin-top:5px;
    flex-wrap:wrap;
    overflow-y:auto;
    height:180px;    
`;
const FinishBtn = styled.button`
    position:fixed;
    font-size:16px;
    color:white;
    left:250px;
    top:725px;
    width:100px;
    height:40px;
    background-color:#A5D6A7;
    border-radius:8px;
`;  