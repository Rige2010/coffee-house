const leftArrow = document.querySelector(".coffee-slider__arrow_left");
const rightArrow = document.querySelector(".coffee-slider__arrow_right");

const mainSlider = document.querySelector(".coffee-slider__slider");
const slider = document.querySelector(".coffee-slider__slide-container");
const numSlides = document.querySelectorAll(".coffee-slider__slide").length;
const moveDist = 100 / numSlides;
let currentPos = 0;

const radio = document.querySelectorAll(".coffee-slider__radio");
let currentRadio = 0;
const timeRadioSecond = 3;

let moveTimer = setInterval(moveRight, 3000);

function moveRight() {
  slider.style.transform = `translateX(${currentPos - moveDist}%)`;
  currentPos -= moveDist;
  currentRadio += 1;
  if (currentPos < -moveDist * (numSlides - 1)) {
    slider.style.transform = `translateX(0%)`;
    currentPos = 0;
    currentRadio = 0;
  }
  radio.forEach((el) => {
    el.classList.remove("coffee-slider__radio_active");
  });
  radio[currentRadio].classList.add("coffee-slider__radio_active");

  clearInterval(moveTimer);
  moveTimer = setInterval(moveRight, 3000);
}

function moveLeft() {
  slider.style.transform = `translateX(${currentPos + moveDist}%)`;
  currentPos += moveDist;
  currentRadio -= 1;
  if (currentPos > 0) {
    slider.style.transform = `translateX(${-moveDist * (numSlides - 1)}%)`;
    currentPos = -moveDist * (numSlides - 1);
    currentRadio = numSlides - 1;
  }
  radio.forEach((el) => {
    el.classList.remove("coffee-slider__radio_active");
  });
  radio[currentRadio].classList.add("coffee-slider__radio_active");

  clearInterval(moveTimer);
  moveTimer = setInterval(moveRight, 3000);
}

rightArrow.addEventListener("click", () => {
  moveRight();
});

leftArrow.addEventListener("click", () => {
  moveLeft();
});

// Touch X

let touchCoordinatesX;
const touchDist = 50;
let touchMoveDist;

mainSlider.addEventListener("touchstart", handleTouchStart);
mainSlider.addEventListener("touchmove", handleTouchMove);
mainSlider.addEventListener("touchend", () => handleTouchEnd(touchMoveDist));

function handleTouchStart(event) {
  touchCoordinatesX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!touchCoordinatesX) return;

  const currentTouchCoordinates = event.touches[0].clientX;

  touchMoveDist = touchCoordinatesX - currentTouchCoordinates;
}

function handleTouchEnd(touchmove) {
  if (Math.abs(touchmove) > touchDist) {
    if (touchmove > 0) moveRight();
    else moveLeft();
  }
  touchMoveDist = 0;
}
