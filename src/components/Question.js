import "./question.css";
import React from "react";

export const Question = ({ question }) => {
  return (
    <>
      <div className="questioncard">
        <h1>{question !== undefined ? question.question : "Loading..."}</h1>
      </div>
    </>
  );
};
