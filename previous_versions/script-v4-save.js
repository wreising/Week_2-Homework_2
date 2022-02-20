let qNumber = 1 // first question
let x = 0 // starts at 0 for 1st question
let answerGiven
let trueAnswer
let questionNumber = 1
let anum = 1
let numCorrect = 0
let numWrong = 0
let isFinished = false
let highScoreSaved = localStorage.getItem("highCorrect")
const next = document.getElementById('nextQuestion'); // button for next
const start = document.getElementById('start'); // button to start quiz
const deduct = document.getElementById('deductTime'); // button to deduct time
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const cardBody = document.getElementById("card-body")
const saveBox = document.getElementById("saveBox")
const right = document.getElementById("right")
const wrong = document.getElementById("wrong")
const nextDiv = document.getElementById("nextDiv")
const highScoreBox = document.getElementById("highScoreBox")
const rightBox = document.getElementById("rightBox")
const wrongBox = document.getElementById("wrongBox")

function nextQuestion() { // first fires when the start button is pressed
  document.getElementById("questionNumber").innerHTML = "Question #" + qNumber;
  document.getElementById("question").innerHTML = questionText[x];
  document.getElementById("answer1").innerHTML = answer1Text[x];
  document.getElementById("answer2").innerHTML = answer2Text[x];
  document.getElementById("answer3").innerHTML = answer3Text[x];
  document.getElementById("answer4").innerHTML = answer4Text[x];
}

answer1.addEventListener('click', ev => {
  answerGiven = 1
  buttonChange = document.getElementById("answer1")
  checkAnswer(); // check answer
});

answer2.addEventListener('click', ev => {
  answerGiven = 2
  buttonChange = document.getElementById("answer2")
  checkAnswer(); // check answer
});

answer3.addEventListener('click', ev => {
  // document.getElementById('answer2').classList.remove('btn-dark');
  // document.getElementById('answer2').classList.add('btn-light');
  answerGiven = 3
  buttonChange = document.getElementById("answer3")
  checkAnswer(); // check answer
});

answer4.addEventListener('click', ev => {
  // document.getElementById('answer2').classList.remove('btn-dark');
  // document.getElementById('answer2').classList.add('btn-light');
  answerGiven = 4
  buttonChange = document.getElementById("answer4")
  checkAnswer(); // check answer
});

function checkAnswer() {
  if (answers[anum] == answerGiven) {
    buttonChange.classList.remove('btn-dark');
    buttonChange.classList.add('btn-primary');
    numCorrect++
  } else {
    buttonChange.classList.remove('btn-dark');
    buttonChange.classList.add('btn-danger');
    numWrong++
    deductTime()
  }
}

function finished() {
  document.getElementById("title").innerHTML = "Quiz Complete!"
  document.getElementById("card-body").innerHTML = "You got " + numCorrect + " Correct and " + numWrong + " Incorrect."
  cardBody.setAttribute("style", "text-align: center")
  next.style.display = "none";
  rightBox.style.display = "none";
  wrongBox.style.display = "none";
  nextDiv.style.display = "none";
  saveBox.style.display = "inline";
  highScoreBox.style.display = "block";
  document.getElementById("highScoreD").innerHTML = highScoreSaved
}

function saveScore() {
  initials = prompt("What are your initials?")
  localStorage.setItem("initials", initials);
  localStorage.setItem("right", numCorrect);
  localStorage.setItem("wrong", numWrong);
  if (highScoreSaved < numCorrect) {
    localStorage.setItem("highCorrect", numCorrect);
    document.getElementById("highScoreD").innerHTML = numCorrect
  } else {
    document.getElementById("highScoreD").innerHTML = highScoreSaved
  }
}


// Still don't have the deduct time portion working right. Need it to take seconds away, not days.
// ___________________________________________________________________
// Timer Function

// I don't remeber where I got this countdown code from. I had a link for it, but can't find it anywhere.
// I heavily modified it. You can probably guess that it was meant as a countdown to a date, but any port in a storm.

var today = new Date(); // Set the date we're counting down to
var countDownDate = new Date(today.getTime() + (60 * 60 * 60 * 1000));

function startThis() {
  let y = setInterval(update, 1000); // Update the count down every 1 second
}

function update() {

  nextQuestion()

  var now = new Date().getTime(); // Get today's date and time

  var distance = countDownDate - now; // Find the distance between now and the count down date

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="start"
  document.getElementById("start").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down reaches zero display message
  if (distance < 0) {
    clearInterval(y);
    finished()
    document.getElementById("start").innerHTML = "Time is up.";
  }
  startThis() // loop back to what starts update
}


// ____________________________________________________
// Event listeners

next.addEventListener('click', ev => { // listener for next
  document.getElementById("right").innerHTML = numCorrect
  document.getElementById("wrong").innerHTML = numWrong
  anum++
  x++
  qNumber++
  document.getElementById('answer1').classList.remove('btn-danger');
  document.getElementById('answer1').classList.remove('btn-primary');
  document.getElementById('answer1').classList.add('btn-dark');
  document.getElementById('answer2').classList.remove('btn-danger');
  document.getElementById('answer2').classList.remove('btn-primary');
  document.getElementById('answer2').classList.add('btn-dark');
  document.getElementById('answer3').classList.remove('btn-danger');
  document.getElementById('answer3').classList.remove('btn-primary');
  document.getElementById('answer3').classList.add('btn-dark');
  document.getElementById('answer4').classList.remove('btn-danger');
  document.getElementById('answer4').classList.remove('btn-primary');
  document.getElementById('answer4').classList.add('btn-dark');
  if (qNumber > 9) {
    finished()
  } else {
    nextQuestion() // increases anum and qNumber and then onto nextQuestion
  }
});

start.addEventListener('click', ev => { // listener for next
  update(); // starts the timer
});

saveBox.addEventListener('click', ev => { // listener for next
  saveScore(); // show the save button
});

// deduct.addEventListener('click', ev => { // listener for next
//   deductTime(); // deducts time
// });

function deductTime() { // function to deduct time - still don't know how to adjust this properly
  countDownDate.setDate(countDownDate.getDate() - 1)
  update();
}

let questionText = [
  "What is the standard 'Primary' color for Bootstrap?",
  "What is contained in an Object?",
  "question 3 text",
  "question 4 text",
  "question 5 text",
  "question 6 text",
  "question 7 text",
  "question 8 text",
  "question 9 text"
]

let answer1Text = [
  "Red",
  "value, 'Key'",
  "answer1 3 text",
  "answer1 4 text",
  "answer1 5 text",
  "answer1 6 text",
  "answer1 7 text",
  "answer1 8 text",
  "answer1 9 text"
]

let answer2Text = [
  "Green",
  "'Key', value",
  "answer2 3 text",
  "answer2 4 text",
  "answer2 5 text",
  "answer2 6 text",
  "answer2 7 text",
  "answer2 8 text",
  "answer2 9 text"
]

let answer3Text = [
  "Blue",
  "'value', 'Key'",
  "answer3 3 text",
  "answer3 4 text",
  "answer3 5 text",
  "answer3 6 text",
  "answer3 7 text",
  "answer3 8 text",
  "answer3 9 text"
]

let answer4Text = [
  "Yellow",
  "value, Key",
  "answer4 3 text",
  "answer4 4 text",
  "answer4 5 text",
  "answer4 6 text",
  "answer4 7 text",
  "answer4 8 text",
  "answer4 9 text"
]

let answers = {
  1: 3,
  2: 2,
  3: 3,
  4: 4,
  5: 4,
  6: 1,
  7: 3,
  8: 2,
  9: 2
}