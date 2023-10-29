const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const homeBtn = document.querySelector(".goHome-btn");
const audio = document.getElementById("audio");
const tryAgainAudio = document.getElementById("tryagain-audio");
const scoreAudio = document.getElementById("score-audio");
const homeButton = document.querySelector(".home-btn");
const homeAudio = document.getElementById("home-audio");

startBtn.onclick = () => {
  audio.play();
  popupInfo.classList.add("active");
  main.classList.add("active");
};

homeButton.onclick = () => {
  audio.play();
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 800);
};

exitBtn.onclick = () => {
  audio.play();
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  audio.play();
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");
  showQuestions(0);
  questionCounter(1);
  headerScore();
};

tryAgainBtn.onclick = () => {
  startOver();
  tryAgainAudio.play();
  quizBox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumb);
  headerScore();
};

homeBtn.onclick = () => {
  startOver();
  homeAudio.play();
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestions(questionCount);
  questionCounter(questionNumb);

  headerScore();
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.add("active");
  } else {
    showResultBox();
  }
};

function startOver() {
  correctAnswerCount = 0; // Reset the correct answer count
  selectedAnswers = []; // Reset the selected answers
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  // Reset the option elements and remove classes
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("incorrect");
    option.classList.remove("disabled");
  });

  // Hide the result box and show the quiz box
  resultBox.classList.remove("active");
  quizBox.classList.add("active");

  showQuestions(questionCount);
  questionCounter(questionNumb);
  headerScore();
}

const optionList = document.querySelector(".option-list");

function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

  quizBox.style.width = "50%";

  let optionTag = "";

  for (let i = 0; i < questions[index].options.length; i++) {
    optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
  }

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// Add a variable to keep track of selected answers for the current question
let selectedAnswers = [];
let correctAnswerCount = 0;

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;
  let explanation = questions[questionCount].explanation;

  if (questionCount === 0) {
    // Check if the user has already selected the maximum number of answers
    if (selectedAnswers.length >= questions[questionCount].numAnswersToSelect) {
      Swal.fire({
        title: "Oops...",
        text: "You've already selected the maximum number of answers",
        customClass: {
          confirmButton: "custom-swal-confirm-button",
          popup: "swal-wide",
        },
        buttonsStyling: false, // Disable default button styling
        showCancelButton: false, // Hide the Cancel button
        confirmButtonColor: "", // Change the button color
      });

      return;
    }

    // Check if the selected answer is one of the correct answers
    if (questions[questionCount].answer.includes(userAnswer)) {
      console.log("Answer is correct");
      answer.classList.add("correct");
      userScore += 0.5;
      headerScore();

      correctAnswerCount++;

      if (correctAnswerCount === 2) {
        Swal.fire({
          text: explanation,
          customClass: {
            confirmButton: "custom-swal-confirm-button",
          },
          buttonsStyling: false,
          showCancelButton: false,
          confirmButtonColor: "",
        });
      }
    } else {
      console.log("Answer is wrong");
      answer.classList.add("incorrect");
    }

    selectedAnswers.push(userAnswer);

    nextBtn.classList.add("active");
  } else {
    if (userAnswer === correctAnswer) {
      Swal.fire({
        text: explanation,
        customClass: {
          confirmButton: "custom-swal-confirm-button", // Add custom class to the confirm button
        },
        buttonsStyling: false, // Disable default button styling
        showCancelButton: false, // Hide the Cancel button
        confirmButtonColor: "", // Change the button color
      });
      console.log("anwser is correct");
      answer.classList.add("correct");
      userScore += 1;
      headerScore();
    } else {
      console.log("Answer is wrong");
      answer.classList.add("incorrect");

      for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent == correctAnswer) {
          optionList.children[i].classList.add("correct");
        }
      }
    }

    for (let i = 0; i < allOptions; i++) {
      optionList.children[i].classList.add("disabled");
    }
  }
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  scoreAudio.play();
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;
    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
