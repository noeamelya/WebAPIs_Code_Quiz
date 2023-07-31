// DOM Elements
var startButton = document.querySelector("#start"); 
var timerEl = document.querySelector("#time"); // start timer
var questionsEl = document.querySelector("#questions"); // un-hide this section
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

// create function to start choose the questions
function getQuestion (){
    
}
