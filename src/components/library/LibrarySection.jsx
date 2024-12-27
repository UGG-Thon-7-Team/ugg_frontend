import React, { useState, useEffect } from "react";
import Library from "./Library";
import { useNavigate } from "react-router-dom";

export default function LibrarySection() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const handleBookClick = (bookId, isComplete) => {
    if (isComplete) {
      alert("이미 완독한 책입니다.");
    } else {
      navigate("/library/certification", {
        state: { bookmarkId: bookId },
      });
    }
  };

  useEffect(() => {
    // 데이터 가져오기
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://ugg.jinhy.uk/book"); // 서버에서 데이터 가져오기
        const data = await response.json(); // JSON 형식으로 변환

        const booksData = data.celebritiesBooks[0]?.books || [];
        setBooks(booksData); // 상태에 데이터 저장
      } catch (error) {
        console.error("Error fetching books:", error); // 에러 처리
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Library.Header />
      <Library.Books>
        {books.map((book) => (
          <Library.Book
            key={book.bookId}
            bookId={book.bookId}
            isComplete={book.isComplete || false} 
            title={book.title}
            imageUrl={book.imageUrl} 
            onBookClick={(bookId, isComplete) => handleBookClick(bookId, isComplete)}
          />
        ))}
      </Library.Books>
    </>
  );
}
