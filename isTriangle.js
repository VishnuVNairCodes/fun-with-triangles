const anglesEntered = document.querySelectorAll(".input-number");
const btnIsTriangle = document.querySelector(".btn-istriangle");
const outputMessage = document.querySelector(".output-msg");

function checkIfTriangle() {
  if (outputMessage.classList.contains("error-msg")) {
    outputMessage.classList.remove("error-msg");
  }
  let sum = 0;
  let flag = false;
  for (let i = 0; i < anglesEntered.length; i++) {
    if (anglesEntered[i].value === "") {
      outputMessage.classList.add("error-msg");
      outputMessage.innerText = "Please fill all the fields";
      break;
    } else if (anglesEntered[i].value <= 0) {
      outputMessage.classList.add("error-msg");
      outputMessage.innerText = "Value of angles entered should be positive";
      break;
    } else {
      if (i + 1 === anglesEntered.length) {
        flag = true;
      }
      sum += Number(anglesEntered[i].value);
    }
  }
  if (flag) {
    if (sum === 180) {
      outputMessage.innerText = "Yay! These angles form a triangle ✌";
    } else {
      outputMessage.innerText = "Oops! These angles don't form a triangle 🙁";
    }
  }
}

btnIsTriangle.addEventListener("click", checkIfTriangle);
