// Javascript file (script.js) for the Javascript Quiz Project

// variables
// ____________________________________________________

let q = 1 // first question
let x = 0 // starts at 0 for 1st question/answer
let answerGiven // user selection
let trueAnswer // from answer key
let questionNumber = 1 // for the headings
let z = 1 // for the answer key
let numCorrect = 0 // starting
let numWrong = 0 // starting
let highScoreSaved = localStorage.getItem("highCorrect") // retreive from local storage
let previousInitialsStored = localStorage.getItem("initials") // retreive from local storage
let previousRightStored = localStorage.getItem("right") /// retreive from local storage
let previousWrongStored = localStorage.getItem("wrong") // retreive from local storage
const next = document.getElementById('nextQuestion'); // button for next
const start = document.getElementById('start'); // button to start quiz
const deduct = document.getElementById('deductTime'); // button to deduct time
const answer1 = document.getElementById('answer1'); // button
const answer2 = document.getElementById('answer2'); // button
const answer3 = document.getElementById('answer3'); // button
const answer4 = document.getElementById('answer4'); // buton
const cardBody = document.getElementById("card-body") // location of final tally
const saveBox = document.getElementById("saveBox") // save button
const playAgain = document.getElementById("playAgain") // play again button
const right = document.getElementById("right") // display numCorrect
const wrong = document.getElementById("wrong") // display numIncorrect
const nextDiv = document.getElementById("nextDiv") // to hide next question button
const highScoreBox = document.getElementById("highScoreBox") // display current/new high score div
const rightBox = document.getElementById("rightBox") // running tally
const wrongBox = document.getElementById("wrongBox") // running tally
const newHighScoreText = document.getElementById("newHighScoreText") // display current/new for high score
const previousInitials = document.getElementById("previousInitials") // from local storage
const previousRight = document.getElementById("previousRight") // from local storage
const previousWrong = document.getElementById("previousWrong") // from local storage

// functions
// ____________________________________________________

onload = previousPlayer // loads stats of previous plater from local storage

function nextQuestion() { // first fires when the start button is pressed
  document.getElementById("questionNumber").innerHTML = "Question #" + q;
  document.getElementById("question").innerHTML = questionText[x];
  document.getElementById("answer1").innerHTML = answer1Text[x];
  document.getElementById("answer2").innerHTML = answer2Text[x];
  document.getElementById("answer3").innerHTML = answer3Text[x];
  document.getElementById("answer4").innerHTML = answer4Text[x];
}

function previousPlayer() { // function for loading previous player
  document.getElementById("previousInitials").innerHTML = previousInitialsStored
  document.getElementById("previousRight").innerHTML = previousRightStored
  document.getElementById("previousWrong").innerHTML = previousWrongStored
}

function checkAnswer() { // called on answer choice click -> goes to pause function to give time for the slection to change color
  if (answers[z] == answerGiven) {
    answerKey.classList.remove('btn-dark');
    answerKey.classList.add('btn-primary');
    numCorrect++
    pause5()
  } else {
    answerKey.classList.remove('btn-dark');
    answerKey.classList.add('btn-danger');
    numWrong++
    deductTime() // deducts 5 seconds from time remaining
    pause5()
  }
}

function readyNext() { // clears everything out for the next question and incriments z, x, and q
  document.getElementById("right").innerHTML = numCorrect
  document.getElementById("wrong").innerHTML = numWrong
  z++
  x++
  q++
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
  if (q > 9) {
    finished()
  } else {
    nextQuestion()
  }
}

function finished() { // changes contents of the page to Quiz Complete
  document.getElementById("title").innerHTML = "Quiz Complete!"
  document.getElementById("card-body").innerHTML = "You got " + numCorrect + " Correct and " + numWrong + " Incorrect."
  cardBody.setAttribute("style", "text-align: center")
  next.style.display = "none";
  rightBox.style.display = "none";
  wrongBox.style.display = "none";
  nextDiv.style.display = "none";
  saveBox.style.display = "inline";
  playAgain.style.display = "inline";
  highScoreBox.style.display = "block";
  timeleft = 0 // set to 0 in case time hasn't actually run out so the timer stops and shows Finished
  if (highScoreSaved < numCorrect) { // highScoreSaved from local storage
    document.getElementById("newHighScoreText").innerHTML = "New"
    document.getElementById("highScoreD").innerHTML = numCorrect
  } else {
    document.getElementById("newHighScoreText").innerHTML = "Previous"
    document.getElementById("highScoreD").innerHTML = highScoreSaved
  }
}

