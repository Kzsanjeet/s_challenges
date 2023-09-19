const question = document.getElementById("question");

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const points = document.getElementById("points");

let coin = 0;

function fetching() {
  let questions = fetch("quiz.json");
  questions
    .then(res => {
      return res.json();
    })
    .then(ques => {
      console.log(ques);
      const prasna = ques.quiz_questions;
      quiz(prasna);

      optionA.addEventListener("click", () => {
        let op = prasna[i].options[0];
        if (prasna[i].answer === op) {
          console.log("correct");
          coin += 5;
          optionA.style.backgroundColor = "green";
        } else {
          coin += 0;
          optionA.style.backgroundColor = "red";
        }
      });
      optionB.addEventListener("click", () => {
        let op = prasna[i].options[1];
        if (prasna[i].answer === op) {
          console.log("correct");
          coin += 5;
          optionB.style.backgroundColor = "green";
        } else {
          coin += 0;
          optionB.style.backgroundColor = "red";
        }
      });
      optionC.addEventListener("click", () => {
        let op = prasna[i].options[2];
        if (prasna[i].answer === op) {
          console.log("correct");
          coin += 5;
          optionC.style.backgroundColor = "green";
        } else {
          coin += 0;
          optionC.style.backgroundColor = "red";
        }
      });
      optionD.addEventListener("click", () => {
        let op = prasna[i].options[3];
        if (prasna[i].answer === op) {
          console.log("correct");
          coin += 5;
          optionD.style.backgroundColor = "green";
        } else {
          coin += 0;
          optionD.style.backgroundColor = "red";
        }
      });

      next.addEventListener("click", () => {
        if (i > 100) {
          alert("All questions completed...");
        } else {
          i++;
        }
        quiz(prasna);
        defult();
      });

      prev.addEventListener("click", () => {
        if (i > 0) {
          i--;
        } else {
          alert("No previous questions...");
        }
        quiz(prasna);
        defult();
      });
    });
}
fetching();
let i = 0;
function quiz(prasna) {
  points.textContent = `Total Points : ${coin}`;
  question.textContent = prasna[i].question;
  optionA.textContent = prasna[i].options[0];
  optionB.textContent = prasna[i].options[1];
  optionC.textContent = prasna[i].options[2];
  optionD.textContent = prasna[i].options[3];
  ratio();
}

function ratio() {
  if (coin / i > 3.5) {
    console.log("excellent");
    points.style.color = "green";
  } else if (coin / i > 2) {
    console.log("good");
    points.style.color = "orange";
  } else {
    console.log("poor");
    points.style.color = "red";
  }
}

function defult() {
  optionA.style.backgroundColor = "#ADC8A0";
  optionB.style.backgroundColor = "#ADC8A0";
  optionC.style.backgroundColor = "#ADC8A0";
  optionD.style.backgroundColor = "#ADC8A0";
}