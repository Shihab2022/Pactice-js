function getValueFromInput(inputValue) {

    const dipositeInput = document.getElementById(inputValue);
    const inpitNewValue = dipositeInput.value;
    const dipositeinputValue = parseFloat(inpitNewValue);
    dipositeInput.value = '';
    return dipositeinputValue;
}

function previosBalence(previosBalence) {

    const dipositetotal = document.getElementById(previosBalence).innerText;
    const dipositetotalValue = parseFloat(dipositetotal);
    return dipositetotalValue;

}

function addTwoNumber(num1, num2) {
    const totalTwoNumber = num1 + num2;
    return totalTwoNumber;
}

// for deposite 

function dipositeBalence() {
    const dipositeTotal = document.getElementById('deposit-total');
    const getValueInputFrom = getValueFromInput('deposit-input');
    const previousDiposite = previosBalence('deposit-total');
    dipositeTotal.innerText = addTwoNumber(getValueInputFrom, previousDiposite)
    const preBalence = document.getElementById('balance-total');
    const previousBalece = previosBalence('balance-total');
    preBalence.innerText = addTwoNumber(previousBalece, getValueInputFrom)
}

function withdrawBalence() {


    const withdrawTotal = document.getElementById('withdraw-total');
    const getValueInputFrom = getValueFromInput();
    const previousWithdraw = previosBalence();
    withdrawTotal.innerText = addTwoNumber(getValueInputFrom, previousWithdraw);
    console.log(withdrawTotal);

}