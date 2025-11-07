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

  // Highlight active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("text-warning");
    } else {
      link.classList.remove("text-warning");
    }
  });


   document.addEventListener("DOMContentLoaded", () => {
     // Fade in on load
     document.body.classList.add("fade-in");

     // Add fade-out on navigation click
     const links = document.querySelectorAll("a[href]");
     links.forEach((link) => {
       const target = link.getAttribute("href");

       if (
         target &&
         !target.startsWith("#") &&
         !target.startsWith("mailto:") &&
         !target.startsWith("tel:")
       ) {
         link.addEventListener("click", (e) => {
           e.preventDefault();
           document.body.classList.add("fade-out");
           setTimeout(() => {
             window.location.href = target;
           }, 400); // wait for fade-out to finish
         });
       }
     });
   });
