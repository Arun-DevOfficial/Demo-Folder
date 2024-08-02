// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slides = document.querySelector(".carousel-container");
  const slideCount = document.querySelectorAll(".carousel-slide").length;
  let index = 0;
 console.log(index);
  function updateSlidePosition() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener("click", () => {
    index = index > 0 ? index - 1 : slideCount - 1;
    console.log(index);
    updateSlidePosition();
  });

  nextButton.addEventListener("click", () => {
    index = index < slideCount - 1 ? index + 1 : 0;
    updateSlidePosition();
  });

  // Optional: Auto slide transition
  setInterval(() => {
    nextButton.click();
  }, 5000); // Adjust time interval as needed
});
