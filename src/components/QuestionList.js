import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {

const [questions, setQuestions] = useState([])

useEffect(fetchData, [])

function fetchData(){

  fetch("http://localhost:4000/questions")
  .then(r=>r.json())
  .then(data=>{

    setQuestions(data.map((question)=>{
      return (
        <QuestionItem key={question.id} question={question} onDelete={handleDelete} onUpdate={updateHandler}/>
      )

   }))
  })
}

function handleDelete(id){
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE"
  }).then(fetchData)

}

function updateHandler(item){
  console.log(item)
  item.correctIndex = parseInt(item.correctIndex)
 
  fetch(`http://localhost:4000/questions/${item.id}`, {
    method: "PATCH",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(item)
  })
  .then(fetchData)
}


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
    </section>
  );
}

export default QuestionList;
