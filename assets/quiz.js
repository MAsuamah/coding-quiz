var startQuiz = document.querySelector("#start")
var homeScreen = document.querySelector("#home")
var questionScreen = document.querySelector(".questions")
var shownQuestions = document.querySelector("#question")
var ansOptions = document.querySelector("#choices")
var correctMessage = document.querySelector("#right")
var incorrectMessage = document.querySelector("#wrong")
var endScreen = document.querySelector("#end")
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
    },
    
    {
      question: "<h1>What symbol is added to most HTML closing tags?</h1>",
      answers: [
          {text: "/", correct: true},
          {text: "*", correct: false},
          {text: ")", correct: false},
          {text: "]", correct: false}
      ]  
    },

    {
      question: "<h1>/eggs/bacon/tomatoes.png is an example of...?</h1>",
      answers: [
         {text: "A relative path", correct: true},
         {text: "An absolute path", correct: false},
         {text: "A URL", correct: false},
         {text: "A sandwich path", correct: false}
      ]  
    },

    {
        question: "<h1>A boolean data type is?</h2>",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: false },
            { text: "True or False", correct: true },
            { text: "None of the above", correct: false }
        ]  
      },

      {
        question: "<h1>Cd in the command line stands for what?</h1>",
        answers: [
            { text: "Change directory", correct: true },
            { text: "Compact disk", correct: false },
            { text: "Command discharge", correct: false },
            { text: "Computer database", correct: false }
        ]  
      },

      {
        question: "<h1>What does git checkout do?</h1>",
        answers: [
            { text: "Switches the git branch", correct: true },
            { text: "Checks git status", correct: false },
            { text: "Merges git branches", correct: false },
            { text: "Updates your repository", correct: false }
        ]  
      },

      {
        question: "<h1>Wireframing in web development means ...</h1>",
        answers: [
            { text: "Connecting git branches", correct: false },
            { text: "Connecting wires to make sure your computer is working", correct: false },
            { text: "A layout of content and functionality of a webpage", correct: true },
            { text: "Merging git branches", correct: false }
        ]  
      },

      {
        question: "<h1>The CSS box model is compromised of</h1>",
        answers: [
            { text: "Margin, content, padding, border", correct: true },
            { text: "Border, flex box, content, padding", correct: false },
            { text: "Margin, float, content, flex box", correct: false },
            { text: "Float, flex box, content, border", correct: false }
        ]  
      },

      {
        question: "<h1>for (i = 0; i < 7; i++) {Console.log(“I love coding”)} is an example of</h1>",
        answers: [
            { text: "A loop", correct: false },
            { text: "An iteration", correct: false },
            { text: "A for statement", correct: false },
            { text: "All of the above", correct: true }
        ]  
      },

      {
        question: "<h1>Which of the below is not an example of DOM manipulation?</h1>",
        answers: [
            { text: "document.body", correct: false },
            { text: "document.getElementById('myBtn').addEventListener('click', displayMessage)", correct: false },
            { text: "listEl.appendChild(li1)", correct: true },
            { text: "None of the above", correct: false }
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
    reset()
    showQuestions(displayedQuestions[questionIndex]) 
}

var showQuestions = function (question) {
    //Start time function
    shownQuestions.innerHTML = question.question
    question.answers.forEach(answer => {
        var button = document.createElement ("button")
        button.innerText = answer.text
        button.setAttribute("class", "btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", answerChoice)
        ansOptions.appendChild(button)

    })
}
    
var reset = function () {
    while (ansOptions.firstChild) {
        ansOptions.removeChild(ansOptions.firstChild)
    }

}

var answerChoice = function (event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    if (displayedQuestions.length > questionIndex + 1) {
        displayMessage (correctMessage, incorrectMessage, correct)
    } else {
        clearDisplayMessage(correctMessage, incorrectMessage)
        questionScreen.setAttribute("class", "hide")
        endScreen.removeAttribute("class", "hide")
    }
    questionIndex ++
    nextQuestion ()
}

//Add Correct alert

var displayMessage = function (correctMessage, incorrectMessage, correct) {
    clearDisplayMessage(correctMessage, incorrectMessage) 
    if (correct) {
        correctMessage.removeAttribute("class", "hide")
    } else {
        incorrectMessage.removeAttribute("class", "hide")
        //Subtact time function
    } 
}

//Clear correct alert

var clearDisplayMessage = function (correctMessage, incorrectMessage) {
    correctMessage.setAttribute("class", "hide")
    incorrectMessage.setAttribute("class", "hide")
}

var countdown = function () {
    var timeLeft = 100;
}

//Create a subtract time function, [start time functiona and  end game function]




startQuiz.addEventListener("click", startGame);






 