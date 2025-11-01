function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100 && rect.bottom > 0;
}

const scrollElements = document.querySelectorAll(".scroll-animate");

function handleScroll() {
  scrollElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("show");

  handleScroll();
});

window.addEventListener("scroll", handleScroll);

