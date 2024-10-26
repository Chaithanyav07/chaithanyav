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

    if (firstname.length < 5) {
        console.log("Failure");
        console.log("Firstname should be at least 5 characters long");
    } else {
        console.log("Username is valid");
        console.log("Success");
    }
    if (password.length<8){
        console.log("Password must contain atleast 8 characters");
    }
}