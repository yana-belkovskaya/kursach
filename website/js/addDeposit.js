
document.getElementById("addDepForm").addEventListener('submit', addDeposit);
function addDeposit(e) {
    e.preventDefault();
    console.log("add");
	let id = localStorage.getItem("id");
    let url = "http://localhost:8080/api/v1/users/"+id+"/deposits";

    let data = {};
    data.deposit_id = "0";
    data.currency = document.getElementById("currency").value;
	data.depositType = document.getElementById("type").value;
	data.startDate = document.getElementById("dos").value;
	data.finishDate = document.getElementById("dof").value;
	data.sum=document.getElementById("sum").value;
    data.percent = document.getElementById("percent").value;
	
    let json = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    console.log(json);
    xhr.send(json);
    return false;
}