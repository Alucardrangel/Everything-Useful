/*Select all custom number elements on the page*/
const customNum = document.querySelectorAll('.custom-num');

/*Loop through all custom number elements*/
customNum.forEach(num => {
  /*Select elements within the custom number*/
  /*
    We use this method in order to have 
    multiple custom number elements work 
  */
  const numInput = num.querySelector('.num-input');
  const arrUp = num.querySelector('.arr-up');
  const arrDown = num.querySelector('.arr-down');
  
  /*Set input color from the data attribute set in the HTML*/
  numInput.style.color = numInput.dataset.color;
  
  /*Add click event to the up arrow*/
  arrUp.addEventListener('click', () => {
    /*
      Increment the input 
      value with the built in stepUp function 
      for number input fields
    */
    numInput.stepUp();
    /*Check if the max number is reached*/
    checkMaxMin();
  });
  
  /*Add click event to the down arrow*/
  arrDown.addEventListener('click', () => {
    /*
      Decrement the input 
      value with the built in stepDown function 
      for number input fields
    */
    numInput.stepDown();
    /*Check if the min number is reached*/
    checkMaxMin();
  });  
  
  /*Add an input event on the numInput element*/
  numInput.addEventListener('input', checkMaxMin);

  function checkMaxMin() {
    //Get current input value
    const numInputValue = parseInt(numInput.value);
    //Get max input value set in the HTML max attribute
    const numInputMax = parseInt(numInput.max);
    //Get min input value set in the HTML min attribute
    const numInputMin = parseInt(numInput.min);
    
    /*If the max limit is reached*/
    if(numInputValue === numInputMax) {
      /*Add styles for when 
      the max limit is reached*/
      num.style.paddingTop = "0.8em";
      num.style.height = "5em";
      arrUp.style.display = "none";
      /*Remove styles from the min limit*/
      num.style.paddingBottom = "0";
      arrDown.style.display = "block";
    /*If the min limit is reached*/
    } else if (numInputValue === numInputMin) {
      /*Add styles for when 
      the min limit is reached*/
      num.style.paddingBottom = "0.8em";
      num.style.height = "5em";
      arrDown.style.display = "none";
      /*Remove styles from the max limit*/
      num.style.paddingTop = "0";
      arrUp.style.display = "block";
    } else {
      /*Remove all limit reach styles*/
      num.style.padding = "0";
      num.style.height = "7em";
      arrUp.style.display = "block";
      arrDown.style.display = "block";
    }
  }
});