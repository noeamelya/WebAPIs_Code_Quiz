// create function to print highscores
function printHighscores() {
    //get scores from localstorage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // Show the score list on score board
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
      liTag.setAttribute("data-index", i);
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();



