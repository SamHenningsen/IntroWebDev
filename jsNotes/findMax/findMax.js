function findMax(fullArray){
    var maxNumber;
    for (var arrayPosition = 0; arrayPosition < fullArray.length; arrayPosition++){
        if (arrayPosition == 1 || fullArray[arrayPosition] > maxNumber){
            maxNumber = fullArray[arrayPosition];
        }
    }
    return maxNumber;
}