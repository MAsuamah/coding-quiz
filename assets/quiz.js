
var startQuiz = document.querySelector("#start");

var startGame = function () {
    var homeScreen = document.querySelector("#hide");
    homeScreen.remove();
    nextQuestion();
}

var nextQuestion = function () {

}


startQuiz.addEventListener("click", startGame);




 