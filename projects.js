function lifeInWeeks() {
  var yourAge = prompt("How old are you?");
  var daysLeft = 90 * 365 - yourAge * 365;
  var weeksLeft = 90 * 52 - yourAge * 52;
  var monthsLeft = 90 * 12 - yourAge * 12;

  alert(
    "You have " + daysLeft +
      " days, " +
      weeksLeft +
      " weeks, " +
      monthsLeft +
      " months left."
  );
}

function bmiCalculator() {
    var weight = prompt("How much do you weigh in kg?");
    var height = prompt("What is your height in metres? e.g 1.65");
    var bmi = Math.round(weight / height ** 2);
    alert("Based on your weight and height you have entered, your Body Mass Index (BMI) is " + bmi);
}


function dogAge(){
var dogAge = prompt("How old is your dog");
var humanAge = ((dogAge-2)*4)+21;
alert("Your dog is " + humanAge + " in human age.");
}