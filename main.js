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
    },

    {
        num: 6,
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
        num: 7,
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
        num: 8,
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
        num: 9,
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
        num: 10,
        question:"Full meaning of CPU",
        answer:"Central Processing Unit",
        options:[
            "Central Power Unit",
            "Central Processing Utility",
            "Center Power Unit",
            "Central Processing Unit",
        ]
    },

    {
        num: 11,
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
        num: 12,
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
        num: 13,
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
        num: 14,
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
        num: 15,
        question:"Full meaning of CPU",
        answer:"Central Processing Unit",
        options:[
            "Central Power Unit",
            "Central Processing Utility",
            "Center Power Unit",
            "Central Processing Unit",
        ]
    },

    {
        num: 16,
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
        num: 17,
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
        num: 18,
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
        num: 19,
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
        num: 20,
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


let counter=0;
let numArray = [];
let userScore=0;
let totalQuestion = 5;


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


startNowBtn.onclick = function () {
    rulesPage.classList.add("hidden");
    questionPage.classList.remove("hidden");
    
    for (let i=0; numArray.length<totalQuestion; i++){
        let randomNumber = Math.floor(Math.random()*20);
        numArray.push(randomNumber);
        numArray = [...new Set(numArray)];
    }

    console.log("Start "+numArray);
    
    questionCounter(numArray[counter]);
}

// Question Page

function questionCounter(index){
    questionNo.innerHTML = questions[index].num;
    //questionNo.innerHTML = counter+1;
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
    if (counter<totalQuestion-1){
        counter++;
        questionCounter(numArray[counter]);
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
    //numArray.sort();
    numArray = numArray.sort((a, b) => 0.5 - Math.random());
    numArray.shift();
    numArray.shift();
    console.log("End "+numArray);
}


// Random Number

const random = document.getElementById("random-number");
const displayRandom = document.getElementById("number");

random.onclick = function (){
    let numArray=[];
    for (let i=0; numArray.length<totalQuestion; i++){
        let randomNumber = Math.floor(Math.random()*20);
        numArray.push(randomNumber);
        numArray = [...new Set(numArray)];
    }    
    console.log(numArray);
}

