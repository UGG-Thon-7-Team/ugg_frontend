import React, { useState, useEffect } from "react";
import Certification from "./Certification";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function CertificationSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookmarkId } = location.state || {}; // bookmarkId 전달받음

  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    // GET 요청으로 퀴즈 데이터 가져오기
    const fetchQuizData = async () => {
      if (!bookmarkId) {
        console.error("bookmarkId가 전달되지 않았습니다.");
        return;
      }

      try {
        const response = await axios.get(`https://ugg.jinhy.uk/bookmark/${bookmarkId}/quiz`);
        if (response.status === 200) {
          setQuizData(response.data);
        } else {
          throw new Error("서버 응답이 성공적이지 않습니다.");
        }
      } catch (error) {
        console.error("퀴즈 데이터 가져오기 실패:", error);
        alert("퀴즈 데이터를 가져오는 중 문제가 발생했습니다.");
      }
    };

    fetchQuizData();
  }, [bookmarkId]);

  const handleAnswerSubmit = async (answer) => {
    if (!bookmarkId || !quizData) {
      return;
    }

    try {
      const isCorrect = answer.trim().toLowerCase() === quizData.correctAnswer.toLowerCase();
      const response = await axios.patch(
        `https://ugg.jinhy.uk/bookmark/${bookmarkId}/quiz`,
        {
          ...quizData, // 기존 데이터 유지
          complete: isCorrect,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        if (response.data.complete) {
          alert("완독 인증이 완료되었습니다.");
          navigate("/library"); // 서재 페이지로 이동
        } else {
          alert("정답이 아닙니다. 다시 시도해주세요.");
        }
      } else {
        throw new Error("서버 응답이 성공적이지 않습니다.");
      }
    } catch (error) {
      console.error("정답 제출 실패:", error);
      alert("인증 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };


  const correctAnswer = "소년"; // 정답 설정

  const handleAnswerSubmit2 = (answer) => {
    
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      alert("정답입니다.");
      navigate("/");
    } else {
      alert("정답이 아닙니다. 다시 시도해주세요."); // 경고 메시지
    }
  };



  return (
    <>
      <Certification.Header />
      <Certification.Content>
        <Certification.Image />
        <Certification.Quiz onAnswerSubmit={handleAnswerSubmit2} />
      </Certification.Content>
    </>
  );
}
