const lengthEntered = document.querySelectorAll(".input-number");
const btnCalcHypotenuse = document.querySelector(".calc-hypotenuse");
const outputMessage = document.querySelector(".output-msg");

function calculateHypotenuse() {
  if (outputMessage.classList.contains("error-msg")) {
    outputMessage.classList.remove("error-msg");
  }
  let sum = 0;
  let flag = false;
  for (let i = 0; i < lengthEntered.length; i++) {
    if (lengthEntered[i].value === "") {
      outputMessage.classList.add("error-msg");
      outputMessage.innerText = "Please fill both the fields";
      break;
    } else if (lengthEntered[i].value <= 0) {
      outputMessage.classList.add("error-msg");
      outputMessage.innerText = "Length of sides should be a positive value";
      break;
    } else {
      if (i === 1) {
        flag = true;
      }
      sum += Math.pow(Number(lengthEntered[i].value), 2);
    }
  }
  if (flag) {
    const hypotenuse = Math.sqrt(sum);
    outputMessage.innerText = "The length of hypotenuse is " + hypotenuse;
  }
}

btnCalcHypotenuse.addEventListener("click", calculateHypotenuse);
