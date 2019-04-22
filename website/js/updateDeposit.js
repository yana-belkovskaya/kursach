window.addEventListener("load", function() {
				depositType = localStorage.getItem("depositType");
                localStorage.removeItem("depositType");
                document.getElementById("type").value = depositType;
currency = localStorage.getItem("currency");
                localStorage.removeItem("currency");
                document.getElementById("currency").value = currency;
				 startDate = localStorage.getItem("startDate");
                localStorage.removeItem("startDate");
                document.getElementById("dos").value = startDate;
finishDate = localStorage.getItem("finishDate");
                localStorage.removeItem("finishDate");
                document.getElementById("dof").value = finishDate;
				sum = localStorage.getItem("sum");
                localStorage.removeItem("sum");
                document.getElementById("sum").value = sum;
				percent = localStorage.getItem("percent");
                localStorage.removeItem("percent");
                document.getElementById("percent").value = percent;

            })
			document.getElementById("addDepForm").addEventListener('submit', updateDeposit);
function updateDeposit(e) {
    e.preventDefault();
    console.log("add");
	let id = localStorage.getItem("id");
    
let deposit_id = localStorage.getItem("deposit_id");
    localStorage.removeItem("deposit_id");
	let url = "http://localhost:8080/api/v1/users/"+id+"/deposits/"+deposit_id;
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
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    console.log(json);
    xhr.send(json);
    return false;
}