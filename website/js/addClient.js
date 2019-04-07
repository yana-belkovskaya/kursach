console.log("init");

document.getElementById("addForm").addEventListener('submit', addClient);
function addClient(e) {
    e.preventDefault();
    console.log("add");
    let url = "http://localhost:8080/api/v1/users";

    let data = {};
    data.id = "0";
    data.firstName = document.getElementById("firstName").value;
    data.lastName = document.getElementById("lastName").value;
    data.phone = document.getElementById("phone").value;
    let json = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    console.log(json);
    xhr.send(json);
    return false;
}