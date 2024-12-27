import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const RecommendBox =({celeb})=>{
    console.log('celeb',celeb)
    const navigate = useNavigate();
    if (!celeb) {
        return <div>Loading...</div>;  // 또는 적절한 처리
      }
    return(
        <>
            <Container onClick={() => navigate(`/celebdetail/${celeb.celebritiesName}`,{ state: { celeb } })} >
                <Recommender>{celeb.celebritiesName}님이 이런 책을 추천해요</Recommender>
                <SubWrapper>
    {celeb?.books?.slice(0, 3).map((book) => ( // 첫 3개만 가져오기
        <Div key={book.id} src={book.imageUrl} alt={book.id} />
    ))}
</SubWrapper>

            </Container>
        </>
    )
}
RecommendBox.propTypes = {
    celeb: PropTypes.shape({
      celebritiesName: PropTypes.string.isRequired,
      books: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired, // book id 필드가 있어야 함
          title: PropTypes.string.isRequired, // book title 필드가 있어야 함
        })
      ).isRequired,
    }).isRequired,
  };
export default RecommendBox;

const Container = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;
const Recommender = styled.div`
    font-size:16px;
    font-weight:700;
    margin-top:10px;
`;
const SubWrapper = styled.div`
    margin-top:10px;
    width:100%;
    display: flex;
        gap:10px;
    *{
        display: flex;
        gap:5px;
    }
`;
const Div = styled.img`
    width:90px;
    height:111px;
    border-radius:8px;
`;

// const Img=styled.img`
//     width:98px;
//     height:111px;
//     border-radius:8px;
// `;
{/* {subData?.results?.map((book:Book,index:number) => (
    <SwiperSlide key={movie.id}>
        <SubWrapper>
            <Img 
                src={``} 
                alt={book.title}
                onClick={()=>navigate(`/books/${book.id}`)}
            />
            <div>{index+1}</div>
            <div>{book.title}</div>
        </SubWrapper>
    </SwiperSlide>
))} */}