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
        let suggestedAnswers = quiz.suggestedAnswer;
        question.innerHTML = quiz.question;
        currentQuiz.innerHTML = quiz.id;
        suggestedAnswers.forEach(({answer, label, isRight}, index) => {
            // answers[index].innerHTML = label + ": " + answer;
            answers[index].innerHTML = `${label}: ${answer}` ;
        });
    }

    //code
    showQuiz(quizIndex);

    suivant.addEventListener('click',()=> {
        quizIndex++;
        if (quizIndex == data.length-1) {
            suivant.disabled = true;
            suivant.style.cursor = "default";
            suivant.style.opacity = 0.5;
        }
        showQuiz(quizIndex);
    }); 

    reset.addEventListener('click',()=> {
        
        suivant.disabled = false;
        suivant.style.cursor = "pointer";
        suivant.style.opacity = 1;
        quizIndex = 0;
        showQuiz(quizIndex);
        score.innerHTML = "0";
        
    });

    
    console.log(data.length);
    total_quiz.innerHTML = data.length;
});
