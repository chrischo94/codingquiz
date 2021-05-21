var startButtonEl = document.querySelector(".startButton");
var viewHighscoresEl = document.querySelector(".viewHighscores");
var timerEl = document.querySelector(".timerCount");

var codingQuizEl = document.querySelector(".codingQuiz");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector(".answer");
var correct = false;
var timer;
var timerCount;

let questionList = [
    {
    "question": "", //q1
    "choices": {
        a:"",
        b:"",
        c:"",
        d:"",
        },
    "answer": "",
    },

    {
    "question": "", //q2
    "choices": {
        a:"",
        b:"",
        c:"",
        d:"",
        },
    "answer": "",
    },

    {
    "question": "", //q3
    "choices": {
        a:"",
        b:"",
        c:"",
        d:"",
        },
    "answer": "",
    },

    {
    "question": "", //q4
    "choices": {
        a:"",
        b:"",
        c:"",
        d:"",
        },
    "answer": "",
    },
    {
    "question": "", //q5
    "choices": {
        a:"",
        b:"",
        c:"",
        d:"",
        },
    "answer": "",
    },
    {
    "question": "", //q6
    "choices": {
        a:"",
        b:"",
        c:"",
        d:"",
        },
    "answer": "",
    },
]

function startGame() {
    isWin = false;
    timerCount = 70;
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        if (timerCount > 1) {
            timerCount--;
            timerEl.textContent = timerCount + " seconds remaining";
        }if (timerCount === 1){
            timerCount--;
            timerEl.textContent = timerCount + " second remaining";
          
        }else {
            clearInterval(timer);
            timerCount = 0;
            timerEl.textContent = "Time is up!"
            endQuiz();
        }
        }, 1000);
    }

function timeManager() {
    if (questionList.answer=true) {
        score += 1;
        timer += 3;
    }else {
        score -= 1;
        timer-= 5;
    }


function endQuiz() {
    timer = 0
}


startButtonEl.addEventListener("click", startGame)