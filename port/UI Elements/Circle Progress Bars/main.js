//Get all elements from the DOM
const circleSection = document.querySelector('.circles');
const circles = document.querySelectorAll('.circle');
const progressCircles = document.querySelectorAll('.progress');
const progressText = document.querySelectorAll('.circles h1');

let bol = false;

/*Add on scroll event listener*/
window.addEventListener("scroll", function () {
  /*Run when the scroll offset is 600px and run only once*/
  if (pageYOffset > circleSection.offsetTop - 600 && bol === false) {
    //Select all circles
    for(let i = 0; i < circles.length; i++) {
      //Get the radius of the circle
      let radius = progressCircles[i].r.baseVal.value;
      //Get the circumference of the circle
      let circumference = radius * 2 * Math.PI;
      console.log(circumference - 0.7 * circumference);
      //Set stroke dasharray to the circumference
      progressCircles[i].style.strokeDasharray = circumference;
      
      /*Set stroke dash offset between a scale from 0 to 100*/
      function setProgress(percent) {
        progressCircles[i].style.strokeDashoffset = circumference - (percent / 100) * circumference;
      }
      
      //Get data attribute values
      const progress = circles[i].dataset.prog;
      
      /*Add progress text dinamically*/
      progressText[i].innerHTML = progress + "%";
      
      //Call the 'setProgress' function
      setProgress(progress);
      /*By setting the bol variable to true, 
      we stop the above code from runing 
      over and over again*/
      bol = true;
    }
  }
});