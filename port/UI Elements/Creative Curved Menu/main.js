//Get all elements from the DOM
const active = document.querySelector(".active-icon");
const icons = document.querySelectorAll(".icon");
const curveLeft = document.querySelector(".c-left");
const curveRight = document.querySelector(".c-right");
const circle = document.querySelector(".circle");
const icon = document.querySelector(".active-icon span")

//Initial offset in 'em' units
let offset = 1.5;

//Colors for each icon
const colors = [
  "#ff483b",
  "#87ff42",
  "#4772ff",
  "#bb4dff",
  "#2b2b2b"
];

//Add click event to each icon
for(let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', () => {
    //Keep adding to the offset
    offset += i * 6;
    //Set left position to offset
    active.style.left = offset + "em";
    //Reset offset
    offset = 1.5;
    
    //Change all of the colors after 600ms
    setTimeout(() => {
      //Change icon to clicked icon
      icon.innerText = icons[i].innerText;
      //Change body bg color
      document.body.style.background = colors[i];
      //Change active border color 
      active.style.borderColor = colors[i];
      //Change active bg color 
      active.style.background = colors[i];
      //Change active color 
      active.style.color = colors[i];
      //Change curves color 
      curveLeft.style.color = colors[i];
      curveRight.style.color = colors[i];
    }, 600);
    
    //Add the circle animation 
    circle.style.animation = "switch 1s ease";
    /*Remove the animation after
    it is done so that it can be 
    activated again*/ 
    setTimeout(() => {
      circle.style.animation = "none";
    }, 1050);
  });
}