//Elements
const num9 = document.querySelector(".nine")
const num8 = document.querySelector(".eight")
const num7 = document.querySelector(".seven")
const num6 = document.querySelector(".six")
const num5 = document.querySelector(".five")
const num4 = document.querySelector(".four")
const num3 = document.querySelector(".three")
const num2 = document.querySelector(".two")
const num1 = document.querySelector(".one")
const divide = document.querySelector(".divide")
const multiply = document.querySelector(".multiply")
const minus = document.querySelector("minus")
const plus = document.querySelector(".plus")
const dot = document.querySelector(".equals")
const textfield = document.querySelector(".result")

function zero() {
  textfield.value = textfield.value + "0"
}

function one() {
  textfield.value = textfield.value + "1"
}

function two() {
  textfield.value = textfield.value + "2"
}

function three() {
  textfield.value = textfield.value + "3"
}

function four() {
  textfield.value = textfield.value + "4"
}

function five() {
  textfield.value = textfield.value + "5"
}

function six() {
  textfield.value = textfield.value + "6"
}

function seven() {
  textfield.value = textfield.value + "7"
}

function eight() {
  textfield.value = textfield.value + "8"
}

function nine() {
  textfield.value = textfield.value + "9"
}

function dotfunc() {
  textfield.value = textfield.value + "."
}

function plusfunc() {
  textfield.value = textfield.value + "+"
}

function minusfunc() {
  textfield.value = textfield.value + "-"
}

function multiplyfunc() {
  textfield.value = textfield.value + "*"
}

function dividefunc() {
  textfield.value = textfield.value + "/"
}

function equalfunc() {
  if (textfield.value == "9+10") {
    textfield.value = 21;
  }
  else {
    textfield.value = eval(textfield.value)
  }
  window.parent.postMessage(noti("hey", "hey2"));
}

function clearfunc() {
  textfield.value = "";
}