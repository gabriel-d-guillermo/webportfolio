const navBar = document.getElementById('navBar');


// add a background color and border color when navbar is scroll
window.addEventListener('scroll',()=>{
let current=window.pageYOffset;
if(current > 10 ){
navBar.classList.add("bg-primary-color","box-shadow");
}
if(current < 10 ){
navBar.classList.remove("bg-primary-color" ,"box-shadow");
}
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let currents = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
   
    if (pageYOffset >= sectionTop - window.innerHeight / 2 ) {
      currents = section.getAttribute("id");  
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("nav-active");
    if (li.classList.contains(currents)) {
      li.classList.add("nav-active");
    }
  });
});

