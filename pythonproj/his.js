const questions=[
    {
        question:"The Battle of Plassey was fought in",
        answers:[
            {text: "1757", correct:true},
            {text: "1748", correct:false},
            {text: "1782", correct:false},
            {text: "1764", correct:false},
        ]
    },
    {
        question:"Who served as the first Deputy Prime Minister of independent India ? ",
        answers:[
            {text: "K.Kamaraj", correct:false},
            {text: "Sardar Vallabhbhai Patel", correct:true},
            {text: "C.Rajagopalachari", correct:false},
            {text: "Moraji Desai", correct:false},
        ]
    },
    {
        question:"Who was the first Governor- General of India?",
        answers:[
            {text: "Lord William Bentick", correct:true},
            {text: "Warren Hastings", correct:false},
            {text: "Lord Canning", correct:false},
            {text: "Lord Mountbatten", correct:false},
        ]
    },
    {
        question:"Who was also known as 'The Light of Asia'?",
        answers:[
            {text: "Rumi", correct:false},
            {text: "Buddha", correct:true},
            {text: "Gandhi", correct:false},
            {text: "Swami vivekananda", correct:false},
        ]
    },
    {
        question:"India's first mission to the moon was launched in which year?",
        answers:[
            {text: "1969", correct:false},
            {text: "2008", correct:true},
            {text: "1998", correct:false},
            {text: "2005", correct:false},
        ]
    },
    {
        question:" Which Rajput dynasty did not surrender to Akbar?",
        answers:[
            {text: "Parmar dynasty", correct:false},
            {text: "Chauhan dynasty", correct:false},
            {text: "Chandela dynasty", correct:false},
            {text: "Sisodia dynasty", correct:true},
        ]
    },
    {
        question:"Who was adorned with the title of 'Jarikalam' by Emperor Akbar?",
        answers:[
            {text: "Muhammed Khan", correct:false},
            {text: "Mir Syed Ali", correct:false},
            {text: "Abdusamad", correct:false},
            {text: "Muhammed Hussain", correct:true},
        ]
    }, 
    {
        question:"What was the real name of Chanakya?",
        answers:[
            {text: "Vishnu Gupta", correct:true},
            {text: "Ramatanu Mishra", correct:false},
            {text: "Kautilya", correct:false},
            {text: "None of these", correct:false},
        ]
    }, 
    {
        question:" Which was the first National News Agency of India?",
        answers:[
            {text: "The Free Press of India", correct:true},
            {text: "The Asoociated Press of India", correct:false},
            {text: "The Indian Review", correct:false},
            {text: "None of the Above", correct:false},
        ]
    }, 
    {
        question:"When did the Chola Empire of the South emerged?",
        answers:[
            {text: "9th Century BC", correct:false},
            {text: "19th Century BC", correct:false},
            {text: "9th Century AD", correct:true},
            {text: "17th Century Ad", correct:false},
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