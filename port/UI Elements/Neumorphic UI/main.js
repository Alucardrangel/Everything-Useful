/*===== DROPDOWNS ======*/
//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
  //Get inner elements from each dropdown
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  
  /*
    We are using this method in order to have 
    multiple dropdown menus on the page work
  */
  
  //Add a click event to the select element
  select.addEventListener('click', () => {
    //Add the clicked select styles to the select element
    select.classList.toggle('select-clicked');
    //Add the rotate styles to the caret element
    caret.classList.toggle('caret-rotate');
    //Add the open styles to the menu element
    menu.classList.toggle('menu-open');
  });
  
  //Loop through all option elements
  options.forEach(option => {
    //Add a click event to the option element
    option.addEventListener('click', () => {
      //Change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      //Add the clicked select styles to the select element
      select.classList.remove('select-clicked');
      //Add the rotate styles to the caret element
      caret.classList.remove('caret-rotate');
      //Add the open styles to the menu element
      menu.classList.remove('menu-open');
      //Remove active class from all option elements
      options.forEach(option => {
        option.classList.remove('active');
      });
      //Add active class to clicked option element
      option.classList.add('active');
    });
  });
});

/*===== Range Sliders ======*/
//Select the main container
const rangeSliders = document.querySelectorAll('.range-slider');

//Loop through all the sliders
rangeSliders.forEach(rangeSlider => {
  //Select the individual parts
  const slider = rangeSlider.querySelector('.slider');
  const thumb = rangeSlider.querySelector('.slider-thumb');
  const progress = rangeSlider.querySelector('.progress');
  
  //Function for handling the slider values
  function customSlider() {
    //Get the percentage
    const maxVal = slider.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";
    
    //Set the thumb and progress to the current value
    progress.style.width = val;
    thumb.style.left = val;
  }
  
  //Call function initially
  customSlider();
  
  //Repeat the function when the slider is selected
  slider.addEventListener("input", () => {
    customSlider();
  });
});

/*===== PROGRESS BARS ======*/
//Get Elements
const bars = document.querySelectorAll('.bars li');
const progs = document.querySelectorAll('.bars span');

//Set bar height based on the 'data' attribute value
bars.forEach(bar => {
  bar.style.height = bar.dataset.height + "em";
});

/*Set progress percentage based 
on the 'data' attribute value*/
progs.forEach(prog => {
  prog.style.height = prog.dataset.fill + "%";
});

/*===== CIRCULAR PROGRESS BARS ======*/
//Get all elements from the DOM
const circles = document.querySelector('.circle');
const progressCircles = document.querySelector('.circle-progress');
const progressText = document.querySelector('.circle h1');

//Get the radius of the circle
let radius = progressCircles.r.baseVal.value;
//Get the circumference of the circle
let circumference = radius * 2 * Math.PI;
//Set stroke dasharray to the circumference
progressCircles.style.strokeDasharray = circumference;

/*Set stroke dash offset between a scale from 0 to 100*/
function setProgress(percent) {
  progressCircles.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}
//Get data attribute values
const progress = circles.dataset.prog;
/*Add progress text dinamically*/
progressText.innerHTML = progress + "%";
//Call the 'setProgress' function
setProgress(progress);

/*===== BUTTONS GROUP / CUSTOM SWITCH ======*/
const btnGroup = document.querySelectorAll('.btn-group'); 

//Select all 'button group' elements
for(let i = 0; i < btnGroup.length; i++) { 
  //Select all buttons inside the current button group
  const groupButtons = btnGroup[i].querySelectorAll('.btn-group button');

  for(let i = 0; i < groupButtons.length; i++) { 
    //Add a click event to the buttons
    groupButtons[i].addEventListener('click', () => {
      //Remove the active class from all buttons
      for(let i = 0; i < groupButtons.length; i++) { 
        groupButtons[i].classList.remove('active');
      }
      //And add the active class to the clicked button   
      groupButtons[i].classList.add('active');
    });
  }
}