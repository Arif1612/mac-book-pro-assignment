// Best Price
const price = document.getElementById('best-price');
const bestPrice = parseFloat(price.innerText);
// console.log(bestPrice);

// Total 
function countTotal(memoryCost) {
    const total = document.getElementById('total-price');
    let totalPrice = parseFloat(total.innerText);
    totalPrice = bestPrice;

    if (memoryCost == 180) {
        total.innerText = totalPrice + memoryCost;
    }
    if (memoryCost == 0) {
        total.innerText = totalPrice + memoryCost;
    }

}



// memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory-cost');
    const memory8gbCost = memoryCost.innerText = 0;
    countTotal(memory8gbCost);
})


document.getElementById('16gb-memory').addEventListener('click', function () {

    const memory16gb = document.getElementById('extra-memory-cost');
    const memory16gbCost = memory16gb.innerText = 180;
    countTotal(memory16gbCost);
})



