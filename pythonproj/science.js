const questions=[
    {
        question:"Who is the discoverer of the hydrogen?",
        answers:[
            {text: "Priestley", correct:false},
            {text: "Cavendish", correct:true},
            {text: "Ure", correct:false},
            {text: "Levizer", correct:false},
        ]
    },
    {
        question:"What is the maximum concentration limit of urea for spraying?",
        answers:[
            {text: "6%", correct:true},
            {text: "8%", correct:false},
            {text: "4%", correct:false},
            {text: "No such limit", correct:false},
        ]
    },
    {
        question:"What percentage of body weight of an adult human is contributed by muscles?",
        answers:[
            {text: "20-30%", correct:false},
            {text: "10-20%", correct:false},
            {text: "40-50%", correct:true},
            {text: "30-40%", correct:false},
        ]
    },
    {
        question:"Approximately, how many muscles are there in Human body?",
        answers:[
            {text: "206", correct:false},
            {text: "320", correct:false},
            {text: "554", correct:false},
            {text: "650", correct:true},
        ]
    },
    {
        question:"What is the most commonly found green house gas in the world ?",
        answers:[
            {text: "Water vapour", correct:true},
            {text: "Sulphur Dioxide", correct:false},
            {text: "Carbon dioxide", correct:false},
            {text: "Ozone", correct:false},
        ]
    },
    {
        question:"  Which of the following is not a traditional source of energy?",
        answers:[
            {text: "Natural Gas", correct:false},
            {text: "Mineral Oil", correct:false},
            {text: "Geothermal energy", correct:true},
            {text: "Coal", correct:false},
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
        question:"Which of these diseases is also known as 'encephalitis'?",
        answers:[
            {text: "Japanese encephalitis", correct:true},
            {text: "Tetanus", correct:false},
            {text: "Dengue", correct:false},
            {text: "Rabies", correct:false},
        ]
    },
    {
        question:"On what principle does the optical fibre work? ",
        answers:[
            {text: "Refraction", correct:false},
            {text: "Total internal refraction", correct:true},
            {text: "Interference", correct:false},
            {text: "Scattering", correct:false},
        ]
    },
    {
        question:"What is main ingredient of 'Bio Gas'?",
        answers:[
            {text: "Ethane", correct:false},
            {text: "Ammonia", correct:false},
            {text: "Methane", correct:true},
            {text: "Ethylene", correct:false},
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