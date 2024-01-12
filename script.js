const apiUrl = "https://opentdb.com/api.php?amount=10";

let currentQuestion;
let currentOptions;
let correctAnswer;

async function fetchQuestion() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.results.length > 0) {
      currentQuestion = data.results[0].question;
      currentOptions = data.results[0].incorrect_answers;
      correctAnswer = data.results[0].correct_answer;

      // Add correct answer to options and shuffle them
      currentOptions.push(correctAnswer);

      displayQuestion();
    } else {
      throw new Error("No questions found.");
    }
  } catch (error) {
    console.error("Error fetching question:", error);
  }
}

function displayQuestion() {
  document.getElementById("question").innerHTML = currentQuestion;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  currentOptions.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.classList.add("option");
    optionElement.textContent = `${index + 1}. ${option}`;
    optionElement.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionElement);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selectedOption) {
  const resultElement = document.getElementById("result");
  if (selectedOption === correctAnswer) {
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
  }
}

function nextQuestion() {
  fetchQuestion();
}

// Initial question fetch
fetchQuestion();
