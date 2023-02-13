import {data} from "./data.js";
// Wait for page to load
window.addEventListener('load', ()=>{
    // We will write all the content here
    document.getElementById("question").innerHTML = firstelt['question'];
    // Variables
    const firstelt = data[0];
    console.log(data.length);
    const total_quiz = document.querySelector('#total_quiz');

    total_quiz.innerHTML = data.length;

    //Functions
});
