function addTwoNumbers(firstNumber,secondNumber){
    var Added = firstNumber + secondNumber;
    var varKind = typeof Added;
    if ((typeof Added) == 'number'){
        console.log(Added);
    } else {
        console.log("Please call in two numbers.")
    }
}