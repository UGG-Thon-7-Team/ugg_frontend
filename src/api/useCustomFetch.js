import { useEffect, useState } from "react";
import axios from "axios";

const useCustomFetch = (url) => {
  const [data, setData] = useState(null); // 상태로 데이터를 관리
  const urlA = 'https://ugg.jinhy.uk/' + url;
 console.log('url',urlA)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlA);
        console.log("response", response.data);
        setData(response.data); // 데이터가 로딩되면 상태를 업데이트
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [ url, urlA]); 
  return { data }; // 데이터 반환
};

export default useCustomFetch;
