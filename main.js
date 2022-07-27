// List of the questions

let questions = [
    {
        num: 1,
        question:"Who is the father of Computer?",
        answer:"Charles Babbage",
        options:[
            "Allen Turing",
            "Edward Robert",
            "Charles Babbage",
            "Albert Einstein",
        ]
    },

    {
        num: 2,
        question:"What does CSS stand for?",
        answer:"Cascading Style Sheets",
        options:[
            "CSS Style Sheet",
            "Cascading Style Sheets",
            "Complete Style Sheet",
            "Comparative Style Sheet",
        ]
    },

    {
        num: 3,
        question:"Full Meaning of HTML",
        answer:"Hypertext Markup Language",
        options:[
            "Hypertext Makeup Language",
            "Hydrotext Markup Language",
            "Hypertext Markup Language",
            "Hopetext Makeup Language",
        ]
    },

    {
        num: 4,
        question:"Which one is programming language ?",
        answer:"js",
        options:[
            "js",
            "English",
            "Hindi",
            "Urdu",
        ]
    },

    {
        num: 5,
        question:"Full meaning of CPU",
        answer:"Central Processing Unit",
        options:[
            "Central Power Unit",
            "Central Processing Utility",
            "Center Power Unit",
            "Central Processing Unit",
        ]
    }
]

// Const

const introPage = document.getElementById("quiz-intro");
const rulesPage = document.getElementById("rules");
const questionPage = document.getElementById("question");
const questionNo = document.getElementById("question_no");
const questionHTML = document.getElementById("question_html");
const questionOption = document.getElementById("question_option");
const result = document.getElementById("result");
const finalScore = document.getElementById("score");

const joinBtn = document.getElementById("join-button");
const goBackBtn = document.getElementById("go-back");
const startNowBtn = document.getElementById("start-now");
const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");



// Intro Page

joinBtn.onclick = function () {
    introPage.classList.add("hidden");
    rulesPage.classList.remove("hidden");
}


// Rules Page

goBackBtn.onclick = function () {
    introPage.classList.remove("hidden");
    rulesPage.classList.add("hidden");
}

let counter=0;

startNowBtn.onclick = function () {
    rulesPage.classList.add("hidden");
    questionPage.classList.remove("hidden");
    questionCounter(counter);
}

// Question Page

function questionCounter(index){
    questionNo.innerHTML = questions[index].num;
    questionHTML.innerHTML = questions[index].question;
    questionOption.innerHTML = '<div class="btn-option"><span>' + questions[index].options[0] + '</span></div>' 
    + '<div class="btn-option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="btn-option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="btn-option"><span>' + questions[index].options[3] + '</span></div>' ;

    const option = questionOption.querySelectorAll(".btn-option"); 
    for(let i=0; i<option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)"); 
    }
}

let userScore=0;

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[counter].answer;
    let allOptions = questionOption.children.length;

    if (userAns == correctAns){
        console.log("Answer Is Correct");
        answer.classList.add("bg-green-500");
        userScore++;
         
    }
    else{
        console.log("Answer Is Wrong");
        answer.classList.add("bg-red-500"); 
    }

    for(let i=0; i<allOptions; i++){
        questionOption.children[i].classList.add("pointer-events-none"); 
    }
}


nextBtn.onclick = function(){
    if (counter<questions.length-1){
        counter++;
        questionCounter(counter);
    }
    else {
        questionPage.classList.add("hidden");
        result.classList.remove("hidden");
        finalScore.innerHTML=userScore;
        counter=0;
    }
}

// Result

restartBtn.onclick = function(){
    introPage.classList.remove("hidden");
    result.classList.add("hidden");
    userScore=0;
}

