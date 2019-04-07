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
    let td5 = document.createElement("input");
    td1.appendChild(document.createTextNode(clients[i].id));
    tr.appendChild(td1);
    td2.appendChild(document.createTextNode(clients[i].firstName));
    tr.appendChild(td2);
    td3.appendChild(document.createTextNode(clients[i].lastName));
    tr.appendChild(td3);
    td4.appendChild(document.createTextNode(clients[i].phone));
    tr.appendChild(td4);
    td5.setAttribute('type', 'button');
    td5.setAttribute('name', 'el');
    td5.setAttribute('value', 'delete');
    let id = clients[i].id;
    td5.onclick = function () {
        console.log("sdfvs");
       // if (
        httpDelete("http://localhost:8080/api/v1/users", id);
            removeElement(tr.id);
          //  console.log("deleted");
       // }
       //  else {
       //      console.log("not deleted");
       //  }

    }
    tr.appendChild(td5);
    table.appendChild(tr);
}

function removeElement(id) {
    let elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}


