clients = getUsersFromServer();
function getUsersFromServer(){
    return httpGet("http://localhost:8080/api/v1/users")}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
table = document.getElementById("clientTable");


for(var i=0;i<clients.length;i++){
     var tr = document.createElement("tr");
   var  td1 = document.createElement("td");
   var  td2 = document.createElement("td");
var  td3 = document.createElement("td");
td1.appendChild(document.createTextNode(clients[i].firstName));
tr.appendChild(td1);
td2.appendChild(document.createTextNode(clients[i].lastName));
tr.appendChild(td2);
td3.appendChild(document.createTextNode(clients[i].phone));
tr.appendChild(td3);

table.appendChild(tr);}