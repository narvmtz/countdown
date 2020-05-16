const countdown = new Date("Mar 15, 2021 00:00:00").getTime();

// Update the count down every second
let timer = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distanceDay = countdown - now;  

  // Time calculations for  hours, minutes and seconds
  const daysDay = Math.floor(
    distanceDay / (1000 * 60 * 60 * 24)
  );
  const hoursDay = Math.floor(
    (distanceDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesDay = Math.floor(
    (distanceDay % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsDay = Math.floor(
    (distanceDay % (1000 * 60)) / 1000
  );

  // Storage the variables to show the countdown
  const day = `${daysDay}`;
  const hour = `${hoursDay}`;
  const min = `${minutesDay}`;
  const sec = `${secondsDay}`;

  // If the count down is finished, write some text
  if (distanceDay <= 0) {
    clearInterval(timer);
    document.getElementById("title").innerHTML = "🎉Today is the big day!🎉";
    document.getElementById("firstPara").innerHTML = "Let's celebrate";
    document.getElementById("secondPara").innerHTML = "🎁 🎊 We're together now! 🎊 🎁"
  }
  //Else show the countdown
  else { 
    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
  }
}, 1000);

