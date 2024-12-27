import styles from './Library.module.css';
import { useNavigate } from 'react-router-dom';

export default function Library({ children }) {
  return <>{children}</>;
}

function Header() {

  return (
    <div className={styles.header}>
      <span className={styles.headertitle}>내 서재</span>
    </div>
  )
}

function Books({ children }) {
  return (
    <div className={styles.booksdiv}>{children}</div>
  )
}

function Book({ bookId, isComplete, title, imageUrl }) {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    if (!isComplete) {
      navigate(`/library/certification?bookId=${bookId}`); // 인증 페이지로 이동
    }
  };

  return (
    <div className={styles.bookdiv}>
      <img className={styles.bookimg} src={imageUrl} alt={title} /> {/* 서버에서 받은 이미지 */}
      <div className={styles.bookcontent}>
        <p className={styles.booktitle}>{title}</p> {/* 서버에서 받은 제목 */}
        <button
          className={styles.bookbutton}
          onClick={handleButtonClick}
          style={{
            backgroundColor: isComplete ? "var(--main-text-color)" : "var(--accent-color)",
          }}
        >
          {isComplete ? "완독" : "완독 인증하기"}
        </button>
      </div>
    </div>
  );
}


Library.Header = Header;
Library.Books = Books;
Library.Book = Book;