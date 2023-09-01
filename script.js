document.getElementById("calculateBtn").addEventListener("click", function() {
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var resultDiv = document.getElementById("result");

  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);

  if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
    resultDiv.textContent = "Please enter valid weight and height.";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    category = "Obese (Class 1)";
  } else if (bmi >= 35 && bmi < 40) {
    category = "Obese (Class 2)";
  } else {
    category = "Obese (Class 3)";
  }

  resultDiv.textContent = "Your BMI is: " + bmi.toFixed(2) + " (" + category + ")";
});

document.getElementById("calculateCaloriesBtn").addEventListener("click", function() {
  var ageInput = document.getElementById("age");
  var genderSelect = document.getElementById("gender");
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var activityLevelSelect = document.getElementById("activityLevel");
  var caloriesResultDiv = document.getElementById("caloriesResult");

  var age = parseInt(ageInput.value);
  var gender = genderSelect.value;
  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);
  var activityLevel = activityLevelSelect.value;

  if (isNaN(age) || age <= 0 || isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    caloriesResultDiv.textContent = "Please enter valid age, height, and weight.";
    return;
  }

  var calories;

  if (gender === "male") {
    calories = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else if (gender === "female") {
    calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  } else {
    calories = 0;
  }

  switch (activityLevel) {
    case "sedentary":
      calories *= 1.2;
      break;
    case "lightlyActive":
      calories *= 1.375;
      break;
    case "moderatelyActive":
      calories *= 1.55;
      break;
    case "veryActive":
      calories *= 1.725;
      break;
    case "extraActive":
      calories *= 1.9;
      break;
    default:
      calories = 0;
      break;
  }

  caloriesResultDiv.textContent = "Your daily calorie intake is: " + calories.toFixed(2) + " calories.";
});