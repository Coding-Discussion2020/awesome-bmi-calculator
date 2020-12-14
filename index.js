function bmiCalculation() {
  // User Inputs
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  // BMI Calculation
  var bmi = weight / Math.pow(height, 2);
  var res = bmi.toString().slice(0, 4); // Ultimate result of user's B.M.I.(Body Mass Index).

  // User's Condition
  if (res < 18.5) {
    $(".msg-box").css("background", "#fddb3a");
    $("#msg").html("Your BMI is " + res + ", so you are underweight. Eat some more 🥓🥔🥗 or the wind will carry you away to distant lands.");
  } else if (res >= 18.5 && res <= 24.9) {
    $(".msg-box").css("background", "#b6eb7a");
    $("#msg").html("Your BMI is " + res + ", so you have a normal weight. GOOD...Looks you're so much concern about your fitness.");
  } else if (res >= 25 && res <= 29.9) {
    $(".msg-box").css("background", "#ff9a76");
    $("#msg").html("Your BMI is " + res + ", so you are overweight. Eat some less or one day your stomach will brust like me.");
  } else if (res >= 30 && res <= 34.9) {
    $(".msg-box").css("background", "#fa1616");
    $("#msg").html("Your BMI is " + res + ", so you are obese. You don't need to eat for one year.");
  } else if (res >= 35) {
    $(".msg-box").css("background", "#cd0a0a");
    $("#msg").html("Your BMI is " + res + ", so you are extremely obese. Now stop yourself or you will die soon.");
  } else {
    $(".msg-box").css("background", "#fff3b2");
    $("#msg").html("Boo! Check your inputs and try again.");
  }
}
