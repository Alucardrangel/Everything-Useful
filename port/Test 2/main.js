//Global Variables
const container = document.querySelector('.progress-bars');
const progress = document.querySelectorAll('.progress');
const percentage = document.querySelectorAll('.percentage');
let bol = false;
let count;

/*Add on scroll event listener*/
window.addEventListener("scroll", () => {
  /*Run when the scroll offset is 600px and run only once*/
  if (pageYOffset > container.offsetTop - 400 && bol === false) {
    //Select All Bars
    for (let i = 0; i < progress.length; i++) {
      /*Set all to zero initially*/
      percentage.innerText = 0;
      count = 0;
      //Get the data 
      const data = parseInt(progress[i].dataset.count);
      
      //Set the transition duration based on the data value
      progress[i].style.transition = "width " + (data * 30) + "ms";
      /*Move the progress according to the number in the circle*/
      progress[i].style.width = data + "%";

      //Function for counting up
      function updateCount() {
        /*Count up and stop when the target number is reached*/ 
        if (count < data) {
          count++;
          percentage[i].innerText = count + "%";
          setTimeout(updateCount, 50); /*Count Speed*/
        } else {
          percentage[i].innerText = data + "%";
        }
      }
      updateCount();
      /*Onscroll function runs only once when the condition is met*/
      bol = true; 
    }
  }
});