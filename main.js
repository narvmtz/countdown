const countdownForUs = new Date("Mar 15, 2021 00:00:00").getTime();

// Update the count down every 1 second
let timer = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distanceBday = countdownForUs - now;

  // Time calculations for  hours, minutes and seconds
  const daysDay = Math.floor(
    distanceBday / (1000 * 60 * 60 * 24)
  );
  const hoursDay = Math.floor(
    (distanceBday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesDay = Math.floor(
    (distanceBday % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsDay = Math.floor(
    (distanceBday % (1000 * 60)) / 1000
  );

  // Display the result in the element with id="demo"
<<<<<<< HEAD
  document.getElementById("countdown").innerHTML =
    (`${daysDay} D ${hoursDay} h ${minutesDay} m ${secondsDay} s`);
=======
  document.getElementById("gigiDay").innerHTML =
    (`${hoursBday} h ${minutesBday} m ${secondsBday} s`);
>>>>>>> 0d14f66fe3d2241b2a09feda37a6363d1ed8ce05

  // If the count down is finished, write some text
  if (distanceBday <= 0) {
    clearInterval(timer);
    document.getElementById("title").innerHTML = "🎉Today is the big day!🎉";
    document.getElementById("countdown").innerHTML = "🎊Happy Aniversary!🎊 🎁";
  }
}, 1000);

