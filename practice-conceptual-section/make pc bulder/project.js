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

getButtonId('sixteenGB', 'memory-cost', 200)
    // for ssd

document.getElementById('ssd2').addEventListener('click', function() {

    globalFunction('storage-cost', 500)
})