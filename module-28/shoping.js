function updateCaseNumber(condition, buttonId, price, total) {
    const caseNumber = document.getElementById(buttonId);
    let caseValue = caseNumber.value;

    if (condition == true) {
        caseValue = parseInt(caseValue) + 1;

    } else if (caseValue > 0) {
        caseValue = parseInt(caseValue) - 1;
    }
    caseNumber.value = caseValue;

    //update total case number
    const caseTotal = document.getElementById(total);
    caseTotal.innerText = caseValue * price;

    // calculate total
    calculateTotal()
}


//case for phone

document.getElementById('phone-plus').addEventListener('click', function() {
    updateCaseNumber(true, 'phone-number', 1219, 'phone-total');
})

document.getElementById('phone-minus').addEventListener('click', function() {
    updateCaseNumber(false, 'phone-number', 1219, 'phone-total');
})

//case for total
document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber(true, 'case-number', 59, 'case-total');
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber(false, 'case-number', 59, 'case-total');
})

// calculate total

function getInputValue(getId) {

    const produnctInput = document.getElementById(getId);
    const productNumber = parseInt(produnctInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone-number') * 1219;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = caseTotal + phoneTotal;
    const taxAmount = subTotal / 10; //10 presten tax ar jonno 
    const totalAmount = taxAmount + subTotal;
    // update input
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalAmount;
    console.log(phoneTotal, caseTotal);
}

// remove-input
/* document.getElementById('remove-input').addEventListener('click', function() {

    const clearFunction = document.getElementById('phone-number');
    clearFunction.value = '0';
    const clearFunction = document.getElementById('case-number');
    clearFunction.value = '0';
}) */