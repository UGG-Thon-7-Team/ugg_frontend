import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export default function CelebDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { celeb } = location.state || {};
    console.log('celeb',celeb);
    return (
      <>
        <PrevBtn onClick={()=>navigate('/')}><MdNavigateBefore /></PrevBtn>
        <CelebName>{celeb.celebritiesName}님이 이런 책을 추천해요</CelebName>
        <VerticalLine></VerticalLine>
        <BookWrapper>
            {celeb?.books?.map((book) => (
                <BookInfo key={book.id}> {/* BookInfo에 key를 추가 */}
                    <Div src={book.imageUrl} alt={book.id} onClick={() => navigate(`/bookdetail/${book.bookId}`,{ state: { book } })}/>
                    <InfoBox>
                        <div>{book.title}</div>
                        <div>{book.rating}</div>
                        <div></div>
                    </InfoBox>
                </BookInfo>  
            ))}                   
        </BookWrapper>
      </>
    );
  }
  
  const PrevBtn = styled.div`
    font-size:50px;
    position:fixed;
    top:20px;
    left:10px;
  `;
  const CelebName = styled.div`
    font-size:18px;
    font-weight:600;
    position:fixed;
    top:110px;
    left:20px;
  `;
  const VerticalLine = styled.div`
    height: 570px;
    position:fixed;
    top:160px;
    left:50%;
    border-left: 2px solid black; 
  `;
  const BookWrapper = styled.div`
    display:flex;
    position:fixed;
    top:150px;
    left:0px;
    width:100%;
    height:75%;
    flex-wrap:wrap;
    overflow-y:auto;
    gap:30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  `;
  const BookInfo = styled.div`
    width:150px;
    height:200px;
    margin-left:10px;
    display:flex;
    flex-direction: column;
    align-items: center; 
    position:relative;
    top:0px;
  `;
  const InfoBox = styled.div`
    width:150px;
    height:40px;
    display:flex;
    padding-top:10px;
    flex-direction: column;
    align-items: center;    
    position:relative;
    top:50px;
  `;
  const Div = styled.img`
    width:100px;
    height:150px;
    border-radius:8px;
    margin-bottom:-50px;
`;