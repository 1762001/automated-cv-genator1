//alert("loading");
function addNewWEField() {
    //console.log("Adding new field");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", "Enter Here");

    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");


    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewEQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder", "Enter Here");

    newNode.setAttribute("rows", 3);

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");


    eqOb.insertBefore(newNode, eqAddButtonOb);


}

//generating CV

function generateCV() {
    let namefield = document.getElementById('namefield').value;

    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;

    let contactField = document.getElementById('contactField').value;
    document.getElementById("contactT").innerHTML = contactField;

    let addressField = document.getElementById('addressField').value;
    document.getElementById("addressT").innerHTML = addressField;

    let fbField = document.getElementById('fbField').value;
    document.getElementById("fbT").innerHTML = fbField;

    let instaField = document.getElementById('instaField').value;
    document.getElementById("instaT").innerHTML = instaField;

    let LinkField = document.getElementById('LinkField').value;
    document.getElementById("LinkedT").innerHTML = LinkField;

    let objectiveField = document.getElementById('objectiveField').value;
    document.getElementById("objectiveT").innerHTML = objectiveField;

    let wes = document.getElementsByClassName('weField');

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    let eqs = document.getElementsByClassName('eqField');

    let str1 = "";

    for (let e of eqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("eqT").innerHTML = str1;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';


}

// print CV

function printCV() {

    window.print();

}