function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function calculateTotalPhonePrice(newPhoneNumber){
    const totalPrice =  newPhoneNumber * 1219 ;
    const phoneTotalPrice = document.getElementById('total-phone-price');
    phoneTotalPrice.innerText = totalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    calculateTotalPhonePrice(newPhoneNumber);
    subTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    calculateTotalPhonePrice(newPhoneNumber);
    subTotal();
})


