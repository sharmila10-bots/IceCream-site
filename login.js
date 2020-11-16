function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "Anusha" && password == "1234"){
		alert("Login successsfully & Today's offer code Choco22");
	}
	else
	{
		alert("Invalid password & Username");
	}
}