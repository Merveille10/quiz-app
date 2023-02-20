import {data} from "./data.js";
// Wait for page to load
window.addEventListener('load', ()=>{
    // Variables
    const currentQuiz = document.querySelector("#current_quiz");
    const question = document.querySelector("#question");
    const answers = document.querySelectorAll("#btn_a");
    const total_quiz = document.querySelector("#total_quiz");
    const suivant = document.querySelector("#suivant");
    const reset = document.querySelector(".icon");
    const score = document.querySelector("#score");


    let quizIndex = 0;
    let quiz = data[quizIndex];
    let suggestedAnswers = quiz.suggestedAnswer;
    
     
    
    
    
    // functions
   
   const showQuiz=(quizIndex)=>{
        quiz = data[quizIndex];
        suggestedAnswers = quiz.suggestedAnswer;
        question.innerHTML = quiz.question;
        currentQuiz.innerHTML = quiz.id;
        suggestedAnswers.forEach(({answer, label, isRight}, index) => {
            // answers[index].innerHTML = label + ": " + answer;
            answers[index].innerHTML = `${label}: ${answer}`;
            if (isRight) {
                answers[index].addEventListener('click', ()=>{
                    answers[index].classList.add("answer_good");
                })
            }
            else{
                 answers[index].addEventListener('click', ()=>{
                    answers[index].classList.add("answer_wrong");
                })
            }
            
        });
    };

    
    /*const typeAnswer=(quizIndex)=>{
        quiz = data[quizIndex];
        suggestedAnswers = quiz.suggestedAnswer;
        suggestedAnswers.forEach(({answer, label, isRight}, index) => {
            if (isRight) {
                answers[index].addEventListener('click', ()=>{
                    answers[index].classList.add("answer_good");
                })
            }
            else{
                answers[index].addEventListener('click', ()=>{
                answers[index].classList.add("answer_wrong");
                })
            }    
        })
    }*/

    //code
    showQuiz(quizIndex);
    /*typeAnswer(quizIndex);*/
   

    suivant.addEventListener('click',()=> {
        quizIndex++;
        quiz = data[quizIndex];
        suggestedAnswers = quiz.suggestedAnswer;
        suggestedAnswers.forEach(({answer, label, isRight}, index) => {
            answers[index].classList.remove("answer_good");
            answers[index].classList.remove("answer_wrong");
        });
        if (quizIndex == data.length-1) {
            suivant.disabled = true;
            suivant.style.cursor = "default";
            suivant.style.opacity = 0.5;
        }
        showQuiz(quizIndex);
        /*typeAnswer(quizIndex);*/
    }); 

    reset.addEventListener('click',()=> {
        
        suivant.disabled = false;
        suivant.style.cursor = "pointer";
        suivant.style.opacity = 1;
        quizIndex = 0;
        showQuiz(quizIndex);
        typeAnswer(quizIndex);
        score.innerHTML = "0";
        quiz = data[quizIndex];
        suggestedAnswers = quiz.suggestedAnswer;
        suggestedAnswers.forEach(({answer, label, isRight}, index) => {
            answers[index].classList.remove("answer_good");
            answers[index].classList.remove("answer_wrong");
        });
        
    });

    
    console.log(data.length);
    total_quiz.innerHTML = data.length;
});
