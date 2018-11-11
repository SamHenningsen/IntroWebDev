function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["evenForm"].elements.length; loopCounter++){
        if (document.forms["evenForm"].elements[loopCounter].parentElement.parentElement.className.indexOf("has-") != -1){

            document.forms["evenForm"].elements[loopCounter].parentElement.parentElement.className = "form-group";
        }
    }
}

function evensCountBy(startNumber,endNumber,countBy){
    var finalString = "Here are the even numbers between " + startNumber +
                        " and " + endNumber + " by " + countBy + "'s:";
    startNumber = Number(startNumber);
    endNumber =  Number(endNumber);
    countBy = Number(countBy);
    for (var listEntry = startNumber; listEntry < endNumber; listEntry = listEntry + countBy) {
        if (listEntry % 2 == 0){
            finalString = finalString + "\n" + listEntry;
        }
        listEntry = Number(listEntry);
    }
    return finalString;
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["evenForm"]["num1"].value;
    var num2 = document.forms["evenForm"]["num2"].value;
    var step = document.forms["evenForm"]["step"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["evenForm"]["num1"].parentElement.parentElement.className = "form-group has-error";
        document.forms["evenForm"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["evenForm"]["num2"].parentElement.parentElement.className = "form-group has-error";
        document.forms["evenForm"]["num2"].focus();
        return false;
    }
    if (num2 <= num1) {
        alert("Ending Number must be greater than Starting Number")
        document.forms["evenForm"]["num2"].parentElement.parentElement.className = "form-group has-error";
        document.forms["evenForm"]["num2"].focus();
        return false;
    }
    if (step == "" || isNaN(step) || step <= 0) {
        alert("Step must be filled in with a positive number.");
        document.forms["evenForm"]["step"].parentElement.parentElement.className = "form-group has-error";
        document.forms["evenForm"]["step"].focus();
        return false;
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("results").innerText = evensCountBy(num1,num2,step);
    
    return false;
}