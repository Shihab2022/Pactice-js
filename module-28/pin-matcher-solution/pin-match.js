function generatePin() {
    let randomNumber = Math.round(Math.random() * 100000);
    let randomString = randomNumber + ''; //length bar korar jonno number kay string ay convert kora hoay say
    if (randomString.length == 5) {
        const getInput = document.getElementById('display-pin');
        getInput.value = randomNumber;
    } else {
        return generatePin(); //jay hatu amra 5 digit ar kom kono number nibo na tai function kay abar return korlam
    }
}

// add typing section to

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText; //aykany 'event bubol' use koray lora hoay say //jar maddon ay vitor ar sokol text dibay //bistarito jany nity hobay

    const calsInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {

        if (number == 'C') {
            calsInput.value = '';
        }

    } else {
        const previousNumber = calsInput.value;
        const newNumber = previousNumber + number; //ayta add na korlY sudu aktai number print korbay but ay aknay valu gulo string thakia aktar satay arakta jok korlay tara string ar moto pasa pasi bosay jaby
        calsInput.value = newNumber;
    }

})