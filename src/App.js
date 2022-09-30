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
      rating: "4.0/5",
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
      <h1>
        {" "}
        <span>📚📚</span> Mygoodbooks list{" "}
      </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Check out my favorite book list genre wise with ratings on 5 scale{" "}
      </p>

      <div>
        {Object.keys(bookList).map((genre, id) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "darkcyan",
              border: "none",
              color: "white",
              fontSize: "large",
              boxShadow: "0px 0px 10px grey",
              padding: "10px  12px",
              margin: "1rem 0.5rem"
            }}
            key={id}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr
        style={{ height: "2px", backgroundColor: "red", margin: "3rem auto" }}
      />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookList[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                width: "50%",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                boxShadow: "0px 0px 10px black",
                background: "rgb(208, 207, 186)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              {" "}
              <div className="book-name"> {book.name} </div>
              <div className="book-rating"> {book.rating} </div>
              <div className="book-desc"> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
