console.log("login.js loaded");

var userLogin= {username:"usercanfail", 
				password:"timeislimitid"};




// var userName=""
// var userPassword=""


// while(){
// 	 var name =userLogin.username;
// 	prompt("Please enter password " + name);
// 	var passWord=userLogin[i].userPassword;

// 	for(i=0; i<3 && i<userLogin.length; i++){
// 		passWord;
// 		if(userLogin[i].password !== passWord){
// 		alert("Wrong pasword, please try again");

// 		}
// 	}
// }


var name =userLogin.username;
var question = prompt("Please enter password " + name);

if(userLogin.password === question){
	alert("welcome");
}else{
	//alert("wrong password");
	var question2=prompt("Wrong password, try again");
	if(userLogin.password=== question2){
		alert("welcome");
	}else{
		//alert("wrong password, try again");
		var question3=prompt("wrong password, try again");
		if(userLogin.password===question3){
			alert("welcome");
		}else{
			alert("wrong password, try again");
		}
	}

}


