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