function getValue(giveId) {
    const delevarCost = document.getElementById(giveId).innerText;
    return delevarCost;
}

// function 

function globalFunction(getId, price) {
    const memoryCost = document.getElementById(getId);
    memoryCost.innerText = price;

    const bestPrice = getValue('best-price');
    const storageCost = getValue('storage-cost');
    const memoryPrice = getValue('memory-cost');
    const delevarCost = getValue('delivery-cost');


    const totalCost = parseFloat(bestPrice) + parseFloat(storageCost) + parseFloat(delevarCost) + parseFloat(memoryPrice);
    const total = document.getElementById('total-price');
    total.innerText = totalCost;
}

function getButtonId(getButtonId, getCost, price) {
    document.getElementById(getButtonId).addEventListener('click', function() {
        globalFunction(getCost, price);

    })
}

getButtonId('sixteenGB', 'memory-cost', 200) //buttton ID ; jay jai gai add korbo tar id ;koto price//
getButtonId('eightGB', 'memory-cost', 0)

// storage-cost

getButtonId('ssd1', 'storage-cost', 0)
getButtonId('ssd2', 'storage-cost', 350)
getButtonId('ssd3', 'storage-cost', 700)
getButtonId('paid-delivery', 'delivery-cost', 20)
getButtonId('free-delivery', 'delivery-cost', 0)
    // for ssd

document.getElementById('apply-btn').addEventListener('click', function() {

    const inputText = document.getElementById('promo-input');
    const inputValue = inputText.value;
    const total = document.getElementById('total-price');
    const preValue = parseFloat(total.innerText);
    const currentValue = preValue - (preValue * .2);
    const cuponCode = 'mdShihabUddin';

    if (inputValue == cuponCode) {
        total.innerText = currentValue;
    } else {
        alert('Your promo code is not currect')
    }
    inputText.value = '';
})