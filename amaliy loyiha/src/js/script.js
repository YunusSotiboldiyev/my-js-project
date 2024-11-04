const auctionEndTime = new Date().getTime() + (12 * 60 * 60 + 43 * 60 + 42) * 1000; // 12 hours, 43 minutes, 42 seconds from now

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = auctionEndTime - now;

  if (timeLeft < 0) {
    document.getElementById("countdown-timer").innerHTML = "Auction Ended";
    clearInterval(countdownInterval);
    return;
  }

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);


  function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      display.textContent = `${hours}h ${minutes}m ${seconds}s left`;

      if (--timer < 0) {
        display.textContent = "Auction Ended";
      }
    }, 1000);
  }

  const duration = 3 * 3600 + 50 * 60 + 2;
  startCountdown(duration, document.getElementById("timer1"));
  startCountdown(duration, document.getElementById("timer2"));
  startCountdown(duration, document.getElementById("timer3"));
  startCountdown(duration, document.getElementById("timer4"));