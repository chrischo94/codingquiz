var startQuizBtn = document.querySelector(".start-quiz");
var viewHighscoresEl = document.querySelector(".viewHighscores");
var timerEl = document.querySelector(".timer");
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
    timer = 90;
}

function startTimer() {
    var timer = setInterval(function() {
        if (timer >= 1) {
            timer--;
            timerEl.textContent = timer + " seconds remaining";
            }else if (timer === 1){
                timer--;
                timerEl.textContent = timer + " second remaining";
            
            } else if (timer === 0) {
                clearInterval(startTimer)
                endQuiz();
            }
            else {
                clearInterval(startTimer);
                timer = 0;
                timerEl.textContent = "Time is up!"
                endQuiz();
            }
            }, 1000);
        }

    
function homeScreen() {
    score = 0;
    questionEl.innerHTML = "<h1>Coding Quiz </h1>"
    choicesEl.innerHTML =
        "<h2> Answer the following questions before time expires!"
        "<br><button class='start-quiz' type='button'>Start Quiz</button>"
    startQuizBtn = document.querySelector(".start-quiz")
    startQuizBtn.addEventListener("click", startQuiz)
    startQuizBtn.addEventListener("click", resetTimer)
}

function startQuiz() {
    startTimer();
    if (questionCounter === 0) {
        choicesEl.innerHTML = "";
        createQuestion(questionList[questionCounter])
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 1) {
        choicesEl.innerHTML = "";
        createQuestion(questionList[questionCounter])
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 2) {
        choicesEl.innerHTML = "";
        createQuestion(questionList[questionCounter])
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 3) {
        choicesEl.innerHTML = "";
        createQuestion(questionList[questionCounter])
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 4) {
        choicesEl.innerHTML = "";
        createQuestion(questionList[questionCounter])
        createButton(questionList[questionCounter]);
        createListeners();
    } else if (questionCounter === 5) {
        choicesEl.innerHTML = "";
        createQuestion(questionList[questionCounter])
        createButton(questionList[questionCounter]);
        createListeners();
    
    } else {
        endGame();
    }
}
function endGame() {
    questionCounter = 0
    timer = 0
    questionEl.innerHTML = "<h1> Finished! </h1>"
}

function createQuestion(questionObj) {
    questionEl.innerHTML = questionObj.question
}

function createButton(obj){
    var answerOne = document.createElement("button");
    answerOne.textContent = "a) " +obj.answers["a"]
    answerOne.setAttribute("id", "a")
    choicesEl.appendChild(answerOne)
    firstChoice = choicesEl.querySelector("#a");

    var answerTwo = document.createElement("button");
    answerTwo.textContent = "b) " + obj.answers["b"]
    answerTwo.setAttribute("id", "b")
    choicesEl.appendChild(answerTwo)
    secondChoice = choicesEl.querySelector("#b");

    var answerThree = document.createElement("button");
    answerThree.textContent = "c) " + obj.answers["c"]
    answerThree.setAttribute("id", "c")
    choicesEl.appendChild(answerThree)
    thirdChoice = choicesEl.querySelector("#c");

    var answerFour = document.createElement("button");
    answerFour.textContent = "d) " + obj.answers["d"]
    answerFour.setAttribute("id", "d")
    choicesEl.appendChild(answerFour)
    fourthChoice = choicesEl.querySelector("#d");

    // var answerFive = document.createElement("button");
    // answerFive.textContent = "a) " + obj.answers["a"]
    // answerFive.setAttribute("id", "a")
    // choicesEl.appendChild(answerOne)
    // fifthChoice = choicesEl.querySelector("#a");

    // var answerSix = document.createElement("button");
    // answerSix.textContent = "a) " + obj.answers["a"]
    // answerSix.setAttribute("id", "a")
    // choicesEl.appendChild(answerTwo)
    // sixthChoice = choicesEl.querySelector("#a");
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
            startQuiz();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startQuiz();
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
            startQuiz();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startQuiz();
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
            startQuiz();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startQuiz();
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
            startQuiz();
        }, 1000);
        
    }else {
            answerEl.innterHTML = "Incorrect"
            setTimeout(() => {
                score -= 5;
                timer -= 10;
                startQuiz();
            }, 1000);
        answerEl.innerHTML = "Correct"
}
}
homeScreen();
