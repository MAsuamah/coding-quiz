//Reference for code https://www.youtube.com/watch?v=DFhmNLKwwGw&ab_channel=JamesQQuick

var username = document.querySelector("#username")
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var highScore = document.querySelector("#score");
var mostRecentScore = localStorage.getItem("mostRecentScore");

//If there are no available highscores in local storage return an empty array
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Highscore page will only show a max of 5 scores
var maxHighScores = 5


highScore.innerText = "Your final score is " + mostRecentScore;

//When the save button is clicked score and name will be saved as key-value pairs in the highScores array
saveHighScore = e => {
  e.preventDefault()

  var score = {
    score: mostRecentScore,
    name: username.value
  }

  highScores.push(score)

  highScores.sort((a,b) => b.score - a.score)

  highScores.splice(5)

  localStorage.setItem("highScores", JSON.stringify(highScores))

}







  
