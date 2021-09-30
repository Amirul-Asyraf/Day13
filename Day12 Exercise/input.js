var amountInputOne = document.getElementById('amountInputOne');
var qtyInputOne = document.getElementById('qtyInputOne');

var amountInputTwo = document.getElementById('amountInputTwo');
var qtyInputTwo = document.getElementById('qtyInputTwo');

var amountInputThree = document.getElementById('amountInputThree');
var qtyInputThree = document.getElementById('qtyInputThree');

var amountInputFour = document.getElementById('amountInputFour');
var qtyInputFour = document.getElementById('qtyInputFour');

var subTotalOne = document.getElementById('subTotalOne');
var subTotalTwo = document.getElementById('subTotalTwo');
var subTotalThree = document.getElementById('subTotalThree');
var subTotalFour = document.getElementById('subTotalFour');

var subTotal1 = 0;
var subTotal2 = 0;
var subTotal3 = 0;
var subTotal4 = 0;

var total = document.getElementById('total');

// function callInputOne() {
//     subTotal1 = amountInputOne.value * qtyInputOne.value;
//     subTotalOne.innerHTML = subTotal1;
//     console.log(subTotal1);
// }

// function callInputTwo() {
//     subTotal2 = amountInputTwo.value * qtyInputTwo.value;
//     subTotalTwo.innerHTML = subTotal2;
// }

// function callInputThree() {
//     subTotal3 = amountInputThree.value * qtyInputThree.value;
//     subTotalThree.innerHTML = subTotal3;
// }

// function callInputFour() {
//     subTotal4 = amountInputFour.value * qtyInputFour.value;
//     subTotalFour.innerHTML = subTotal4;
// }

// function doCal() {
//     total.innerHTML = subTotal1 + subTotal2 + subTotal3 + subTotal4;
// }

//START OF SHORTER JS FILE
var invoiceHolder = document.getElementById('list-holder');
var addAnother = document.getElementById('add-New')

function addNew() {
    var createElement = document.createElement('div');
    createElement.classList.add('list');
    var itemEle = document.createElement('input');
    itemEle.onchange = validation;
    var qtyEle = document.createElement('input');
    qtyEle.onchange = validation;
    var subTotalEle = document.createElement('p');
    subTotalEle.innerHTML = 0;

    createElement.appendChild(itemEle);
    createElement.appendChild(qtyEle);
    createElement.appendChild(subTotalEle);

    invoiceHolder.appendChild(createElement);
}

sessionStorage.setItem('grandTotal', 0);
var grandTotal = sessionStorage.getItem('grandTotal');
console.log(grandTotal);

function validation() {
    // console.log(this.parentNode);

    var listNode = this.parentNode;
    var inputList = listNode.querySelectorAll('input');
    var subTotal = inputList[0].value * inputList[1].value;

    listNode.querySelector('p').innerHTML = subTotal;

    Number(grandTotal) += Number(subTotal);
    sessionStorage.setItem('grandTotal', grandTotal);
    console.log(grandTotal);
}