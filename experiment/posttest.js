
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
      question: "What is the colour change during titration with Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> before adding starch?",
      answers: {
        a: "Dark yellow to green",
        b: "Green to pale yellow",
        c: "Dark yellow to pale yellow",
        d: "None of the above"
      },
      correctAnswer: "c"
    },

    {
      question: "What indicator is used during the titration ?",
      answers: {
        a: "Starch",
        b: "Phenolphthalein",
        c: "Methyl orange",
        d: "Methylene blue"
      },
      correctAnswer: "a"
    },

    {
      question: "Select the correct statement.",
      answers: {
        a: "5 day BOD is the ultimate BOD",
        b: "5 day BOD is less than 4 day BOD keeping other conditions same",
        c: "5 day BOD is greater than 4 day BOD keeping other conditions same",
        d: "BOD does not depend on time"
      },
      correctAnswer: "b"
    },
    {
      question: "High amount of dissolved oxygen in a lake indicate ",
      answers: {
        a: "High turbidity",
        b: "Less water quality",
        c: "Better water quality",
        d: "Excessive aquatic plant or algae blooms"
      },
      correctAnswer: "c"
    },
    {
      question: "According to drinking water specification provided by IS 10500 (2012), what should be range of BOD of drinking water",
      answers: {
        a: "Greater than 2mg/l",
        b: "Greater then 1mg/l",
        c: "Less than 1mg/l",
        d: "None of the above"
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
