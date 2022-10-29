// var tablebody = document.getElementById("tablebody")

// var a =[
//     {
//         name: "abid",
//         class: 12,
//         rollno:1000,
//         result:"pass",
//         marks:59
//     },
//     {
//         name: "ali",
//         class: 12,
//         rollno:1001,
//         result:"pass",
//         marks:70
//     },

//     {
//         name: "ahmed",
//         class: 12,
//         rollno:1002,
//         result:"pass",
//         marks:87
//     },
//     {
//         name: "asif",
//         class: 12,
//         rollno:1003,
//         result:"pass",
//         marks:78
//     },
//     {
//         name: "nawaz",
//         class: 12,
//         rollno:1004,
//         result:"fail",
//         marks:40
//     }
// ]

// for(var i=0 ; i< a.length; i++){
//     tablebody.innerHTML +=`<tr>
//     <td>${a[i].rollno}</td>
//     <td>${a[i].name}</td>
//     <td>${a[i].class}</td>
//     <td>${a[i].marks}</td>
//     <td>${a[i].result}</td>
// </tr>`
// }

var questions = [
  {
    question:
      "Html Stands For ________________________________________________________________________________________________________________________________________________________________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];

var currentquestion = document.getElementById("currentquestion");
var totalquestion = document.getElementById("totalquestion");
var question = document.getElementById("question");
var displayoption = document.getElementById("displayoption");
var index = 0;
var score=0;

function initrender() {
  displayoption.innerHTML = "";
  currentquestion.innerHTML = index + 1;
  totalquestion.innerHTML = questions.length;
  question.innerHTML = questions[index].question;

  for (let i = 0; i < questions[index].options.length; i++) {
    
    displayoption.innerHTML += `<div class="col-6 p-3">
        <button onclick(',')>${questions[index].options[i]}</button>
        </div>`;
  }
}

initrender();

function check (a,b){
    if(a==b){
        score++
    }
}


function next(){
    index++
    initrender()
    if(currentquestion.innerHTML== totalquestion.innerHTML){
        var next = document.getElementById("next")
        next.style.display="none"

    }
}
