//Array of pictures for random
const myPicturesBefore = [
  "./images/undraw_hooked_c757.png",
  "./images/undraw_in_love_3dcq.png",
  "./images/undraw_intense_feeling_ft9s.png",
  "./images/undraw_Jogging_t14q.png",
  "./images/undraw_pleasant_surprise_5sjy.png",
  "./images/undraw_super_thank_you_obwk.png",
  "./images/undraw_with_love_ajy1.png"
];
const myPicturesAfter = [
  "./images/after/undraw_buddies_tb1l.png",
  "./images/after/undraw_forever_5ag7.png",
  "./images/after/undraw_love_is_in_the_air_4mmc.png",
  "./images/after/undraw_love_xfcv.png",
  "./images/after/undraw_pure_love_ay8a.png",
  "./images/after/undraw_running_wild_ni0y.png",
  "./images/after/undraw_special_event_4aj8.png",
  "./images/after/undraw_together_j0gj.png",
];

//Date for Countdown
const date = "Mar 15, 2021 00: 00: 00";
const countdown = new Date(date).getTime();

//Dates for random picture
const count = Date.parse(date);
const time = Date.now();

//Update the picture with every refresh
if (time >= count) {
  //random function to show a random picture after the setted time is over 
  function showPictureAfter() {
    let randomPicAfter = Math.floor(Math.random() * myPicturesAfter.length);
    document.getElementById("myImage").src = myPicturesAfter[randomPicAfter];
  };

  //random picture generator on refresh
  window.onload = showPictureAfter();
}
else { 
  //random function to show a random picture before the setted time is over
  function showPictureBefore() {
    let randomPicBefore = Math.floor(Math.random() * myPicturesBefore.length);
    document.getElementById("myImage").src = myPicturesBefore[randomPicBefore];
  };

  //random picture generator on refresh
  window.onload = showPictureBefore();
};

// Update the count down every second
let timer = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distanceDay = countdown - now;  

  // Time calculations for days, hours, minutes and seconds
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
    //Clear the countdown
    clearInterval(timer);
    //Reset the message
    document.getElementById("title").innerHTML = "🎉Today is the big day!🎉";
    document.getElementById("firstPara").innerHTML = "Let's celebrate";
    document.getElementById("secondPara").innerHTML = "🎁 🎊 We're together now! 🎊 🎁"
  }
  //Else show the countdown
  else { 
    //window.onload = showPictureBefore();
    //Show the countdown
    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
  };
}, 1000);