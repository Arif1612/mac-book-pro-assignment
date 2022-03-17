const bestPrice = document.getElementById('best-price')
let bestPriceDigit = parseFloat(bestPrice.innerText); //digit a 1299 tk best price


totalPrice = document.getElementById('total-price');
let totalPriceDigit = parseFloat(totalPrice.innerText);
// total price ta digit a rakse r ki



// Total Cost Calculation
function memoryCostValue(memoryCostDigit) {


    if (memoryCostDigit == 0) {
        totalPriceDigit = bestPriceDigit + memoryCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }
    if (memoryCostDigit == 180) {
        totalPriceDigit = bestPriceDigit + memoryCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }

}
function delivaryChargeValue(DelivaryCostDigit) {
    if (DelivaryCostDigit == 0) {
        totalPriceDigit = bestPriceDigit + DelivaryCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }
    if (DelivaryCostDigit == 20) {
        totalPriceDigit = bestPriceDigit + DelivaryCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }

}

function storageCostValue(sotrageCostDigit) {
    if (sotrageCostDigit == 0) {
        totalPriceDigit = bestPriceDigit + sotrageCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }
    if (sotrageCostDigit == 100) {
        totalPriceDigit = bestPriceDigit + sotrageCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }
    if (sotrageCostDigit == 180) {
        totalPriceDigit = bestPriceDigit + sotrageCostDigit;
        totalPrice.innerText = totalPriceDigit;
    }

}

// memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = 0;
    memoryCostDigit = parseFloat(memoryCost.innerText);// memory cost k digit a nilam
    memoryCostValue(memoryCostDigit);

});
document.getElementById('16gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = 180;
    memoryCostDigit = parseFloat(memoryCost.innerText);// memory cost k digit a nilam
    memoryCostValue(memoryCostDigit);
});


// storageCost 
document.getElementById('256gb-ssd').addEventListener('click', function () {
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = 0;
    storageCostDigit = parseFloat(storageCost.innerText);// memory cost k digit a nilam
    storageCostValue(storageCostDigit);
});
document.getElementById('512gb-ssd').addEventListener('click', function () {
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = 100;
    storageCostDigit = parseFloat(storageCost.innerText);// memory cost k digit a nilam
    storageCostValue(storageCostDigit);
});

document.getElementById('1tb-ssd').addEventListener('click', function () {
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = 180;
    storageCostDigit = parseFloat(storageCost.innerText);// memory cost k digit a nilam
    storageCostValue(storageCostDigit);
});

// Delivery Charge
document.getElementById('free-deflivery').addEventListener('click', function () {
    const delivaryCost = document.getElementById('delivery-charge');
    delivaryCost.innerText = 0;
    delivaryCostDigit = parseFloat(delivaryCost.innerText);// memory cost k digit a nilam
    delivaryChargeValue(delivaryCostDigit);

});

document.getElementById('delivery-cost').addEventListener('click', function () {
    const delivaryCost = document.getElementById('delivery-charge');
    delivaryCost.innerText = 20;
    delivaryCostDigit = parseFloat(delivaryCost.innerText);// memory cost k digit a nilam
    delivaryChargeValue(delivaryCostDigit);
});


