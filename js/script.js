// And so it begins!

// JavaScript Current Date
    // var currentDate = new Date();
    // document.getElementById('current-date').innerHTML = currentDate;

// JavaScript Date 2
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var finalDate = new Date();
var day = finalDate.getDate();
var monthIndex = finalDate.getMonth();
var year = finalDate.getFullYear();
var weekDays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                "Friday","Saturday");
var weekDay = weekDays[finalDate.getDay()];

document.getElementById('current-date').innerHTML = weekDay + ' ' + day + ' ' + monthNames[monthIndex] + ' ' + year;

// Item 1
var totalPrice1 = function() {
  // get the value of the quantity input
  var quantity = document.getElementById("inputNoOfItems1").value;
  // get the value of the price input
  var price = document.getElementById("inputPrice1").value;
  // assign the product of the above two inputs to the total
  document.getElementById("inputTotal1").value = price * quantity;
}

// Item 2
var totalPrice2 = function() {
  // get the value of the quantity input
  var quantity = document.getElementById("inputNoOfItems2").value;
  // get the value of the price input
  var price = document.getElementById("inputPrice2").value;
  // assign the product of the above two inputs to the total
  document.getElementById("inputTotal2").value = price * quantity;
}

// Item 3
var totalPrice3 = function() {
  // get the value of the quantity input
  var quantity = document.getElementById("inputNoOfItems3").value;
  // get the value of the price input
  var price = document.getElementById("inputPrice3").value;
  // assign the product of the above two inputs to the total
  document.getElementById("inputTotal3").value = price * quantity;
}
// Subtotal

// Reset
function resetPage () {
    window.location.reload();
}

/*
function outputNoOfItems3() {
    document.getElementById('inputNoOfItems').innerHTML = inputNoOfItems.value;
    alert("test");
}

function outputPrice3() {
    document.getElementById('inputPrice').innerHTML = inputPrice.value;
}

function outputTotal3() {
    document.getElementById('inputTotal').innerHTML = inputNoOfItems.value + inputPrice.value;
}
*/
// alert(finalTotal3);

/*
function printCompany() {
    document.getElementById("outputCompany").innerHTML = inputCompany.value;
}

function printMessage() {
    document.getElementById("outputMessage").innerHTML = inputMessage.value;
}

function changeBg() {
    var bgColor = document.getElementById('inputBg').value;
    document.getElementById('card').style.background = bgColor;
}

function changeText() {
    var textColor = document.getElementById('inputText').value;
    document.getElementById('card').style.color = textColor;
}

// Text Align
function textAlign(selected_id) {
    document.getElementById('card').className = selected_id;
}


// Your Name
function printName() {
    document.getElementById('outputName').innerHTML = inputName.value;
}

// Job
function printJob() {
    document.getElementById('outputJob').innerHTML = inputJob.value;
}

// Email
function printEmail() {
    document.getElementById('outputEmail').innerHTML = "Email: " + inputEmail.value;
}

// Telephone
function printTelephone() {
    document.getElementById('outputTelephone').innerHTML = "Tel: " + inputTelephone.value;
}

// Submit
function formSubmit() {
    if (!inputName.value) {
        alert("Please complete all required sections");
    }
}

// Reset
function formReset() {
    window.location.reload();
}
*/