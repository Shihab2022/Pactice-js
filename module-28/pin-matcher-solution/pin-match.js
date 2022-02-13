function generatePin() {
    let randomNumber = Math.round(Math.random() * 100000);
    let randomString = randomNumber + '';
    if (randomString.length == 5) {
        const getInput = document.getElementById('display-pin');
        getInput.value = randomNumber;
    } else {
        return generatePin();
    }
}