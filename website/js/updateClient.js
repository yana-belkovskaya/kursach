 window.addEventListener("load", function() {
                firstName = localStorage.getItem("firstName");
                localStorage.removeItem("firstName");
                document.getElementById("firstName").value = firstName;
				middleName = localStorage.getItem("middleName");
                localStorage.removeItem("middleName");
                document.getElementById("middleName").value = middleName;
lastName = localStorage.getItem("lastName");
                localStorage.removeItem("lastName");
                document.getElementById("lastName").value = lastName;
				 dob = localStorage.getItem("dob");
                localStorage.removeItem("dob");
                document.getElementById("dob").value = dob;
phone = localStorage.getItem("phone");
                localStorage.removeItem("phone");
                document.getElementById("phone").value = phone;
				address = localStorage.getItem("address");
                localStorage.removeItem("address");
                document.getElementById("address").value = address;
				passportNumber = localStorage.getItem("passportNumber");
                localStorage.removeItem("passportNumber");
                document.getElementById("passportNumber").value = passportNumber;

            })
			document.getElementById("updateForm").addEventListener('submit', updateClient);
function updateClient(e) {
    e.preventDefault();
    //console.log("add");
    let url = "http://localhost:8080/api/v1/users";

    let data = {};
    data.id = "0";
    data.firstName = document.getElementById("firstName").value;
    data.middleName = document.getElementById("middleName").value;
    data.lastName = document.getElementById("lastName").value;
	data.dob = document.getElementById("dob").value;
    data.phone = document.getElementById("phone").value;
	data.address = document.getElementById("address").value;
	data.passportNumber = document.getElementById("passportNumber").value;
    let json = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
	let id = localStorage.getItem("id");
	localStorage.removeItem("id");
    xhr.open("PUT", url+'/' + id, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    console.log(json);
    xhr.send(json);
    return false;
}