function saveScore() { // saves score and initials to local storage - will override previous values
  initials = prompt("What are your initials?")
  localStorage.setItem("initials", initials);
  localStorage.setItem("right", numCorrect);
  localStorage.setItem("wrong", numWrong);
  if (highScoreSaved < numCorrect) {
    localStorage.setItem("highCorrect", numCorrect);
    document.getElementById("highScoreD").innerHTML = numCorrect
  }
}

// Timer Function
// ____________________________________________________
// With code from https://stackoverflow.com/a/31106229/17557927

let timeleft = 0 // declared here first

function deductTime() { // deducts 5 seconds from time remaining
  timeleft -= 5
}

function update() { //timer function

  nextQuestion() // called when update() is called to show the first questions/answers

  timeleft = 50 // amount of time for the quiz

  let downloadTimer = setInterval(function () { // timer
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      finished() // ends quiz
      document.getElementById("start").innerHTML = "Finished";
    } else {
      document.getElementById("start").innerHTML = timeleft + " seconds remaining"; // countdown timer on the page
    }
    timeleft -= 1 // I have no idea what this does. All I know is that it is needed to make this all work
  }, 1000); // milliseconds - makes the 50 above 50 seconds instead of needing to put 50000 as the value

}

// Pause fuction for time between answer click and moving to next question
// ____________________________________________________

let pauseleft = 0 // declared here

function pause5() { // just pauses for .5 seconds between answer click and moving to the next question so that the color animation has time to run

  pauseleft = 5

  let downloadPauseTimer = setInterval(function () {
    if (pauseleft <= 0) {
      clearInterval(downloadPauseTimer);
      readyNext()
    }
    pauseleft -= 1
  }, 100);

}

// Event listeners
// ____________________________________________________

answer1.addEventListener('click', ev => { // button 1
  answerGiven = 1
  answerKey = document.getElementById("answer1")
  checkAnswer(); // check answer
});

answer2.addEventListener('click', ev => { // button 2
  answerGiven = 2
  answerKey = document.getElementById("answer2")
  checkAnswer(); // check answer
});

answer3.addEventListener('click', ev => { // button 3
  answerGiven = 3
  answerKey = document.getElementById("answer3")
  checkAnswer(); // check answer
});

answer4.addEventListener('click', ev => { // button 4
  answerGiven = 4
  answerKey = document.getElementById("answer4")
  checkAnswer(); // check answer
});

next.addEventListener('click', ev => { // listener for next question button
  readyNext()
})

start.addEventListener('click', ev => { // listener for start the quiz button
  update(); // starts the timer
});

saveBox.addEventListener('click', ev => { // listener for save score button
  saveScore(); // show the save button
});

playAgain.addEventListener('click', ev => { // listener for play again button
  window.location.reload(); // reload the page
});


// Questions and Answers
// ____________________________________________________

// Arrays
// ____________________________________________________

let questionText = [ // Questions
  "What is the standard 'Primary' color for Bootstrap?",
  "What is contained in an Object?",
  "What is Bootstrap?",
  "Which combination contains valid JS operators?",
  "Javascript scripts cannot be located:",
  "Bootstrap 5 does not require JQuery.",
  "The defult arrangement for Bootstrap button groups is:",
  "Variables declared with const can be changed by:",
  "Which of the following is not an object?"
]

let answer1Text = [ // all of the answers for the 1st button
  "Red",
  "value, 'Key'",
  "HTML library",
  "&&, %, ++, -",
  "the <head> element of a .html file",
  "True",
  "together, verticle, flush left",
  "reset with const ___ = ___",
  "array"
]

let answer2Text = [ // all of the answers for the 2nd button
  "Green",
  "'Key', value",
  "JS library",
  "<, /, --, &",
  "before the </body> tag.",
  "False",
  "spread out with equal space between",
  "it can't be changed",
  "function"
]

let answer3Text = [ // all of the answers for the 3rd button
  "Blue",
  "'value', 'Key'",
  "Both JS and CSS library",
  "++, *, -, >",
  "inline within <element> tags",
  "",
  "together, horizontal, flush left",
  "reset with var ___ = ___",
  "object"
]

let answer4Text = [ // all of the answers for the 4th button
  "Yellow",
  "value, Key",
  "CSS library",
  "**, /, %, --",
  "first line of a .html file",
  "",
  "hoizontal, flush left, with 10px margin",
  "reset with let ___ = ___",
  "string"
]

// Object - Key: Value - Question # and Answer
// ____________________________________________________
let answers = { // answer key
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

// The end