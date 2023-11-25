import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteClickHandler(){
    onDelete(id)
  }

  function changeHandler(e){
    question.correctIndex = e.target.value
    onUpdate(question)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeHandler}>{options}</select>
      </label>
      <button onClick={deleteClickHandler}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
