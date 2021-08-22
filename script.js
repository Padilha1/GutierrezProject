
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// const icons = document.querySelector(".social-icons");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
    // icons.classList.toggle("show-links");
});