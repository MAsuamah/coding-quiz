//Reference https://www.youtube.com/watch?v=riDzcEQbX6k&t=1s&ab_channel=WebDevSimplified

var startQuiz = document.querySelector("#start")
var homeScreen = document.querySelector("#home")
var questionScreen = document.querySelector(".questions")
var shownQuestions = document.querySelector("#question")
var ansOptions = document.querySelector("#choices")
var correctMessage = document.querySelector("#right")
var incorrectMessage = document.querySelector("#wrong")
var endScreen = document.querySelector("#end")
var timerEL = document.querySelector("#timer")
var timeLeft = 70
var displayedQuestions, questionIndex

//Array of questions that will be asked
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
          {text: "*", correct: false},
          {text: ")", correct: false},
          {text: "]", correct: false},
          {text: "/", correct: true}
      ]  
    },

    {
      question: "<h1>/eggs/bacon/tomatoes.png is an example of...?</h1>",
      answers: [
         {text: "A sandwich path", correct: false},
         {text: "A relative path", correct: true},
         {text: "An absolute path", correct: false},
         {text: "A URL", correct: false}
         
      ]  
    },

    {
        question: "<h1>A boolean data type is?</h1>",
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
            { text: "Compact disk", correct: false },
            { text: "Command discharge", correct: false },
            { text: "Computer database", correct: false },
            { text: "Change directory", correct: true }
        ]  
      },

      {
        question: "<h1>What does git checkout do?</h1>",
        answers: [ 
            { text: "Checks git status", correct: false },
            { text: "Switches the git branch", correct: true },
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
        question: "<h1>for (i = 0; i < 7; i++) {Console.log(???I love coding???)} is an example of</h1>",
        answers: [
            { text: "A loop", correct: false },
            { text: "An iteration", correct: false },
            { text: "A for statement", correct: false },
            { text: "All of the above", correct: true }
        ]  
      },

      {
        question: "<h1>The CSS box model is compromised of...</h1>",
        answers: [
            { text: "Border, flex box, content, padding", correct: false },
            { text: "Margin, content, padding, border", correct: true },
            { text: "Margin, float, content, flex box", correct: false },
            { text: "Float, flex box, content, border", correct: false }
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

//Clicking the Start Quiz button will hide the home screen and reveal the questions to be asked by adding removing display: none style
var startGame = function () {
    homeScreen.setAttribute("class", "hide")
    displayedQuestions = questions
    questionIndex = 0
    questionScreen.removeAttribute("class", "hide")
    nextQuestion()
}

//Questions will come one after another in the order of the array
var nextQuestion = function () {
    reset()
    showQuestions(displayedQuestions[questionIndex]) 
}

//Questions will be printed to the question div in the index.html using inner.HTML
//A new button will be created for each answer choice ft. answer.text from the questions array...by way of a for each loop
var showQuestions = function (question) {
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
    
//The reset function will remove the appended answer options from the previous question so there are no extra options when the next question is up
var reset = function () {
    while (ansOptions.firstChild) {
        ansOptions.removeChild(ansOptions.firstChild)
    }
}

//This function will check if the answer is correct and will display the appropriate message. If there are no more questions the display message and question screen will be hidden, and the end screen revealed...or else move up the questions array.
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

//displayMessage will print correct or incorrect according to the answer selected. If incorrect it will also subtract 10 seconds from timeLeft.
var displayMessage = function (correctMessage, incorrectMessage, correct) {
    clearDisplayMessage(correctMessage, incorrectMessage) 
    if (correct) {
        correctMessage.removeAttribute("class", "hide")
    } else {
        incorrectMessage.removeAttribute("class", "hide")
        timeLeft -= 10
    } 
}

//This will clear previous message displays so the message is only printed once on the screen
var clearDisplayMessage = function (correctMessage, incorrectMessage) {
    correctMessage.setAttribute("class", "hide")
    incorrectMessage.setAttribute("class", "hide")
}

//Timer function + save stopped timer as score in local storage
var countdown = function () {
    timerEL = timer
    var timeInterval = setInterval(function() {
        if (timeLeft > 0 && endScreen.hasAttribute("class", "hide")) {
          timer.textContent = "Time:" + timeLeft
          timeLeft--;
        } else {
            clearInterval(timeInterval)
            clearDisplayMessage(correctMessage, incorrectMessage)
            questionScreen.setAttribute("class", "hide")
            endScreen.removeAttribute("class", "hide")
            localStorage.setItem("mostRecentScore", timeLeft)  
        }
      }, 1000)
}

startQuiz.addEventListener("click", startGame)
startQuiz.addEventListener("click", countdown)










 