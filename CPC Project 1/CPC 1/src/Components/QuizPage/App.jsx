import { useState } from 'react'
import QuestionBox from './QuestionBox';
import '../../App.css'
import './quiz.css'
import Time from './Time';
function App(){
  const [score,setScore]=useState(0);
  const scoredata=(data)=>{
    setScore(a=>a+data);
  }
  const questionitems=ques.questions.map(qitem=>(
    <>
    {/* {qitem.id === 1 ? <div className='gap'></div> : null} */}
      <div className='gap'></div>
      <QuestionBox qcontent={qitem.question} id={qitem.id} opt={qitem.options} ans={qitem.answer} scfunc={scoredata}/>
      <div className='gap'></div>
    </>
  ));
  return (
    <>
     <div className='middle'>
     <div className='score'><h2 className='inh2'>Score:{score}</h2>
     <Time/>
     <button className='but'>Submit Test</button>
     </div>
     {questionitems}
     </div>
    </>
  )
}
const ques={
  "questions": [
    {
      "id": 1,
      "question": "What is the capital of France?",
      "options": ["Berlin", "London", "Paris", "Madrid"],
      "answer": "Paris"
    },
    {
      "id": 2,
      "question": "Which planet is known as the Red Planet?",
      "options": ["Venus", "Mars", "Jupiter", "Saturn"],
      "answer": "Mars"
    },
    {
      "id": 3,
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      "answer": "William Shakespeare"
    },
    {
      "id": 4,
      "question": "In what year did the Titanic sink?",
      "options": ["1905", "1912", "1920", "1931"],
      "answer": "1912"
    },
    {
      "id": 5,
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      "answer": "Blue Whale"
    },
    {
      "id": 6,
      "question": "Which element has the chemical symbol 'O'?",
      "options": ["Oxygen", "Gold", "Silver", "Carbon"],
      "answer": "Oxygen"
    },
    {
      "id": 7,
      "question": "Who is known as the 'Father of Computer Science'?",
      "options": ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
      "answer": "Alan Turing"
    },
    {
      "id": 8,
      "question": "What is the capital of Japan?",
      "options": ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      "answer": "Tokyo"
    },
    {
      "id": 9,
      "question": "Which ocean is the largest?",
      "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      "answer": "Pacific Ocean"
    },
    {
      "id": 10,
      "question": "Who painted the Mona Lisa?",
      "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      "answer": "Leonardo da Vinci"
    }
  ]
}

export default App
