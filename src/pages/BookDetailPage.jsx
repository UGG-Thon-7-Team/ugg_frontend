import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BookDetailPage() {
    const navigate = useNavigate();
    return (
      <>
        <Container>
            <PrevBtn onClick={()=>navigate('/celebdetail')}><MdNavigateBefore /></PrevBtn>
            <Div></Div>
            <BookInfo>
                <Title>요절</Title>
                <div>조용훈</div>
                <div>평점 4.2점</div>
                <SummaryWrapper>
                    <div>책소개</div>
                    <SummaryBox>
                        <div>이탈리아 말라파르테 문학상 수상작. 한강의 여섯번째 장편소설. '상처의 구조에 대한 투시와 천착의 서사'를 통해 한강만이 풀어낼 수 있는 방식으로 1980년 5월을 새롭게 조명한다. 한강은 무고한 영혼들의 말을 대신 전하는 듯한 진심 어린 문장들로 어느덧 그 시절을 잊고 무심하게 5.18 이후를 살고 있는 우리에게 묵직한 질문을 던지고, 여전히 5.18의 트라우마를 안고 힘겹게 살아가는 사람들을 위무한다.이탈리아 말라파르테 문학상 수상작. 한강의 여섯번째 장편소설. '상처의 구조에 대한 투시와 천착의 서사'를 통해 한강만이 풀어낼 수 있는 방식으로 1980년 5월을 새롭게 조명한다. 한강은 무고한 영혼들의 말을 대신 전하는 듯한 진심 어린 문장들로 어느덧 그 시절을 잊고 무심하게 5.18 이후를 살고 있는 우리에게 묵직한 질문을 던지고, 여전히 5.18의 트라우마를 안고 힘겹게 살아가는 사람들을 위무한다.sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</div>
                    </SummaryBox>
                </SummaryWrapper>
            </BookInfo>
            <FinishBtn onClick={()=>navigate('/buybook')}>완독하기</FinishBtn>
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
const SummaryWrapper = styled.div`
    margin-top:40px;
    height:200px;    
    border:1px solid red;
`;
const SummaryBox = styled.div`
    margin-top:5px;
    flex-wrap:wrap;
    overflow-y:auto;
    height:180px;    
    border:1px solid blue;
`;
const FinishBtn = styled.button`
    position:fixed;
    font-size:16px;
    color:white;
    left:250px;
    top:725px;
    width:100px;
    height:40px;
    background-color:#1CBBFF;
    border-radius:8px;
`;  