function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Anonymous functions
const waterThePlant = function (day){
  if(day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(waterThePlant('Tuesday'));    // Output: false

// Arrow functions
const waterThePlant = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(waterThePlant('Tuesday'));    // Output: false

// Single line arrow function
const waterThePlant = day => day === 'Wednesday' ? true : false;    // tenary if --> iif

console.log(waterThePlant('Tuesday'));    // Output: false

// display "Hello" in the inner HTML of an element with the ID "demo"
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello";
}
