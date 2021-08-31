const enteredSideLengths = document.querySelectorAll(".input-number");
const btnCalcArea = document.querySelector(".btn-calc-area");
const outputMessage = document.querySelector(".output-msg");

function showTriangleArea() {
  if (outputMessage.classList.contains("error-msg")) {
    outputMessage.classList.remove("error-msg");
  }
  const a = Number(enteredSideLengths[0].value);
  const b = Number(enteredSideLengths[1].value);
  const c = Number(enteredSideLengths[2].value);

  const s = (a + b + c) / 2;
  const areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  if (a === "" || b === "" || c === "") {
    outputMessage.classList.add("error-msg");
    outputMessage.innerText = "Please Fill All Required Fields";
  } else {
    if (a > 0 && b > 0 && c > 0) {
      if (areaOfTriangle > 0) {
        outputMessage.innerText =
          "Using Heron's formula, the area of the triangle is " +
          areaOfTriangle;
      } else {
        outputMessage.classList.add("error-msg");
        outputMessage.innerText =
          "These sides don't form a triangle. Enter valid lengths such that each side length is less than the sum of the lengths of the other two sides";
      }
    } else if (a <= 0 || b <= 0 || c <= 0) {
      outputMessage.classList.add("error-msg");
      outputMessage.innerText =
        "Length of a side should always be a positive number";
    }
  }
}

btnCalcArea.addEventListener("click", showTriangleArea);
