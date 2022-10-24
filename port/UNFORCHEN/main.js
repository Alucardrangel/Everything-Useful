//Elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Toggle navbar Open/Close 
menuBtn.addEventListener("click", () => {
  menu.classList.toggle('nav-toggle');
  
});

// add to HTML
document.querySelector(".year").innerHTML = new Date().getFullYear();


// 