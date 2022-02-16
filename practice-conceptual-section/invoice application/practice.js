document.getElementById('detail-submit-btn').addEventListener('click', function() {

    const getInput = document.getElementById('buyer-details-input');
    const getValue = getInput.value;


    const display = document.getElementById('buyer-info');
    display.innerText = getValue;
    console.log(getValue)

    getInput.value = '';
})

document.getElementById('add-details-btn').addEventListener('click', function() {

    const getName = document.getElementById('item-name-input');
    const getPrice = document.getElementById('item-price-input');
    const quantityInput = document.getElementById('item-quantity-input');
    const displayInput = document.getElementById('info-table');

    const totalValue = parseFloat(getPrice.value) * parseFloat(quantityInput.value);

    if (
        getName.value == "" ||
        getPrice.value < 0 ||
        quantityInput.value < 0 ||
        getPrice.value == "" ||
        quantityInput.value == ""
    ) {
        alert('Please enter all values')
        return;
    }


    let tr = createElement('tr');
    let td1 = createElement('td');
    let td2 = createElement('td');
    let td3 = createElement('td');
    let td4 = createElement('td');

    td1.innerText = getName.value;
    td2.innerText = getPrice.value;
    td3.innerText = quantityInput.value;
    td4.innerText = totalValue;

    td4.classList.add("item-total");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    displayInput.appendChild(tr);


    // totalCalculation();
    getName.value = '';
    getPrice.value = '';
    quantityInput.value = '';




    totalCalculation()


})

function totalCalculation() {
    const subTotal = calculateSubTotal();

    const subTotalToDisplay = document.getElementById("sub-total");
    subTotalToDisplay.innerText = subTotal;

    const tax = subTotal * 0.2;

    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("grand-total").innerText = subTotal + tax;
    document.getElementById("grand-total-2").innerText = subTotal + tax;
}

function calculateSubTotal() {
    let subTotal = 0;

    const costs = document.getElementsByClassName("item-total");

    for (const cost of costs) {
        const price = parseInt(cost.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}

function createElement(inputTag) {

    let tagName = document.createElement(inputTag);
    return tagName;
}