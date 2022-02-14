let table = document.querySelector('table');
let inputName = document.querySelector('#inputName');
let inputDate = document.querySelector('#inputDate');
let inputAmount = document.querySelector('#inputAmount');

let btn = document.querySelector('#add-expense')
btn.addEventListener('click', addTr);

function addTr() {
    let cont1 = document.createTextNode(inputName.value);
    let cont2 = document.createTextNode(inputDate.value);
    let cont3 = document.createTextNode(inputAmount.value);
    let cont4 = document.createTextNode('X');

    let btn = document.createElement('button');
    btn.appendChild(cont4);
    btn.className = 'X';
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.appendChild(cont1);
    td2.appendChild(cont2);
    td3.appendChild(cont3);
    td4.appendChild(btn);

    let tr = document.createElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);


    table.appendChild(tr);
}

// let trForBtn = document.querySelectorAll('table');

function logthat(e) {
    if (e.target.classList.contains('X')) {
        let removeElement = e.target.parentNode.parentNode.rowIndex;
        table.deleteRow(removeElement);
    }
}
table.addEventListener(
    'click',
    logthat
)