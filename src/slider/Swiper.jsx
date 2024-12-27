import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Swiper } from "swiper/react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 310px;
  border:1px solid pink;
  height: 100px;
`;

const Button = styled.div`
  font-size: 10px;
  font-weight: 700;
  line-height: 100px;
`;

const SubSwiper = ({ children }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev(); // 이전 슬라이드로 이동
  };

  const handleNext = () => {
    swiperRef.current?.slideNext(1); // 다음 슬라이드로 이동
  };

  return (
    <Container>
      <Swiper
        modules={[Navigation]} // Navigation 모듈 추가
        spaceBetween={10} // 슬라이드 간 간격
        slidesPerView={3} // 한 번에 3개씩 슬라이드
        slidesPerGroup={1} // 한 번에 하나의 슬라이드씩 이동
        loop={true} // 끝까지 스와이프하면 처음으로 돌아감
        onSwiper={(swiper) => (swiperRef.current = swiper)} // swiper 인스턴스를 참조
        touchStartPreventDefault={true} // 터치 시작 시 기본 동작 막기
        touchMoveStopPropagation={true} // 터치 이동 중 화면 스크롤 방지
      >
        {children}
      </Swiper>
    </Container>
  );
};

export default SubSwiper;
