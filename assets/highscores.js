var username = document.querySelector("#username")
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var highScore = document.querySelector("#score");
var mostRecentScore = localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var maxHighScores = 5


highScore.innerText = "Your final score is " + mostRecentScore;

saveHighScore = e => {
  console.log("clicked!")
  e.preventDefault()

  var scores = {
    score: mostRecentScore,
    name: username.value
  }

  highScores.push(scores)

  highScores.sort((a,b) => b.score - a.score)

  highScores.splice(5)

  localStorage.setItem("highScores", JSON.stringify(highScores))

}





  
