//Select the main container
const container = document.querySelectorAll('.range-slider');

//Loop through all the sliders
for(let i = 0; i < container.length; i++) {
  //Select the individual parts
  const slider = container[i].querySelector('.slider');
  const thumb = container[i].querySelector('.slider-thumb');
  const tooltip = container[i].querySelector('.tooltip');
  const progress = container[i].querySelector('.progress');
  
  //Function for handling the slider values
  function customSlider() {
    //Get the percentage
    const maxVal = slider.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";
    
    //Display the value in the tooltip
    tooltip.innerHTML = slider.value;
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
}