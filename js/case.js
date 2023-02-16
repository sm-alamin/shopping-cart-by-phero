function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function calculateTotalCasePrice(newCaseNumber){
    const totalPrice =  newCaseNumber * 59 ;
    const caseTotalPrice = document.getElementById('total-case-price');
    caseTotalPrice.innerText = totalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    calculateTotalCasePrice(newCaseNumber);
    subTotal();
    

})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    calculateTotalCasePrice(newCaseNumber);
    subTotal();
    
})


