const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputElement = document.querySelector(".output");

function calculateArea(){
  if(sides[0].value > 0 && sides[1].value > 0){
    const areaOfTriangle = (1/2) * Number(sides[0].value) * Number(sides[1].value);
    outputElement.innerText = "Area: " + areaOfTriangle + "cm²";
  }
  else{
    outputElement.innerText = "Enter a valid figure in both the fields";
  }
}

areaBtn.addEventListener("click", calculateArea);
