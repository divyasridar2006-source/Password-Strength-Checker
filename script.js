let password= document.getElementById("password");
let lengthCheck= document.getElementById("lengthCheck");
let uppercaseCheck= document.getElementById("uppercaseCheck");
let lowercaseCheck= document.getElementById("lowercaseCheck");
let numberCheck= document.getElementById("numberCheck");
let specialCheck= document.getElementById("specialCheck");

let strength= document.getElementById("strength");
let strengthProgress= document.getElementById("strengthProgress");

let clear= document.getElementById("clear");
password.addEventListener("input", function() {
 let p = password.value;
 let score=0;
    if (p.length >= 8) 
        {
        lengthCheck.innerHTML = "&#10004; Length";
        score++;    
} 
else {
        lengthCheck.innerHTML = "&#10006; Length";}
    if (p.match(/[A-Z]/)) 
        {
        uppercaseCheck.innerHTML = "&#10004; Uppercase";
        score++;
    } 
    else 
        {
        uppercaseCheck.innerHTML = "&#10006; Uppercase";}
    if (p.match(/[a-z]/)) 
        {
        lowercaseCheck.innerHTML = "&#10004; Lowercase";
        score++;
    } 
    else 
        {
        lowercaseCheck.innerHTML = "&#10006; Lowercase";}
    if (p.match(/[0-9]/)) 
        {
        numberCheck.innerHTML = "&#10004; Number";
        score++;
    } 
    else
         {
        numberCheck.innerHTML = "&#10006; Number";}
    if (p.match(/[^A-Za-z0-9]/)) 
        {
        specialCheck.innerHTML = "&#10004; Special Character";
        score++;
    }
     else 
        {
        specialCheck.innerHTML = "&#10006; Special Character";}
if (p.length === 0) 
    {
    strength.innerHTML = "";
    strengthProgress.style.width = "0%";
} 
else if (score <= 2) 
    {
    strength.innerHTML= "Weak";
    strengthProgress.style.width= "40%";
    }
    else if (score <= 4) 
    {
        strength.innerHTML= "Medium";
        strengthProgress.style.width= "70%";
    } else 
        {
        strength.innerHTML= "Strong";
        strengthProgress.style.width= "100%";
    }
});
clear.addEventListener("click", function() {
    password.value = "";
    lengthCheck.innerHTML= "Length";
    uppercaseCheck.innerHTML= "Uppercase";
    lowercaseCheck.innerHTML= "Lowercase";
    numberCheck.innerHTML= "Number";
    specialCheck.innerHTML= "Special Character";
    strength.innerHTML= "";
    strengthProgress.style.width= "0%";
});