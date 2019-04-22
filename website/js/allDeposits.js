alldeposits = getAllDepositsFromServer();
	
function getAllDepositsFromServer() {
    return httpGet("http://localhost:8080/api/v1/deposits")
}

function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

table = document.getElementById("allDepositTable");


for (let i = 0; i < alldeposits.length; i++) {
    let tr = document.createElement("tr");
    tr.id=i;
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
	let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
	let td6 = document.createElement("td");
	let td7 = document.createElement("td");
	
	td1.appendChild(document.createTextNode(alldeposits[i].deposit_id));
    tr.appendChild(td1);
    td2.appendChild(document.createTextNode(alldeposits[i].currency));
    tr.appendChild(td2);
	td3.appendChild(document.createTextNode(alldeposits[i].depositType));
    tr.appendChild(td3);
    td4.appendChild(document.createTextNode(alldeposits[i].startDate));
    tr.appendChild(td4);
	td5.appendChild(document.createTextNode(alldeposits[i].finishDate));
    tr.appendChild(td5);
    td6.appendChild(document.createTextNode(alldeposits[i].sum));
    tr.appendChild(td6);
	td7.appendChild(document.createTextNode(alldeposits[i].percent));
    tr.appendChild(td7);
	 table.appendChild(tr);
	 }
	