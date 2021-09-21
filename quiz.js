const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn")
const outputElement = document.querySelectorAll(".output");
const correctAnswer = ["Pythagoras theorem", "90°", "8","isoceles","Heron"];

function calculateScore(){
  let score= 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for(let value of formResults.values()){
    if(value === correctAnswer[index]){
      score = score + 1;
    }
    index = index + 1;
  }
  outputElement[0].innerText = "Your Score: " + score;
  if(score === 5){
    outputElement[1].innerText = "Looks like you know your Triangles "
  }
  else{
    outputElement[1].innerText = "Not an expert huh?"
  }
}

submitAnswerBtn.addEventListener("click", calculateScore);
