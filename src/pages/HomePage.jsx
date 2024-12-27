import styled from 'styled-components';
import RecommendBox from '../components/RecommendBox';
import useCustomFetch from '../api/useCustomFetch';
import { useEffect,useState } from 'react';
import logo from '../assets/images/logo.svg'

export default function HomePage() {
  const [datas, setDatas] = useState([]);
  const data = useCustomFetch('book')
  console.log('data',data)
  useEffect(() => {
    if (data && data.data && Array.isArray(data.data.celebritiesBooks)) {
      console.log('data', data.data.celebritiesBooks);
      setDatas(data.data.celebritiesBooks); // 데이터가 유효하면 상태 업데이트
    }
  }, [data]);
  
  return (
    <>
      <Container>
        <>
          <Img src={logo} alt='logo'></Img>
          {
            datas && datas.length > 0 && data.data.celebritiesBooks.map((celeb,i)=>(
              <RecommendBox 
                celeb={celeb}
                key={i} 
              >
              </RecommendBox> 
            ))
          }

        </>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
`;
const Img = styled.img`
  width:160px;
  height:90px;
  margin-left:80px;
`;