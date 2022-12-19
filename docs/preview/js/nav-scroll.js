// ~ modify navbar with scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "72px";
    document.getElementById("navbar").style.background ="rgba(20,20,20,0)";
  } else {
    document.getElementById("navbar").style.height = "52px";
    document.getElementById("navbar").style.background = "rgba(0,0,0,1)";
  }
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