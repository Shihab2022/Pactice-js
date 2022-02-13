function updateCaseNumber(condition) {
    const caseNumber = document.getElementById('case-number');
    let caseValue = caseNumber.value;

    if (condition == true) {
        caseValue = parseInt(caseValue) + 1;

    } else if (caseValue > 0) {
        caseValue = parseInt(caseValue) - 1;
    }
    caseNumber.value = caseValue;

    //update total case number
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseValue * 59;
}
document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber(false);
})