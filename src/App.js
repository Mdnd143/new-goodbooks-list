import React from "react";
import "./styles.css";
import { useState } from "react";

const bookList = {
  Physics: [
    {
      name: "Xam idea",
      rating: "4.1/5",
      description:
        "This book contains all the topics given by the cbse as syllabus. in this, you can study topicwise."
    },
    {
      name: "NCERT",
      rating: "4.2/5",
      description:
        "Ncert are important as they build the Foundation and Concepts. but for deep study you need to purchase another book for more clarity"
    },
    {
      name: "Concept of physics",
      rating: "4.2/5",
      description:
        "this book contain all important topics with complete syllabus. you can also solve previous paper questions."
    }
  ],

  Chemistry: [
    {
      name: "NCERT",
      rating: "3.5/5",
      description:
        "Ncert are important as they build the Foundation and Concepts. but for deep study you need to purchase another book for more clarity"
    },
    {
      name: "Pradeep' chemistry",
      rating: "4.5/5",
      description:
        "This book contains all the topics given by the cbse as syllabus. in this, you can study topicwise."
    },
    {
      name: "Modern's ABC of chemistry",
      rating: "4.5/5",
      description:
        "this book contain all important topics with complete syllabus. you can also solve previous paper questions."
    }
  ],
  History: [
    {
      name: "NCERT",
      rating: "3.5/5",
      description:
        "Ncert are important as they build the Foundation and Concepts. but for deep study you need to purchase another book for more clarity"
    },
    {
      name: "Spectrum",
      rating: "4.5/5",
      description:
        "This book contains all the topics of Modern India and writen in very simple language."
    },
    {
      name: "India After Gandhi by Ramachandra Guha",
      rating: "4.5/5",
      description:
        "This book contains about India after indpendence. it is writen in very simple language."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("History");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive" }}> 📚📚 mygoodbooks list </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Check out my favorite book list genre wise with ratings on 5 scale{" "}
      </p>

      <div>
        {Object.keys(bookList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.3rem",
              border: "3px solid black",
              padding: "0.5rem  1rem",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookList[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "3px solid black",
                width: "70%",
                margin: "1rem 9rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
