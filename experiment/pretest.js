
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "BOD is an important measure of _______________ ",
      answers: {
        a: "A measure of the biological activity of water and waste water",
        b: "An organism's natural level of oxygen requirements",
        c: "Oxygen content of water and waste water",
        d: "The oxygen using potential of water and waste water"
      },
      correctAnswer: "d"
    },

    {
      question: "What is the temperature required during the incubation period?",
      answers: {
        a: "20&deg;C",
        b: "15&deg;C",
        c: "25&deg;C",
        d: "30&deg;C"
      },
      correctAnswer: "a"
    },

    {
      question: "Nitrification Inhibitor used in determination of BOD _________________ ",
      answers: {
        a: "Dicyandiamide",
        b: "Ammonium thiosulfate",
        c: "2-chloro-6 ( trichloromethyl ) pyridine (TCMP)",
        d: "Nitropyrene"
      },
      correctAnswer: "c"
    },
    {
        question: "A river water has a BOD level of 12mg/l, then the water is ",
        answers: {
          a: "Less polluted",
          b: "Highly polluted",
          c: "Not polluted",
          d: "None of the above"
        },
        correctAnswer: "b"
      },
    {
        question: "Samples bottles are completely filled up to the neck. Why?",
    answers: {
          a: "To avoid mixing of air bubbles with the sample",
          b: "To maintain the temperature of sample",
          c: "To protect it from sunlight",
          d: "All of the above"
        },
        correctAnswer: "a"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
