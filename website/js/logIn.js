

document.getElementById("logIn").addEventListener('submit', logIn);
function logIn(e){


e.preventDefault();
let logins = getLoginsFromServer();
function getLoginsFromServer() {
    return httpGet("http://localhost:8080/api/v1/login")
}
function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}
let login=document.getElementById("login").value;
let password=document.getElementById("password").value;
for (let i = 0; i < logins.length; i++) {
if(login==logins[i].login && password==logins[i].password){
console.log("login");
window.location="clients.html";
}
}}