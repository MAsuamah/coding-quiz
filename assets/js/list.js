//Reference for code https://www.youtube.com/watch?v=o3MF_JmQxYg&t=188s&ab_channel=JamesQQuick

var highScoresList = document.querySelector("#highScoresList")
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Retrieve scores array from local storage and return each as a list element to create the highscores page
highScoresList.innerHTML = highScores.map(score => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")



