const gigiBirthday = new Date("Apr 22, 2020 00:00:00").getTime();

// Update the count down every 1 second
let timer = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distanceBday = gigiBirthday - now;

  // Time calculations for  hours, minutes and seconds
  //const daysB = Math.floor(distanceBday / (1000 * 60 * 60 * 24));  *days
  const hoursBday = Math.floor(
    (distanceBday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesBday = Math.floor((distanceBday % (1000 * 60 * 60)) / (1000 * 60));
  const secondsBday = Math.floor((distanceBday % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    (`${hoursBday} h ${minutesBday} m ${secondsBday} s`);

  // If the count down is finished, write some text
  if (distanceBday <= 0) {
    clearInterval(timer);
    document.getElementById("title").innerHTML = "🎉Today is the big day!🎉";
    document.getElementById("gigiDay").innerHTML = "🎊Happy Birthday Gigi!🎊 🎁";
  }
}, 1000);

