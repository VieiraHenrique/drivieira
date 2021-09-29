const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const links = document.querySelectorAll(".header__nav--menu a");
const toggle = document.getElementById("toggle");

hamburger.addEventListener("click", () => {
  if (!toggle.checked) {
    body.classList.add("noscroll");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        toggle.checked = false;

        body.classList.remove("noscroll");
      });
    });
  } else {
    body.classList.remove("noscroll");
  }
});
