const correctAnswer =["A","C","D","C","D"]
const form = document.querySelector(".quiz-form");
const result =document.querySelector(".result");
const questions =document.querySelectorAll(".question");

//console.log(questions[1]);

form.addEventListener("submit", event =>{
    event.preventDefault();
 
let score =0;
const userAnswer =[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value ]
userAnswer.forEach((answer,index) => {
    if (answer === correctAnswer[index]){
        //console.log("correct Answer",index)
        score = score + 1;
        questions[index].classList.add("correct");//apply css colcor 
    }else {
        questions[index].classList.add("wrong");
    }
})
//console.log(score);
scrollTo(0,0)
result.classList.remove("hide");
result.querySelector("p").textContent = `You have Score ${score}/5!`
})