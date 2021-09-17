let score = 0;
var first = document.getElementById("ans1")
var second = document.getElementById("ans2")
var third = document.getElementById("ans3")
var fourth = document.getElementById("ans4")
let questNum = 0;
var highScore = document.getElementById("view")
var start = document.getElementById("start")
var question = document.querySelector(".question")
var scores = document.querySelector(".scores")
var input = document.querySelector(".input")
var seconds = 10;
var time = document.getElementById("Timer");
var again = document.getElementById('tryAgain');
var card = document.querySelector('.card');
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
         ans1 : "Citrus Saphron Spice",
         ans2 : "Course Salt Seasoning",
         ans3 : "Canned Salted Sardines",
         ans4 : "Cascading Style Sheets",//answer
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
// question.style.display = 'none';
scores.style.display = 'none';
input.style.display = 'none';
//qustion functions

function ques1(){
    question.textContent = (questions[0].question);
    first.textContent = (questions[0].ans1);
    first.addEventListener("click", function(){
        ques2();
        console.log(score);
    });
    second.textContent = (questions[0].ans2);
    second.addEventListener("click", function(){
        ques2();
        console.log(score);
    });
    third.textContent = (questions[0].ans3);
    third.addEventListener("click", function(){
        score += 2;
        console.log(score);
        ques2();
    });
    fourth.textContent = (questions[0].ans4);
    fourth.addEventListener("click", function(){
        ques2();
        console.log(score);
    });
    
    
}

function ques2(){
    question.textContent = (questions[1].question);
    first.textContent = (questions[1].ans1);
    first.addEventListener("click", function(){
        ques3();
        console.log(score);
    });
    second.textContent = (questions[1].ans2);
    second.addEventListener("click", function(){
        ques3();
        console.log(score);
    });
    third.textContent = (questions[1].ans3);
    third.addEventListener("click", function(){
        ques3();
        console.log(score);
    });
    fourth.textContent = (questions[1].ans4);
    fourth.addEventListener("click", function(){
        score += 2;
        console.log(score);
        ques3();
    });
    
    
}

function ques3(){
    question.textContent = (questions[2].question);
    first.textContent = (questions[2].ans1);
    first.addEventListener("click", function(){
        score += 2;
        console.log(score);
        ques4();
    });
    second.textContent = (questions[2].ans2);
    second.addEventListener("click", function(){
        ques4();
        console.log(score);
    });
    third.textContent = (questions[2].ans3);
    third.addEventListener("click", function(){
        ques4();
        console.log(score);
    });
    fourth.textContent = (questions[2].ans4);
    fourth.addEventListener("click", function(){
        ques4();
        console.log(score);
    });
    
    
}

function ques4(){
    question.textContent = (questions[3].question);
    first.textContent = (questions[3].ans1);
    first.addEventListener("click", function(){
        console.log(score);
        card.style.display = 'none';
    });
    second.textContent = (questions[3].ans2);
    second.addEventListener("click", function(){
        score += 2;
        console.log(score);
        console.log('quiz over');
        card.style.display = 'none';
        scores.style.display = 'block';
        input.style.display = 'block';
        console.log('quiz over');
    });
    third.textContent = (questions[3].ans3);
    third.addEventListener("click", function(){
        console.log(score);
        card.style.display = 'none';
    });
    fourth.textContent = (questions[3].ans4);
    fourth.addEventListener("click", function(){
        console.log(score);
        
        
        card.style.display = 'none';
    });
    
    
}

function starter(){
    console.log('hello world');
    ques1();
    score = 0;
    seconds = 60;
}
start.addEventListener("click", function(){
    starter();
    start.style.display = "none";
});


again.addEventListener("click", function(){
    card.style.display = 'block';
    starter();
    scores.style.display = 'none';
    input.style.display = 'none';
   
});

 var timer = setInterval(function(){
    seconds--;
    time.textContent = "Time:" + seconds;
    if(seconds==0||seconds<0){
        clearInterval(timer);
    }
 },1000)