// random number
function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
window.console.log( randomInteger(0, 544));


// const testString = 140;
// let clearString = (testString <= 140) ? 'true' : 'false';
// window.console.log(clearString);

const testString = 140;
let clearString;
if (testString <= 140) {
  clearString = true;
} else {
  clearString = false;
}

window.console.log(clearString);
