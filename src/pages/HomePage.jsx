import styled from 'styled-components';
import RecommendBox from '../components/RecommendBox';
export default function HomePage() {
  return (
    <>
      <Container>
        <RecommendBox></RecommendBox>
        <RecommendBox></RecommendBox>
        <RecommendBox></RecommendBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  border:1px solid red;
  height: 100vh;
`;