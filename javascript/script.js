// var name=
// function fnName(para1,para2){
//     console.log(para1+para2);
// }
// fnName(3,4);

// var username=gmit;
// var password=12345;

// function fnValidate(){
//     let Usernameid = document.getElementById("Username").value;
//     let Passwordid = document.getElementById("password").value;
//     console.log(Usernameid,Passwordid);
// }

// if(Usernameid===username && Passwordid===password){


// }

function fnValidateSignupForm(){
    let firstname=document.getElementById("Fname").value;
    let lastname=document.getElementById("Lname").value;
    let email=document.getElementById("Email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("password").value; 
	if(firstname.length>5 && lastname.length>5){
		return "valid";
	}
	else{
		return "invalid";
	}	
}