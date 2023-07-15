"use strict";
//for the security purposes it is advisable to not use eval method//
//but//
//for client-side application like calculator wont be a issue//
//inputs//
const display = document.getElementById("display");
function calculate() {
  const result = eval(display.value);
  display.value = result;
}
function buttonClick(value) {
  display.value += value;
}
//function to add decimal
// function floatPoint() {
//   display.value = ".";
// }
function clearDisplay() {
  display.value = "";
}
function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}
//eval()//
//The eval() method evaluates or executes an argument.

//If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.//
