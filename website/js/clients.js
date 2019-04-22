clients = getUsersFromServer();

function getUsersFromServer() {
    return httpGet("http://localhost:8080/api/v1/users")
}

function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function httpDelete(theUrl, id) {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", theUrl + '/' + id, true);
    xhr.send(null);
    return xhr.readyState == 4 && xhr.status == "200";

}

table = document.getElementById("clientTable");


for (let i = 0; i < clients.length; i++) {
    let tr = document.createElement("tr");
    tr.id = "client-" + i;
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
	let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
	let td6 = document.createElement("td");
	let td7 = document.createElement("td");
	let td8 = document.createElement("td");
    let td9 = document.createElement("input");
    let td10 = document.createElement("input");
	let td11 = document.createElement("input");
    td1.appendChild(document.createTextNode(clients[i].id));
    tr.appendChild(td1);
    td2.appendChild(document.createTextNode(clients[i].firstName));
    tr.appendChild(td2);
	td3.appendChild(document.createTextNode(clients[i].middleName));
    tr.appendChild(td3);
    td4.appendChild(document.createTextNode(clients[i].lastName));
    tr.appendChild(td4);
	td5.appendChild(document.createTextNode(clients[i].dob));
    tr.appendChild(td5);
    td6.appendChild(document.createTextNode(clients[i].phone));
    tr.appendChild(td6);
	td7.appendChild(document.createTextNode(clients[i].address));
    tr.appendChild(td7);
	td8.appendChild(document.createTextNode(clients[i].passportNumber));
    tr.appendChild(td8);
    td9.setAttribute('type', 'button');
    td9.setAttribute('name', 'el');
    td9.setAttribute('value', 'Удалить');
	 td9.setAttribute('class', 'btn');
td10.setAttribute('type', 'button');
    td10.setAttribute('name', 'update');
    td10.setAttribute('value', 'Изменить');
td10.setAttribute('class', 'btn');
td11.setAttribute('type', 'button');
    td11.setAttribute('name', 'deposits');
    td11.setAttribute('value', 'Депозиты');
td11.setAttribute('class', 'btn');
    let id = clients[i].id;
let firstName = clients[i].firstName;
let lastName =clients[i].lastName;
let phone=clients[i].phone;
let middleName=clients[i].middleName;
let dob=clients[i].dob;
let address=clients[i].address;
let passportNumber=clients[i].passportNumber;
    td9.onclick = function () {
        console.log("sdfvs");
       
        httpDelete("http://localhost:8080/api/v1/users", id);
            removeElement(tr.id);
         

    }
    tr.appendChild(td9);
td10.onclick=function(){
window.location="updateClient.html";
localStorage.setItem("id", id);
localStorage.setItem("firstName", firstName);
localStorage.setItem("middleName", middleName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("dob", dob);
localStorage.setItem("phone", phone);
localStorage.setItem("address", address);
localStorage.setItem("passportNumber", passportNumber);
}
tr.appendChild(td10);
td11.onclick=function(){
window.location="clientDeposits.html";
localStorage.setItem("id", id);}
tr.appendChild(td11);
    table.appendChild(tr);
}

function removeElement(id) {
    let elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}


