var startButtonEl = document.querySelector(".startButton");
var viewHighscoresEl = document.querySelector(".viewHighscores");
var timerEl = document.querySelector(".timerCount");
var choiceOne, choiceTwo, choiceThree, choiceFour;

var codingQuizEl = document.querySelector(".codingQuiz");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector(".answer");

var timer = 90;
var timerCount;
var score = 0;

var questionCounter = 0;


var questionList = [
    {
    "question": "Which symbol is used to call an id from the HTML?", //q1
    "choices": {
        a:"#",
        b:".",
        c:"/",
        d:"*",
        },
    "answer": "a",
    },

    {
    "question": "Which of the following brackets are required for functions()?", //q2
    "choices": {
        a:"{}",
        b:"[]",
        c:"<>",
        d:"||",
        },
    "answer": "a",
    },

    {
    "question": "Which of the following languages is most commonly associated with 'styling' the webpage?", //q3
    "choices": {
        a:"HTML",
        b:"Javascript",
        c:"Css",
        d:"JQuery",
        },
    "answer": "c",
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

function resetTimer(){
    timerCount = 90;
}

function startTimer() {
    var timer = setInterval(function() {
        if (timerCount >= 1) {
            timerCount--;
            timerEl.textContent = timerCount + " seconds remaining";
            }else if (timerCount === 1){
                timerCount--;
                timerEl.textContent = timerCount + " second remaining";
            
            } else if (timerCount === 0) {
                clearInterval(timer)
                resetTimer();
            }
            else {
                clearInterval(timer);
                timerCount = 0;
                timerEl.textContent = "Time is up!"
                resetTimer();
            }
            }, 1000);
        }

    
function homeScreen() {
    score = 0;

}

function timeManager() {
    if (questionList.answer=true) {
        score += 1;
        timer += 3;
    }else {
        score -= 1;
        timer-= 5;
    }
}

function startQuiz() {
    startTimer();
    clearInterval(timer);
    if (questionCounter === 0) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 1) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 2) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 3) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 4) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 5) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 6) {
        choicesEl.innerHTML = "";
        createButton(questionList[questionCounter]);
        createListeners();
    } else {
        endGame();
    }
}
function endGame() {

createQuestion(questionObj){
    questionEl.innerHTML = questionObj.question
}


function createButton(obj){
    var answerOne = document.createElement("button");
    answerOne.textContent = "a) " +obj.answers["a"]
    answerOne.setAttribute("id", "a")
    choicesEl.appendChild(answerOne)
    firstChoice = choicesEl.querySelector("#a");

    var answerTwo = document.createElement("button");
    answerTwo.textContent = "a) " + obj.answers["a"]
    answerTwo.setAttribute("id", "a")
    choicesEl.appendChild(answerTwo)
    secondChoice = choicesEl.querySelector("#a");

    var answerThree = document.createElement("button");
    answerThree.textContent = "c) " + obj.answers["c"]
    answerThree.setAttribute("id", "c")
    choicesEl.appendChild(answerThree)
    thirdChoice = choicesEl.querySelector("#a");

    var answerFour = document.createElement("button");
    answerFour.textContent = "a) " + obj.answers["a"]
    answerFour.setAttribute("id", "a")
    choicesEl.appendChild(answerFour)
    fourthChoice = choicesEl.querySelector("#a");

    var answerFive = document.createElement("button");
    answerFive.textContent = "a) " + obj.answers["a"]
    answerFive.setAttribute("id", "a")
    choicesEl.appendChild(answerFive)
    fifthChoice = choicesEl.querySelector("#a");

    var answerSix = document.createElement("button");
    answerSix.textContent = "a) " + obj.answers["a"]
    answerSix.setAttribute("id", "a")
    choicesEl.appendChild(answerSix)
    sixthChoice = choicesEl.querySelector("#a");
}

function createListeners(){
    firstChoice.addEventListener("click", choiceOneSelected)
    secondChoice.addEventListener("click", choiceTwoSelected)
    thirdChoice.addEventListener("click", choiceThreeSelected)
    fourthChoice.addEventListener("click", choiceFourSelected)
}

function choiceOneSelected() {
    if ("a" === questionList[questionCounter].correctAnswer) {
        answerEl.innerHTML = "Correct";
        setTimeout(() => {
            
            questionCounter++;
            score += 5;
            startGame();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startGame();
            }, 1000);
        answerEl.innerHTML = "Correct"
}
}
function choiceTwoSelected() {
    if ("b" === questionList[questionCounter].correctAnswer) {
        answerEl.innerHTML = "Correct";
        setTimeout(() => {
            
            questionCounter++;
            score += 5;
            startGame();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startGame();
            }, 1000);
        answerEl.innerHTML = "Correct"
}
}
function choiceThreeSelected() {
    if ("c" === questionList[questionCounter].correctAnswer) {
        answerEl.innerHTML = "Correct";
        setTimeout(() => {
            
            questionCounter++;
            score += 5;
            startGame();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startGame();
            }, 1000);
        answerEl.innerHTML = "Correct"
}
}
function choiceFourSelected() {
    if ("d" === questionList[questionCounter].correctAnswer) {
        answerEl.innerHTML = "Correct";
        setTimeout(() => {
            
            questionCounter++;
            score += 5;
            startGame();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startGame();
            }, 1000);
        answerEl.innerHTML = "Correct"
}
}
startButtonEl.addEventListener("click", startGame)
