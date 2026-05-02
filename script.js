let intro = document.querySelector(".intro")
let intro1 = document.querySelector(".intro1")
let intro2 = document.querySelector(".intro")
window.addEventListener("DOMContentLoaded",()=>{
setTimeout(()=>{
intro.style.top="-100%"
},3000)
setTimeout(()=>{
intro.style.display="none"
},5000)
})

let navbar = document.querySelector("nav");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
 
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});


const mobileMenu = document.querySelector('#mobile-menu');
const navGroup = document.querySelector('.nav-group');

mobileMenu.addEventListener('click', () => {
    navGroup.classList.toggle('active');
    
    mobileMenu.classList.toggle('is-active');
});


document.querySelectorAll('.nav-group a').forEach(n => n.addEventListener('click', () => {
    navGroup.classList.remove('active');
}));