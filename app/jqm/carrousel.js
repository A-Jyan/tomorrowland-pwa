// Select the carousel you'll need to manipulate and the buttons you'll add events toa
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide,
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;

// Add the click events
let clickLeft = 0;

leftButton.addEventListener("click", function () {
  clickRight = 0;
  let totalClicks = clickLeft++;
  if (totalClicks <= 3 && offset != 0) {
    offset += card.offsetWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
  console.log(totalClicks);
  console.log(offset);
});

let clickRight = 0;
rightButton.addEventListener("click", function () {
  clickLeft = 0;
  let totalClicks = clickRight++;
  if (totalClicks <= 3 && window.innerWidth <= 320) {
    offset -= card.offsetWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  } else if (totalClicks <= 3 && window.innerWidth > 320) {
    offset -= card.offsetWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});
