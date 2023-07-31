// DOM Elements
var startButton = document.querySelector("#start"); 
var timerEl = document.querySelector("#time"); 
var questionsEl = document.querySelector("#questions"); 
var choicesEl = document.querySelector("#choices"); 
var initilsInput = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

//start work on quiz state varibles
var questionIndex = 0;
var time = questions.length * 15;
var timeId;

// create function to hide id : start-screen
function startQuiz (){
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    // un-hide question section
    questionsEl.removeAttribute("class");
    // start timer
    timerId = setInterval(clockTick, 1000);
    // text contect to show the starting time
    timerEl.textContent = time;

    //call get the questions to choose
    getQuestion();

};

// create function start choosing the questions
function getQuestion (){
    // question object from array
    var currentQuestion = questions[currentQuestionIndex]
    // title with current question 
    var questionEl = document.getElementById("question-title");
    questionElEl.textContent = currentQuestion.question;
    // clear out any old question choices
    choicesEl.innerHTML = "";
    //make a loop over choices
    currentQuestion.choices.forEach(function(choices, i){
        // create new button for each choice
        var choiceNode = document.createElement("button");
        //setting attribute class & value
        choiceNode.setAttribute("class","choice");
        choiceNode.setAttribute("value","choice");
        choiceNode.textContent = i + 1 + ". " + choice;

        // click event listener to each choice
        choiceNode.onclick = questionClick;

        //show on the page
        choicesEl.appendChild(choiceNode);
    });
}

// create function to check if user got wrong
function questionClick (){
    if (this.value !== questions[currentQuestionIndex].answer){
        time -= 15;
        if (time < 0){
            time = 0;
        }
    
    //show the new time on the page 
    timerEl.textContent = time;
    feedbackEl.textContent = "wrong!";
    feedbackEl.style.color = "orange";
    feedbackEl.style.fontSize = "300%";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "#563d7c";
        feedbackEl.style.fontSize = "300%";
    }
    // flash right/wrong feedback
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // time checker
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
};

// create function to stop the timer
function endQuiz(){
    clearInterval(timeId);
    // display end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

}