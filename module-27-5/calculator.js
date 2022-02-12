//  const buttons = document.getElementsByClassName('cal-button');
//  for (const button of buttons) {
//      button.addEventListener('click', function() {
//          const buttonText = button.innerText;
//          console.log(buttonText);
//          const buttonValue = parseFloat(buttonText);


//          const textField = document.getElementById('text-field');
//          textField.innerText = buttonValue;

//      })
//  }


// function vrariable() {
//     const number = document.getElementById('number-btn');
//     const numberText = number.innerText;
//     console.log(numberText);

//     const textField = document.getElementById('text-field');
//     textField.innerText = numberText;
// }

let result = document.getElementById('text-field');

function numShow(num) {
    console.log(num);
    result.value += num;
}

function operator(operator) {
    console.log(operator);
}

function clearDisplay() {
    result.value = '';
}

function del() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    let x = result.value;
    let y = eval(x);
    result.value = y;

}