deposits = getDepositsFromServer();
let id = localStorage.getItem("id");
	
function getDepositsFromServer() {
let id = localStorage.getItem("id");
	
    return httpGet("http://localhost:8080/api/v1/users/",id)
}

function httpGet(theUrl,id) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl+id+"/deposits", false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}
function httpDelete(theUrl, id,deposit_id) {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", theUrl + id+"/deposits/"+deposit_id, true);
    xhr.send(null);
    return xhr.readyState == 4 && xhr.status == "200";

}
table = document.getElementById("depositTable");


for (let i = 0; i < deposits.length; i++) {
    let tr = document.createElement("tr");
    tr.id=i;
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
	let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
	let td6 = document.createElement("td");
	let td7 = document.createElement("td");
	let td8 = document.createElement("input");
    let td9 = document.createElement("input");
	td1.appendChild(document.createTextNode(deposits[i].deposit_id));
    tr.appendChild(td1);
    td2.appendChild(document.createTextNode(deposits[i].currency));
    tr.appendChild(td2);
	td3.appendChild(document.createTextNode(deposits[i].depositType));
    tr.appendChild(td3);
    td4.appendChild(document.createTextNode(deposits[i].startDate));
    tr.appendChild(td4);
	td5.appendChild(document.createTextNode(deposits[i].finishDate));
    tr.appendChild(td5);
    td6.appendChild(document.createTextNode(deposits[i].sum));
    tr.appendChild(td6);
	td7.appendChild(document.createTextNode(deposits[i].percent));
    tr.appendChild(td7);
	td8.setAttribute('type', 'button');
    td8.setAttribute('name', 'del_dep');
    td8.setAttribute('value', 'Закрыть');
	 td8.setAttribute('class', 'btn');
td9.setAttribute('type', 'button');
    td9.setAttribute('name', 'update_dep');
    td9.setAttribute('value', 'Изменить');
td9.setAttribute('class', 'btn');
let deposit_id=deposits[i].deposit_id;
td8.onclick = function () {
        console.log("sdfvs");
       let id = localStorage.getItem("id");
	
        httpDelete("http://localhost:8080/api/v1/users/", id,deposit_id);
            removeElement(tr.id);
         

    }
    tr.appendChild(td8);
	
	td9.onclick=function(){
window.location="updateDeposit.html";
localStorage.setItem("deposit_id", deposits[i].deposit_id);
localStorage.setItem("currency", deposits[i].currency);
localStorage.setItem("depositType", deposits[i].depositType);
localStorage.setItem("startDate", deposits[i].startDate);
localStorage.setItem("finishDate", deposits[i].finishDate);
localStorage.setItem("sum", deposits[i].sum);
localStorage.setItem("percent", deposits[i].percent);
}
	 tr.appendChild(td9);
	 table.appendChild(tr);
	 }
	 function removeElement(id) {
    let elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

