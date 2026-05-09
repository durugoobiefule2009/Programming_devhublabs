function lifeInWeeks() {
    var age = document.getElementById("age").value;
    var time = 90 - age;
    var days = 365 * time;
    var weeks = 52 * time;
    var months = 12 * time;

    document.getElementById("result").innerHTML = "You have " + days + " days, " + weeks + " weeks, and " + months + " months left.";
}

