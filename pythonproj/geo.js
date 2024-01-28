const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct:false},
            {text: "Blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text: "Kalahari", correct:false},
            {text: "Gobi", correct:false},
            {text: "Sahara", correct:false},
            {text: "Antartica", correct:true},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text: "Vatican city", correct:true},
            {text: "Bhutan", correct:false},
            {text: "Nepal", correct:false},
            {text: "Sri Lanka", correct:false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text: "Asia", correct:false},
            {text: "Australia", correct:true},
            {text: "Arctic", correct:false},
            {text: "Africa", correct:false},
        ]
    },
    {
        question:"Which of the following is the largest river of peninsular India?",
        answers:[
            {text: "Mahanadhi", correct:false},
            {text: "Narmada", correct:false},
            {text: "Godavari", correct:true},
            {text: "kaveri", correct:false},
        ]
    },
    {
        question:"Which of the following mountains are the oldest according to geological history?",
        answers:[
            {text: "Nilgiris", correct:false},
            {text: "Satpura Range", correct:false},
            {text: "Vindhiyas", correct:false},
            {text: "Aravalli", correct:true},
        ]
    },
    {
        question:"What is the percentage of irrigated land in India?",
        answers:[
            {text: "45", correct:false},
            {text: "65", correct:false},
            {text: "35", correct:true},
            {text: "25", correct:false},
        ]
    },
    {
        question:"What is the percentage of the earth surface covered by India?",
        answers:[
            {text: "2.4", correct:true},
            {text: "3.4", correct:false},
            {text: "4.4", correct:false},
            {text: "5.4", correct:false},
        ]
    },
    {
        question:"Where is India's highest annual rainfall is reported? ",
        answers:[
            {text: "Namachi,Sikkim", correct:false},
            {text: "Churu,Rajasthan", correct:false},
            {text: "Mawsynram,Meghalaya", correct:true},
            {text: "Chama,Himachal Pradesh", correct:false},
        ]
    },
    {
        question:"Which state is having a largest area of forest cover in India?",
        answers:[
            {text: "Arunachal Pradesh", correct:false},
            {text: "Haryana", correct:false},
            {text: "Madhya Pradesh", correct:true},
            {text: "Assam", correct:false},
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