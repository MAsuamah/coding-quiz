var startQuiz = document.querySelector("#start");
var homeScreen = document.querySelector("#home");
var questionScreen = document.querySelector(".questions")

var startGame = function () {
    homeScreen.setAttribute("class", "hide")
    questionScreen.removeAttribute("class", "hide")
}


startQuiz.addEventListener("click", startGame);




 