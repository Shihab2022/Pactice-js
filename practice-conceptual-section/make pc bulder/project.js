document.getElementById('sixteenGB').addEventListener('click', function() {

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;

    const bestPrice = document.getElementById('best-price').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const delevarCost = document.getElementById('delivery-cost').innerText;


    const totalCost = parseFloat(bestPrice) + parseFloat(storageCost) + parseFloat(delevarCost) + parseFloat(memoryPrice);
    console.log(memoryCost);
    const total = document.getElementById('total-price');
    total.innerText = totalCost;
    console.log(totalCost);
})