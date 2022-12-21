// ~ modify navbar with scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //Highlights navbar tabs on different sections
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 80) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
}