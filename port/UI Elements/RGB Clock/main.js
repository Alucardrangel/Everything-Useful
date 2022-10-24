/*Clock*/
//Add '0' if its a one digit number
function formatTime(val) {
  if (val < 10) {
    return "0";
  } else {
    return "";
  }
}

function clock() {
  //Date Object
  const d = new Date();

  //Time variables
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  //Formating and displaying the time
  const time = formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s;

  //Output the time
  document.querySelector(".time").innerHTML = time;

  //Updating the time every second
  setInterval(clock, 1000);
}

clock();