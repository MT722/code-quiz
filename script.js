let score = 0/5;
var first = document.getElementById("ans1")
var second = document.getElementById("ans2")
var third = document.getElementById("ans3")
var fourth = document.getElementById("ans4")
let questNum = 0;
var highScore = document.getElementById("view")
var start = document.getElementById("start")
var questions = [
    {
        question : "Commonly used datatypes do not include",
         ans1 : "strings",
         ans2 : "booleans",
         ans3 : "alerts",//right answer
         ans4 : "numbers",
    },
    {
        question : "What does CSS stand for?",
         ans1 : "Citrus Saphron Spice",//answer
         ans2 : "Course Salt Seasoning",
         ans3 : "Canned Salted Sardines",
         ans4 : "Cascading Style Sheets",
    },
    {
        question : "What are the main laguages of web development?",
         ans1 : "HTML, CSS, JavaScript",//answer
         ans2 : "Java",
         ans3 : "C++",
         ans4 : "Python",
    },
    {
        question : "What does 'full stack' mean?",
         ans1 : "A stack of pancakes",
         ans2 : "Relating to front and back end applications",//answer
         ans3 : "A stack of books",
         ans4 : "A stack of cups",
    }
    
]
//start the quiz

function startQuiz(){
    first.textContent = (questions[3].ans1);
    console.log('hello world');
    return 'hello world';
}
start.addEventListener('click', startQuiz());
// function ques1(){
    
// }



 