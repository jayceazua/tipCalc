// Your scripts here

// Get a refernce to DOM elements
const bill = document.getElementById('amount');
const percent = document.getElementById('percent');
const tip = document.getElementById('tip');
const people = document.getElementById('people');
const total = document.getElementById('total');
const calculate = document.getElementById('calculate');

// Each Person
const tipEach = document.getElementById('tipEach');
const eachTotal = document.getElementById('eachTotal');

// Set the content and style of an element
tip.innerHTML = '0.00';
total.innerHTML = '0.00';

eachTotal.innerHTML = '0.00';
tipEach.innerHTML = '0.00';

calculate.onclick = (e) => {
    const billReal = parseInt(bill.value);
    const percentReal = parseInt(percent.value) / 100;
    const peopleReal = parseInt(people.value);
    const tipReal = percentReal * billReal;
    const billPlusTip = tipReal + billReal

    tip.innerHTML = tipReal.toFixed(2);
    total.innerHTML = billPlusTip.toFixed(2);
    /* DONE ABOVE */
    const eachBill = billPlusTip / peopleReal
    const eachTip = tipReal / peopleReal;
    tipEach.innerHTML = eachTip.toFixed(2)
    eachTotal.innerHTML = eachBill.toFixed(2)



};
