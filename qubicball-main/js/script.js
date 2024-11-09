// Open sidebar navigation (mobile)
var sidebarNav = document.querySelector(".sidebar-nav");

function openSidebar() {
  sidebarNav.classList.add("active");
}

function closeSidebar() {
  sidebarNav.classList.remove("active");
}

// Slider partners
var slideOne = document.querySelector("#slide-one");
var slideTwo = document.querySelector("#slide-two");
var slideThree = document.querySelector("#slide-three");
var slideFour = document.querySelector("#slide-four");
var dotOne = document.querySelector("#dot-one");
var dotTwo = document.querySelector("#dot-two");
var dotThree = document.querySelector("#dot-three");
var dotFour = document.querySelector("#dot-four");

function isSlideOne() {
  slideOne.style.display = "block";
  slideTwo.style.display = "none";
  slideThree.style.display = "none";
  slideFour.style.display = "none";
  dotOne.classList.add("active");
  dotTwo.classList.remove("active");
  dotThree.classList.remove("active");
  dotFour.classList.remove("active");
}

function isSlideTwo() {
  slideOne.style.display = "none";
  slideTwo.style.display = "block";
  slideThree.style.display = "none";
  slideFour.style.display = "none";
  dotOne.classList.remove("active");
  dotTwo.classList.add("active");
  dotThree.classList.remove("active");
  dotFour.classList.remove("active");
}

function isSlideThree() {
  slideOne.style.display = "none";
  slideTwo.style.display = "none";
  slideThree.style.display = "block";
  slideFour.style.display = "none";
  dotOne.classList.remove("active");
  dotTwo.classList.remove("active");
  dotThree.classList.add("active");
  dotFour.classList.remove("active");
}

function isSlideFour() {
  slideOne.style.display = "none";
  slideTwo.style.display = "none";
  slideThree.style.display = "none";
  slideFour.style.display = "block";
  dotOne.classList.remove("active");
  dotTwo.classList.remove("active");
  dotThree.classList.remove("active");
  dotFour.classList.add("active");
}

// Get the current year
var currentYear = new Date().getFullYear();

// Display the current year in the span
document.getElementById("current-year").textContent = currentYear;
