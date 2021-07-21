const username = document.getElementById("username");
const password = document.getElementById("password");
const eye = document.getElementById("eye");


eye.addEventListener("click", function(e){
    if(password.getAttribute("type")=="password"){
        password.setAttribute("type","text");
        eye.style.color="green"
    }
    else{
        password.setAttribute("type","password");
        eye.style.color="grey"
    }
});


function validate(callback){
    var retvalue=true;
    const usernamevalue = username.value;
    const passwordvalue = password.value;
    
    if(usernamevalue.trim() ==""){
        setErrorFor(username,"This field cannot be blank")
        retvalue=false;
    }
    else if(usernamevalue!="admin"){
        setErrorFor(username,"Invalid format")
        retvalue=false;
    }
    else{
        setSuccessFor(username);
    }

    if(passwordvalue.trim() ==""){
        setErrorFor(password,"This field cannot be blank")
        retvalue=false;
    }
    else if(passwordvalue!=12345){
        setErrorFor(password,"Invalid format")
        retvalue=false;
    }
    else{
        setSuccessFor(password)
    }
    if(retvalue==true){
        callback();
    }
}
function redirect()
{
    window.open("main.html");
}
    
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    return true;
}