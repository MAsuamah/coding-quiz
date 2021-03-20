var submitScore = document.querySelector("#submit")
var nameInput = document.querySelector("#player")

var finalScore = function() {
  var score = timeLeft
  highScore.innerHTML = "Your final score is " + score
  
  var saveScore = function () {
     var mostRecentScore = score
     var name = document.querySelector("#player").value
     

  }
  
  submitScore.addEventListener("click", saveScore)


}  