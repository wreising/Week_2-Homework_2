let questionText=[ "question 1 text",
"question 2 text",
"question 3 text",
"question 4 text",
"question 5 text",
"question 6 text",
"question 7 text",
"question 8 text",
"question 9 text"
] let answer1Text=[ "answer1 1 text",
"answer1 2 text",
"answer1 3 text",
"answer1 4 text",
"answer1 5 text",
"answer1 6 text",
"answer1 7 text",
"answer1 8 text",
"answer1 9 text"
] let answer2Text=[ "answer2 1 text",
"answer2 2 text",
"answer2 3 text",
"answer2 4 text",
"answer2 5 text",
"answer2 6 text",
"answer2 7 text",
"answer2 8 text",
"answer2 9 text"
] let answer3Text=[ "answer3 1 text",
"answer3 2 text",
"answer3 3 text",
"answer3 4 text",
"answer3 5 text",
"answer3 6 text",
"answer3 7 text",
"answer3 8 text",
"answer3 9 text"
] let answer4Text=[ "answer4 1 text",
"answer4 2 text",
"answer4 3 text",
"answer4 4 text",
"answer4 5 text",
"answer4 6 text",
"answer4 7 text",
"answer4 8 text",
"answer4 9 text"

] let answers= {
  q1: 3,
    q2: 2,
    q3: 3,
    q4: 4,
    q5: 4,
    q6: 1,
    q7: 3,
    q8: 2,
    q9: 2
}

let qNumber=1 // first question

let x=0 // starts at 0 for 1st question

const next=document.getElementById('nextQuestion'); // button for next

const start=document.getElementById('start');

const deduct=document.getElementById('deductTime');

function deductTime() {}

function nextQuestion() {
  // waits for button to be run
  document.getElementById("questionNumber").innerHTML="Question #"+qNumber;
  document.getElementById("question").innerHTML=questionText[x];
  document.getElementById("answer1").innerHTML=answer1Text[x];
  document.getElementById("answer2").innerHTML=answer2Text[x];
  document.getElementById("answer3").innerHTML=answer3Text[x];
  document.getElementById("answer4").innerHTML=answer4Text[x];
}

// I don't remeber where I got this countdown code from. I had a link for it, but can't find it anywhere.
// I heavily modified it. You can probably guess that it was meant as a countdown to a date, but any port in a storm.

// Set the date we're counting down to
var today=new Date();
var countDownDate=new Date(today.getTime() + (60 * 60 * 60 * 1000));

// const update = function () { // not sure why it's written with a const
// function start() {

function update() {
  nextQuestion() // Get today's date and time
  var now=new Date().getTime();

  // Find the distance between now and the count down date
  var distance=countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days=Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes=Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds=Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("start").innerHTML=days+"d "+hours+"h "
  +minutes+"m "+seconds+"s ";

  // If the count down is over, remove photo
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("start").innerHTML="Time is over.";
  }

  startThis()
}

// Update the count down every 1 second

function startThis() {
  var y=setInterval(update, 1000);
}

// }

next.addEventListener('click', ev=> {
    // listener for next
    x++;
    qNumber++ nextQuestion() // increases x and qNumber and then up to nextQuestion
  }

);

start.addEventListener('click', ev=> {
    // listener for next
    update(); // should start the timer?
  }

);

deduct.addEventListener('click', ev=> {
    // listener for next
    deductTime(); // should deduct
  }

);

// for some reason this can't call the update function in the start function
function deductTime() {
  countDownDate.setDate(countDownDate.getDate() - 1) update();
}









// Does not work - timer works, but not deduct

// Needs to have wrong answer deduct time - How?


// const deductTime = document.getElementById('deductTime')

// const timerElement = document.getElementById('timerCountDown');

// const next = document.getElementById('nextQuestion'); // button for next

// let timer;

// let deduct100 = false;

// timerElement.addEventListener('click', ev => { // timer button starts countdown and 1st question
//   startTimeCountDown();
//   nextQuestion(); // stars Q(1) and A[0]
// })

// deductTime.addEventListener('click', ev => { // listener for
//   deductTimeWrong();
// });

// next.addEventListener('click', ev => { // listener for next
//   x++;
//   qNumber++
//   nextQuestion() // increases x and qNumber and then up to nextQuestion
// });

// function startTimeCountDown() { // start the timer
//   timer = 1000; 
//   const timeCountdown = setInterval(countdown, 1000);
// }

// function deductTimeWrong() { // not working
//   deduct100 = true
// }

// function countdown() {
//   if (timer == 0) {
//     clearTimeout(timer);
//     timerElement.innerHTML = 'Start' // begining text
//   } else {
//     timerElement.innerHTML = timer + ' secs'; // timer injected to html
//     timer--;
//   } if (timer == 0) {
//     timerElement.innerHTML = "Time is up."; // end is injected to html
//   }
// }




// Timer that works

// const timerElement = document.getElementById('timerCountDown');
// let timer;

// function startTimeCountDown() {
//   timer = 10;
//   const timeCountdown = setInterval(countdown, 1000);
// }

// function countdown() {
//   if (timer == 0) {
//     clearTimeout(timer);
//     timerElement.innerHTML = 'Start'
//   } else {
//     timerElement.innerHTML = timer + ' secs';
//     timer--;
//   }
//   if (timer == 0) {
//     timerElement.innerHTML = "Time is up.";
//   }
// }

// timerElement.addEventListener('click', ev => {
//   startTimeCountDown();
// });