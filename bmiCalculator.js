function bmiCalculator(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmiCalc = Math.round(weight / (height**2));

    document.getElementById("result").innerHTML = "Your BMI is: " + bmiCalc;
}


