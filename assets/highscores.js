//Reference for code https://www.youtube.com/watch?v=DFhmNLKwwGw&ab_channel=JamesQQuick
var username = document.querySelector("#username")
var saveScoreBtn = document.querySelector("#saveScoreBtn")
var highScore = document.querySelector("#score")

saveHighScore = e => {

  var mostRecentScore = localStorage.getItem("mostRecentScore")

  //If there are no available high scores in local storage return an empty array

  var highScores = JSON.parse(localStorage.getItem("highScores")) || []

  //When save is clicked most recent score will be visible

  highScore.innerText = "Your final score is " + mostRecentScore

  e.preventDefault()

  //When the save button is clicked score and name will be saved as objects in the highScores array

  var score = {
    score: mostRecentScore,
    name: username.value
  }
    
  //New scores will be pushed into the highScores array

  highScores.push(score)

  //High scores will be sorted from highest to lowest

  highScores.sort((a, b) => b.score - a.score)

  //Max amount of high scores displayed will be 5 

  highScores.splice(5)

  //Displays scores and usernames as a string

  localStorage.setItem("highScores", JSON.stringify(highScores))

}






  
