import React, { useState } from "react";
import styles from './Certification.module.css';
import { useNavigate } from 'react-router-dom';
import arrow from "@svgs/arrow.svg";
import bookImg from "@images/bookEX.png"

export default function Certification({ children }) {
  return <>{children}</>;
}

function Header() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 화면으로 이동
  };

  return (
    <div className={styles.header}>
      <span className={styles.arrow} onClick={handleBackClick}>
        <img src={arrow} alt="뒤로가기" />
      </span>
      <span className={styles.headertitle}>인증하기</span>
    </div>
  );
}

function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}

function Image() {
  return <img className={styles.bookImg} src={bookImg} alt="책 이미지" />;
}

function Quiz({ onAnswerSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    onAnswerSubmit(answer);
  };

  return (
    <div className={styles.quiz}>
      <p className={styles.question}>p.24 첫 명사를 입력해주세요</p>
      <input
        className={styles.answer}
        placeholder="답변을 입력해주세요"
        value={answer}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleSubmit}>
        확인
      </button>
    </div>
  );
}

Certification.Header = Header;
Certification.Content = Content;
Certification.Image = Image;
Certification.Quiz = Quiz;
