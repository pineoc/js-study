let countdown;
const timerText = document.querySelector('.display__time-left');
const endTimeText = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
  // clear interval
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check stop
    if(secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    
    // display timer
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const remainderSec = seconds % 60;
  
  // set timer text
  timerText.textContent = `${min}:${remainderSec < 10 ? '0' : ''}${remainderSec}`;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  endTimeText.textContent = `End ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});