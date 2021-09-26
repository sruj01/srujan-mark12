const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputElement = document.querySelector(".output");

function calculateSumOfSquares(a,b){
  const sumOfSquares = a**2 + b**2;
  return sumOfSquares;
}

function calculateHypotenuse(){
  if(sides[0].value > 0 && sides[1].value > 0){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const hypotenuseLength = Math.round(Math.sqrt(sumOfSquares)*100)/100;
    outputElement.innerText = "The length of hypotenuse is:  " + hypotenuseLength + "cm"
  }
  else{
    outputElement.innerText = "Please enter a valid figure for both sides";
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
