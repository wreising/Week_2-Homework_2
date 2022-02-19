document.getElementById("questionNumber").innerHTML = "Question #1";
document.getElementById("questionText").innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. la blanditiis cumque tempora iure dicta soluta voluptate, atque provident similique optio.";
document.getElementById("answer1").innerHTML = "sit amet consectetur adipisicing elit. Nulla blanditiis cumque tempora iure dicta soluta voluptate, atque";
document.getElementById("answer2").innerHTML = "soluta voluptate, atque";
document.getElementById("answer3").innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla blanditiis cumque tempora iure dicta soluta voluptate, atque provident similique optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. ";
document.getElementById("answer4").innerHTML = "Nostrum, nobis sit totam dolores esse nihil, dolorem dolore odio, illum nesciunt atque. Pariatur laboriosam facilis asperiores!";


// Countdown Time
// Needs to have wrong answer deduct time - How?



// Time that works
const timerElement = document.getElementById('timerCountDown');
let timer;

function startTimeCountDown() {
  timer = 10;
  const timeCountdown = setInterval(countdown, 1000);
}

function countdown() {
  if (timer == 0) {
    clearTimeout(timer);
    timerElement.innerHTML = 'Start'
  } else {
    timerElement.innerHTML = timer + ' secs';
    timer--;
  }
  if (timer == 0) {
    timerElement.innerHTML = "Time is up.";
  }
}

timerElement.addEventListener('click', ev => {
  startTimeCountDown();
});