const decrease = document.getElementById("dbutton");
const reset = document.getElementById("rbutton");
const increase = document.getElementById("ibutton");
const countleble = document.getElementById("countlable");

let count = 0;
ibutton.onclick = function () {
  count++;
  countleble.textContent = count;
};

dbutton.onclick = function () {
  count--;
  countleble.textContent = count;
};
rbutton.onclick = function () {
  count = 0;
  countleble.textContent = count;
};
// ternary operator inetead of if()&else()
let purchase = 100;
let discount = purchase >= 100 ? 10 : 0;
console.log(`your price is  $${purchase - purchase * (discount / 100)}`);
//Temprature converter
const textbox = document.getElementById("textbox");
const tofahrenhite = document.getElementById("tofahrenhite");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");
// let temp;
function convert() {
  if (tofahrenhite.checked) {
    temp = Number(textbox.value);
    temp = temp * (9 / 5) + 32;
    result.textContent = temp + "°F";
  } else if (tocelcius.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp + "°c";
  } else {
    result.textContent = "select a unit";
  }
}
// sorting//
let Numbers = [10, 7, 9, 8, 1, 2, 6, 4, 3, 5];
Numbers.sort((a, b) => a - b);
console.log(Numbers);
// under neasted array//
const people = [
  { name: "abebe", age: 20, gpa: 3 },
  { name: "alemu", age: 30, gpa: 3.5 },
  { name: "aster", age: 35, gpa: 3.4 },
  { name: "almaze", age: 27, gpa: 3.8 },
];
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);
const date = new Date();

console.log(date);

function startTimer() {
  setTimeout(() => window.alert("Hello"), 1000);
}
// ADDING EVENT LISTNERS
const mybox = document.getElementById("mybox");
mybox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "Leave it! ";
});
mybox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "pink";
  event.target.textContent = "Click! ";
});
mybox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "green";
  event.target.textContent = "Hover me! ";
});
/* Callback function */

function orderpiza(callback) {
  console.log("order pizza");
  setTimeout(() => {
    console.log("your pizza is ready");
  }, 2000);
}
function pizzaready(pizza) {
  console.log(`Eat your ${pizza}`);
}
orderpiza();
console.log("Call a friend");
