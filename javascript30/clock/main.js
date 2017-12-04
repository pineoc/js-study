(function () {
  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');


  function setDate() {
    const now = new Date();

    const secs = now.getSeconds();
    const secDegrees = (secs / 60) * 360 + 90;
    secondHand.style.transition = secs === 0 ? 'none' : 'all 0.05s';
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = (mins / 60) * 360 + 90;
    minHand.style.transition = mins === 0 ? 'none' : 'all 0.05s';
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transition = hours === 0 ? 'none' : 'all 0.05s';
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
})();