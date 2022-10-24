$("#slider1").roundSlider({
  radius: 100,
  width: 5,
  handleSize: 20,
  sliderType: "min-range",
  value: 83,
});

$("#slider2").roundSlider({
  radius: 100,
  width: 5,
  handleSize: 20,
  sliderType: "range",
  value: "53,86",
});

$("#slider3").roundSlider({
  radius: 100,
  width: 5,
  handleSize: 20,
  circleShape: "half-top",
  sliderType: "min-range",
  value: 53,
});

$("#slider4").roundSlider({
  radius: 110,
  width: 22,
  sliderType: "min-range",
  value: 35,
});

$("#slider5").roundSlider({
  radius: 110,
  width: 22,
  sliderType: "range",
  value: "10,80",
});

$("#slider6").roundSlider({
  radius: 100,
  width: 22,
  handleSize: "26,15",
  handleShape: "square",
  sliderType: "min-range",
  value: 36,
});

$("#slider7").roundSlider({
  radius: 100,
  width: 22,
  handleSize: "26,15",
  handleShape: "square",
  sliderType: "range",
  value: "30,90",
});

$("#slider8").roundSlider({
  radius: 100,
  width: 22,
  handleSize: "26,15",
  handleShape: "square",
  circleShape: "half-bottom",
  sliderType: "min-range",
  value: 100,
});

/*Custom Data For Slider*/
function customData(args) {
  let languages = ["HTML", "CSS", "Javascript", "Python", "Java", "Rust", "PHP", "C++", "Typescript", "C#", "Ruby"];

  return languages[args.value];
}

$("#slider9").roundSlider({
  sliderType: "min-range",
  circleShape: "custom-quarter",
  min: 0,
  max: 10,
  value: 7,
  startAngle: 45,
  radius: 400,
  width: 15,
  editableTooltip: false,
  handleSize: "+15",
  handleShape: "dot",
  tooltipFormat: "customData",
});
