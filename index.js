
  window.addEventListener("load", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("show"); // navbar fades in from top

    // Trigger scroll-based animations immediately for visible sections
    handleScroll();
  });

  window.addEventListener("scroll", handleScroll);



function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100 && rect.bottom > 0;
}


const scrollElements = document.querySelectorAll(".scroll-animate");

function handleScroll() {
  scrollElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("show");
    }
  });
}


window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
