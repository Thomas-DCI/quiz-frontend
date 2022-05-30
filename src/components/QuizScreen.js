import React, { useState, useEffect } from "react";
import axios from "axios";
import { Question } from "./Question";

export const QuizScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [qindex, setQindex] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/questions`
        );

        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="quizContainer">
      <Question question={questions[qindex]} />
    </div>
  );
};
