var startQuiz = document.querySelector("#start")
var homeScreen = document.querySelector("#home")
var questionScreen = document.querySelector(".questions")
var shownQuestions = document.querySelector("#question")
var ansOptions = document.querySelector("#choices")
var displayedQuestions, questionIndex
var questions = [
    {
      question: "<h1>What is the largest Heading Tag in HTML?</h1>",
      answers: [
          { text: "H12", correct: false },
          { text: "H6", correct: false },
          { text: "H1", correct: true },
          { text: "H8", correct: false }
      ]
    }
]

var startGame = function () {
    homeScreen.setAttribute("class", "hide")
    displayedQuestions = questions
    questionIndex = 0
    questionScreen.removeAttribute("class", "hide")
    nextQuestion()
}

var nextQuestion = function () {
    showQuestions(displayedQuestions[questionIndex]) 
}

var showQuestions = function (question) {
    shownQuestions.innerHTML = question.question
    question.answers.forEach(answer => {
        var button = document.createElement ("button")
        button.innerText = answer.text
        button.setAttribute("class", "btn")
        if (answer.correct) {
            button.dataset.correct = choice.correct
        }
        button.addEventListener("click", answerChoice)
        ansOptions.appendChild(button)
    })
}
    

var answerChoice = function (event) {

}



startQuiz.addEventListener("click", startGame);




 