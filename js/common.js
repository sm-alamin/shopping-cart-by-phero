function getTextElementById(inputById){
    const getTextElement = document.getElementById(inputById);
    const getTextElementString = getTextElement.innerText;
    const getTextElementValue = parseInt(getTextElementString);
    return getTextElementValue;

}
function subTotal(){
    const getPhoneTotal = getTextElementById('total-phone-price');
    const getCaseTotal = getTextElementById('total-case-price')
    const subTotal = getPhoneTotal + getCaseTotal;

    const subTotalPrice = document.getElementById('sub-total');
    subTotalPrice.innerText = subTotal;

    const taxString = (subTotal * .10).toFixed(2);
    const taxAmount = parseFloat(taxString);
    const taxElement = document.getElementById('tax-total');
    taxElement.innerText = taxAmount;

    const total = subTotal + taxAmount;
    const totalPrice = document.getElementById('final-total');
    totalPrice.innerText = total;

}