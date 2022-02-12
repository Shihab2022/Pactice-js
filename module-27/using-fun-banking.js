function getValueFromInput() {

    const dipositeInput = document.getElementById('deposit-input');
    const inpitNewValue = dipositeInput.value;
    const dipositeinputValue = parseFloat(inpitNewValue);

    dipositeInput.value = '';
    return dipositeinputValue;
}

function previosBalence() {

    const dipositetotal = document.getElementById('deposit-total').innerText;
    const dipositetotalValue = parseFloat(dipositetotal);
    return dipositetotalValue;

}

function balenseTotal() {
    const preBalence = document.getElementById('balance-total').innerText;

    const preBalenseValue = parseFloat(preBalence);
    console.log(preBalenseValue);
    return preBalenseValue;

}

function addTwoNumber(num1, num2) {
    const totalTwoNumber = num1 + num2;
    return totalTwoNumber;
}

function dipositeBalence() {
    const dipositetotal = document.getElementById('deposit-total');

    dipositetotal.innerText = addTwoNumber(getValueFromInput(), previosBalence())

    const preBalence = document.getElementById('balance-total');
    preBalence.innerText = addTwoNumber(getValueFromInput(), balenseTotal())


}