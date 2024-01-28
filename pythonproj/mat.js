const questions=[
    {
        question:"How many months make a Century?",
        answers:[
            {text: "12", correct:false},
            {text: "120", correct:false},
            {text: "1200", correct:true},
            {text: "12000", correct:false},
        ]
    },
    {
        question:"Whon is the Father of Cryptology?",
        answers:[
            {text: "Leon Battista", correct:true},
            {text: "Giuseppe Peano", correct:false},
            {text: "Arnold Sommerfeld", correct:false},
            {text: "Willam Oughtred", correct:false},
        ]
    },
    {
        question:"Where did the 'Magic Square originate'?",
        answers:[
            {text: "Ancient China", correct:true},
            {text: "Ancient Nepal", correct:false},
            {text: "Ancient India", correct:false},
            {text: "Ancient Japan", correct:false},
        ]
    },
    {
        question:"Who is the 'Father of Mathematics?",
        answers:[
            {text: "Giuseppe Peano", correct:false},
            {text: "Ramanujam", correct:false},
            {text: "Archimedes", correct:true},
            {text: "Aryabhatta", correct:false},
        ]
    },
    {
        question:" Find the missing number in the series 5, 10, 17, _, 37, 50, 65, 82?",
        answers:[
            {text: "26", correct:true},
            {text: "21", correct:false},
            {text: "28", correct:false},
            {text: "23", correct:false},
        ]
    },
    {
        question:"Which number does not have a Reciprocal? ",
        answers:[
            {text: "-1", correct:false},
            {text: "0", correct:true},
            {text: "1", correct:false},
            {text: "None of these", correct:false},
        ]
    },
    {
        question:"If one number is thrice the other and their sum is 24, then the numbers are _________.",
        answers:[
            {text: "4,12", correct:false},
            {text: "6,15", correct:false},
            {text: "3,9", correct:false},
            {text: "None of these", correct:true},
        ]
    },
    {
        question:"A clock strikes once at 1 o’clock, twice at 2 o’clock, thrice at 3 o’clock and so on. How many times will it strike in 24 hours?",
        answers:[
            {text: "78", correct:false},
            {text: "136", correct:false},
            {text: "156", correct:true},
            {text: "196", correct:false},
        ]
    },
    {
        question:" Calculate the Rate of Interest for a certain sum of money that becomes 5 times its principal Amount in 10 years? ",
        answers:[
            {text: "40%", correct:true},
            {text: "30%", correct:false},
            {text: "20%", correct:false},
            {text: "10%", correct:false},
        ]
    },
    {
        question:"What is the average of first 50 natural numbers?",
        answers:[
            {text: "25.30", correct:false},
            {text: "25.0", correct:false},
            {text: "25.5", correct:true},
            {text: "12.25", correct:false},
        ]
    },
] ;

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=="true"){        
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML='You have scored ' +score+ ' out of '+questions.length +' ! ';
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();