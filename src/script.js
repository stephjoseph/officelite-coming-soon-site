const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let launchDate = new Date();

launchDate.setDate(launchDate.getDate() + 47);
launchDate.setHours(
  launchDate.getHours() + 7,
  launchDate.getMinutes() + 56,
  launchDate.getSeconds() + 14
);

let launchTime = launchDate.getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = launchTime - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector("#days").innerHTML = days < 10 ? "0" + days : days;
  document.querySelector("#hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.querySelector("#minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;
  document.querySelector("#seconds").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// Set launch date
document.querySelector("#launch").innerHTML = `${launchDate.getDate()} ${
  month[launchDate.getMonth()]
} ${launchDate.getFullYear()}`;
