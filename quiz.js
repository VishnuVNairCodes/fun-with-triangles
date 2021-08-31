const quizForm = document.querySelector(".quiz-form");
const outputMessage = document.querySelector(".output-msg");
const btnSubmit = document.querySelector(".btn-submit");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "85°",
  "45°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
  if (outputMessage.classList.contains("error-msg")) {
    outputMessage.classList.remove("error-msg");
  }
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  if (index === correctAnswers.length) {
    outputMessage.innerText = "Your score is " + score;
  } else {
    outputMessage.classList.add("error-msg");
    outputMessage.innerText = "Please answer all the questions";
  }
}

btnSubmit.addEventListener("click", calculateScore);
