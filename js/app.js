// Your scripts here

// Get a refernce to DOM elements
const bill = document.getElementById('amount');
const percent = document.getElementById('percent');
const tip = document.getElementById('tip');
const people = document.getElementById('people');
const tipEach = document.getElementById('tipEach');
const each = document.getElementById('each');
const total = document.getElementById('total');
const calculate = document.getElementById('calculate');


// Set the content and style of an element
tip.innerHTML = '0.00';
total.innerHTML = '0.00';
each.innerHTML = '0';
tipEach.innerHTML = '0.00';
tipEach.innerHTML = '0.00';

calculate.onclick = (e) => {
 const percentReal = parseInt(percent.value) / 100;
 const billReal = parseInt(bill.value);
 const peopleReal = parseInt(people.value);
 const tipReal = percentReal * billReal;
 const billPlusTip = tipReal + billReal
 tip.innerHTML = tipReal.toFixed(2); // parseInt(tipReal)
 total.innerHTML = billPlusTip.toFixed(2);
 const eachBill = billPlusTip / peopleReal
 each.innerHTML = eachBill.toFixed(2)
}
