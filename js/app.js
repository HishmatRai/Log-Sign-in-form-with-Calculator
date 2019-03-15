var email = document.getElementById("EmailId");
var password = document.getElementById("PasswordID");
var extra = document.getElementById("ExtraDiv");

function Singun(){
var user = localStorage.getItem("user");
console.log(user)


var userSto = false;
if (user === null){
    user = [];
}
else{
    user = JSON.parse(user);
    console.log(user);
}
 var userObj= {
email : email.value,
password : password.value
 }
var matchLast = email.value;
matchLast = matchLast.slice(matchLast.length-4);
if(matchLast !== ".com"){
    alert("Please Enter Correct Email !")
}
else{
 for (var i = 0 ; i < user.length; i++){
    if(user[i].email === email.value){
        userSto = true;
    } 

    }
    if(userSto === true){
        extra.innerHTML = "You Already Sign Up !";
        email.value = "";
        password.value = "";
    }
 
    else{
        user.push(userObj);
        user = JSON.stringify(user);
        user = localStorage.setItem("user", user)
        email.value = "";
        password.value = "";
        extra.innerHTML = "You are Sign Up Successfully !"

 }
}
}








// Login

function Login(){
var user = localStorage.getItem("user");
console.log(user);
if(user === null){
    user = [];
}
else{
    user = JSON.parse(user);
}

var logOut = {
    email:email.value,
    password:password.value
}

var userCondition = false;
for (var i = 0; i < user.length; i++){
    if(user[i].email === email.value){
        userCondition = true;
    }
}
    if(userCondition === false){
        extra.innerHTML = "Login Faild !"
    }
    else{
        // extra.innerHTML = "Login Successfully !";
        window.location.href = "ContactFrom_v13/index.html";
localStorage.setItem("user1",JSON.stringify(logOut));
        email.value = "";
        password.value = "";

    
   
    }

}





