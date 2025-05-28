// script.js

document.addEventListener("DOMContentLoaded", () => {
  const introElements = document.querySelectorAll(".intro-text h1, .intro-text h3, .intro-text p");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkAnimation() {
    introElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("slide-in");
      }
    });
  }

  // Initial check in case already visible
  checkAnimation();

  window.addEventListener("scroll", checkAnimation);
});
