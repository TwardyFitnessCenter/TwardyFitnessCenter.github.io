// ~ modify navbar with scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "rgba(25,24,27,0)";
    document.getElementById("logotype").style.transform = "translateY(-20px)";
    document.getElementById("logotype").style.opacity = "0";
  } else {
    document.getElementById("navbar").style.background = "rgba(25,24,27,1)";
    document.getElementById("logotype").style.transform = "translateY(0px)";
    document.getElementById("logotype").style.opacity = "1";
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