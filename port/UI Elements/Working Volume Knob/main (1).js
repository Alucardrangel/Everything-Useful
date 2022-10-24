//Get all of the elements from the DOM
const knob = document.querySelector(".knob");
const audio = document.querySelector("#audio");
const prog = document.querySelector(".progress > div");
const bar = document.querySelector(".progress");
const play = document.querySelector(".play-btn");
const percent = document.querySelector(".percent");

//Set volume to mute initially
audio.volume = 0.0;

//Previous x,y values
let prevX = 0;
let prevY = 0;
//Final calculation volume
let vol = 0;

//Get the full bar width 
barW = bar.clientWidth;

function calculateDegree(e, x, y) {
  //Get half of the knob width & height
  const w = knob.clientWidth / 2;
  const h = knob.clientHeight / 2;

  //Calculating delta values
  const deltaX = w - x;
  const deltaY = h - y;

  //Mouse position in radians
  const rad = Math.atan2(deltaY, deltaX);
  //Convert to degrees
  let deg = rad * (180 / Math.PI);

  /*=== 
      Tracking mouse 
      in each quarter 
    ===*/
  //Top right corner
  if (y < h && x > w) {
    //Increasing
    if (prevX <= x && prevY <= y) {
      vol++;
    }
    //Decreasing
    else if (prevX >= x && prevY >= y) {
      vol--;
    }
  }
  //Bottom Right corner
  else if (y > h && x > w) {
    //Increasing
    if (prevX >= x && prevY <= y) {
      vol++;
    }
    //Decreasing
    else if (prevX <= x && prevY >= y) {
      vol--;
    }
  }
  //Top left corner
  else if (y < h && x < w) {
    //Increasing
    if (prevX <= x && prevY >= y) {
      vol++;
    }
    //Decreasing
    else if (prevX >= x && prevY <= y) {
      vol--;
    } 
  }
  //Bottom left corner
  else if (y > h && x < w) {
    //Increasing
    if (prevX >= x && prevY >= y) {
      vol++;
    }
    //Decreasing
    else if (prevX <= x && prevY <= y) {
      vol--;
    }
  }
  
  //Get percentage of progress width
  const percentage = Math.round((100 * vol) / barW);
  
  //Restrict progress going below zero
  if (vol < 0) {
    vol = 0;
  //Restrict progress going above 100%
  } else if (vol > barW) {
    vol = barW;
  } else {
    //Set progress width
    prog.style.width = vol + "px";
    //Set audio volume
    audio.volume = percentage / 100;
    //Set the percent output 
    percent.innerText = percentage + "%";
  }
  
  //Update values
  prevX = x;
  prevY = y;
  
  return deg;
}

//Play audio 
play.addEventListener("click", () => {
  audio.play();
  play.style.display = "none";
});

//Rotation 
function rotate(e) {
  //Final calcuations for the mouse position
  const result = Math.floor(calculateDegree(e, e.clientX - knob.offsetLeft, e.clientY - knob.offsetTop) - 80);
  //Rotate knob with the final calculation
  knob.style.transform = `rotate(${result}deg)`;
}

//Rotation for touchscreens
function rotatePhone(e) {
  //Prevent touch scrolling
  e.preventDefault();
  //Final calcuations for the touch position
  const result = Math.floor(calculateDegree(e, e.touches[0].clientX - knob.offsetLeft, e.touches[0].clientY - knob.offsetTop) - 80);
  //Rotate knob with the final calculation
  knob.style.transform = `rotate(${result}deg)`;
}

//End rotations 
function endRotation() {
  window.removeEventListener("mousemove", rotate);
  knob.removeEventListener("touchmove", rotatePhone);
}

//Start rotations 
function startRotation() {
  window.addEventListener("mousemove", rotate);
  window.addEventListener("mouseup", endRotation);

  knob.addEventListener("touchmove", rotatePhone);
  knob.addEventListener("touchend", endRotation);
}

//Add event listeners
knob.addEventListener("mousedown", startRotation);
knob.addEventListener("touchstart", startRotation);
