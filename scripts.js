function  validation(){
alert("the form has been submitted successfully!");
var name = document.getElementById("name").value;  
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var enquiry = document.getElementById("enquiry").value;
var error_message = document.getElementById("error_message");
var text;

error_message.style.padding = "10px";

if (name.length < 5){
    text ="please enter valid name";
    error_message.innerHTML=text;
    return false;

}
if(isNaN(number)  || number.length !=10){
    text ="please enter valid number";
    error_message.innerHTML=text;
    return false;
}
if(email.indexOf("@")== -1  || email.length <6){
    text ="please enter valid email";
    error_message.innerHTML=text;
    return false;
}
if(textarea.length<= 140){
    text ="please enter more than 140 characters";
    error_message.innerHTML=text;
    return false;
}
alert("form submitted successfuly!")
return true;
}

