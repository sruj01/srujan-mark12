const angleInput = document.querySelectorAll(".angle-input");
const checkTriangleBtn = document.querySelector("#check-triangle-btn");
const outputElement = document.querySelector(".output");

function calculateAngleSum(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}



function isTriangle(){
  if(angleInput[0].value && angleInput[1].value && angleInput[2].value)
  {
    const sumOfAngles = calculateAngleSum(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    if (sumOfAngles === 180){
      outputElement.innerText = "The Angles form a Triangle";
    }
    else{
      outputElement.innerText = "The Angles do NOT form a Triangle";
    }
  }
  else{
    outputElement.innerText = "Please enter all the fields";
  }
}

checkTriangleBtn.addEventListener("click", isTriangle);
