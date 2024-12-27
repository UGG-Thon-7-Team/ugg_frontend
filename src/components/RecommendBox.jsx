import styled from "styled-components";
import SubSwiper from "../slider/Swiper";
import { SwiperSlide } from "swiper/react";

const subData = {
    results: [
      { id: 1, title: "책 1" },
      { id: 2, title: "책 2"},
      { id: 3, title: "책 3"},
      { id: 4, title: "책 4" },
      { id: 5, title: "책 5"},
      { id: 1, title: "책 6" },
      { id: 2, title: "책 7"},
      { id: 3, title: "책 8"},
      { id: 4, title: "책 9" },
      { id: 5, title: "책 10"},
      { id: 1, title: "책 11" },
      { id: 2, title: "책 12"},
      { id: 3, title: "책 13"},
      { id: 4, title: "책 14" },
      { id: 5, title: "책 15"},
    ],
  };
const RecommendBox =()=>{
    return(
        <>
            <Container>
                <Recommender>@@님이 이런 책을 추천해요</Recommender>
                <SubWrapper>
                    {subData?.results?.length >= 3 ? (
                        <SubSwiper>
                            {subData?.results?.map((book) => (
                                <SwiperSlide key={book.id}>
                                        <Div>{book.title}</Div>
                                </SwiperSlide>
                            ))}
                        </SubSwiper>
                    ) : (
                        subData?.results?.map((book) => (
                            <Div key={book.id}>{book.title}</Div>
                          ))
                    )}
                </SubWrapper>
            </Container>
        </>
    )
}
export default RecommendBox;

const Container = styled.div`
    border:1px solid blue;
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
    border:1px solid green;
    width:100%;
    *{
        display: flex;
        gap:5px;
    }
`;
const Div = styled.div`
    width:90px;
    height:111px;
    border-radius:8px;
    background-color:gray;
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