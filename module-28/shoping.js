document.getElementById('case-plus').addEventListener('click', function() {

    const caseNumber = document.getElementById('case-number');
    const caseValue = caseNumber.value;
    const caseUpdate = parseInt(caseValue) + 1;
    caseNumber.value = caseUpdate;
})

document.getElementById('case-minus').addEventListener('click', function() {

    const caseNumber = document.getElementById('case-number');
    const caseValue = caseNumber.value;
    const caseUpdate = parseInt(caseValue) - 1;
    caseNumber.value = caseUpdate;
})