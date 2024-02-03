'use strict'

const billNum = Number(document.querySelector('#bill-value').value);
const numPeople = Number(document.querySelector('#num-people').value);
const tip1 = document.querySelector('#tip1');
const tip2 = document.querySelector('#tip2');
const tip3 = document.querySelector('#tip3');
const tip4 = document.querySelector('#tip4');
const tip5 = document.querySelector('#tip5');
const total = document.querySelector('.total');
const individual = document.querySelector('.individual');
const reset = document.querySelector('#reset');

tip1.addEventListener('click', function() {
    const billNum = Number(document.querySelector('#bill-value').value);
    const numPeople = Number(document.querySelector('#num-people').value);
    const total = document.querySelector('.total');
    const individual = document.querySelector('.individual');
    if(billNum >= 100 && numPeople >=1) {
        const billTotal = billNum * 0.05
        total.textContent = billTotal
        const perPerson = billTotal / numPeople;
        individual.textContent = perPerson;     
    } else {
        alert('Please input a bill value of 1000 and above and number of people should be 1 or more');
    }
})

tip2.addEventListener('click', function() {
    const billNum = Number(document.querySelector('#bill-value').value);
    const numPeople = Number(document.querySelector('#num-people').value);
    const total = document.querySelector('.total');
    const individual = document.querySelector('.individual');
    if(billNum >= 100 && numPeople >=1) {
        const billTotal = billNum * 0.10
        total.textContent = billTotal
        const perPerson = billTotal / numPeople;
        individual.textContent = perPerson;     
    } else {
        alert('Please input a bill value of 1000 and above and number of people should be 1 or more');
    }
})

tip3.addEventListener('click', function() {
    const billNum = Number(document.querySelector('#bill-value').value);
    const numPeople = Number(document.querySelector('#num-people').value);
    const total = document.querySelector('.total');
    const individual = document.querySelector('.individual');
    if(billNum >= 100 && numPeople >=1) {
        const billTotal = billNum * 0.15
        total.textContent = billTotal
        const perPerson = billTotal / numPeople;
        individual.textContent = perPerson;     
    } else {
        alert('Please input a bill value of 1000 and above and number of people should be 1 or more');
    }
})

tip4.addEventListener('click', function() {
    const billNum = Number(document.querySelector('#bill-value').value);
    const numPeople = Number(document.querySelector('#num-people').value);
    const total = document.querySelector('.total');
    const individual = document.querySelector('.individual');
    if(billNum >= 100 && numPeople >=1) {
        const billTotal = billNum * 0.20
        total.textContent = billTotal
        const perPerson = billTotal / numPeople;
        individual.textContent = perPerson;     
    } else {
        alert('Please input a bill value of 1000 and above and number of people should be 1 or more');
    }
})


tip5.addEventListener('click', function() {
    const billNum = Number(document.querySelector('#bill-value').value);
    const numPeople = Number(document.querySelector('#num-people').value);
    const total = document.querySelector('.total');
    const individual = document.querySelector('.individual');
    if(billNum >= 100 && numPeople >=1) {
        const billTotal = billNum * 0.25
        total.textContent = billTotal
        const perPerson = billTotal / numPeople;
        individual.textContent = perPerson;     
    } else {
        alert('Please input a bill value of 1000 and above and number of people should be 1 or more');
    }
})

reset.addEventListener('click', function() {
    total.textContent = '0.00';
    individual.textContent = '0.00';
    document.querySelector('#bill-value').value = null
    document.querySelector('#bill-value').placeholder = 0
    document.querySelector('#num-people').value = null
    document.querySelector('#num-people').placeholder = 0
    
    

})


