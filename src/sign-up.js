const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const packSelect = document.querySelector("#pack-select");
const selectArrow = document.querySelector("#select-arrow");
const packs = document.querySelector("#packs");
const pack = document.querySelectorAll("#packs .pack");
const selectedPack = document.querySelector("#selected-pack");
const packName = document.querySelector("#pack-name");
const packPrice = document.querySelector("#pack-price");
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

/* COUNTDOWN TIMER */

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

  // Display the result
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

/* FORM VALIDATION */
let nameValue = fullName.value.trim();
let emailValue = email.value.trim();
let phoneValue = phone.value.trim();
let companyValue = company.value.trim();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  if (fullName.value.trim() === "") {
    fullName.classList.remove("border-[#747B95]/50");
    fullName.classList.add("border-[#F05B5B]");
    fullName.nextElementSibling.classList.remove("invisible");
  } else {
    fullName.classList.remove("border-[#F05B5B]");
    fullName.classList.add("border-[#747B95]/50");
    fullName.nextElementSibling.classList.add("invisible");
  }

  if (email.value.trim() === "") {
    email.classList.remove("border-[#747B95]/50");
    email.classList.add("border-[#F05B5B]");
    email.nextElementSibling.classList.remove("invisible");
  } else if (!isValid(email.value.trim())) {
    email.classList.remove("text-[#333950]");
    email.classList.add("text-[#F05B5B]");
    email.classList.remove("border-[#747B95]/50");
    email.classList.add("border-[#F05B5B]");
    email.nextElementSibling.classList.remove("invisible");
  } else {
    email.classList.remove("text-[#F05B5B]");
    email.classList.add("text-[#333950]");
    email.classList.remove("border-[#F05B5B]");
    email.classList.add("border-[#747B95]/50");
    email.nextElementSibling.classList.add("invisible");
  }

  if (phone.value.trim() === "") {
    phone.classList.remove("border-[#747B95]/50");
    phone.classList.add("border-[#F05B5B]");
    phone.nextElementSibling.classList.remove("invisible");
  } else if (isNaN(phone.value.trim())) {
    phone.classList.remove("text-[#333950]");
    phone.classList.add("text-[#F05B5B]");
    phone.classList.remove("border-[#747B95]/50");
    phone.classList.add("border-[#F05B5B]");
    phone.nextElementSibling.classList.remove("invisible");
  } else {
    phone.classList.remove("text-[#F05B5B]");
    phone.classList.add("text-[#333950]");
    phone.classList.remove("border-[#F05B5B]");
    phone.classList.add("border-[#747B95]/50");
    phone.nextElementSibling.classList.add("invisible");
  }

  if (company.value.trim() === "") {
    company.classList.remove("border-[#747B95]/50");
    company.classList.add("border-[#F05B5B]");
    company.nextElementSibling.classList.remove("invisible");
  } else {
    company.classList.remove("border-[#F05B5B]");
    company.classList.add("border-[#747B95]/50");
    company.nextElementSibling.classList.add("invisible");
  }
}

function isValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

/* FORM SELECT */

packSelect.addEventListener("click", toggleSelect);

pack.forEach((package) => {
  package.addEventListener("click", () => {
    let unselected = package.children[1].classList.contains("hidden");

    pack.forEach((unselected) => {
      unselected.children[1].classList.add("hidden");
    });

    if (unselected) {
      package.children[1].classList.remove("hidden");
    }
    closeSelect();

    packName.innerText = package.children[0].firstElementChild.innerText;
    packPrice.innerText = package.children[0].lastElementChild.innerText;
  });
});

function closeSelect() {
  packs.classList.add("invisible");
  packs.classList.add("opacity-0");
  selectArrow.classList.remove("rotate-180");
}

function toggleSelect() {
  selectArrow.classList.toggle("rotate-180");
  packs.classList.toggle("invisible");
  packs.classList.toggle("opacity-0");
}
