let password = document.getElementById("password");

let lengthCheck = document.getElementById("lengthCheck");
let uppercaseCheck = document.getElementById("uppercaseCheck");
let lowercaseCheck = document.getElementById("lowercaseCheck");
let numberCheck = document.getElementById("numberCheck");
let specialCheck = document.getElementById("specialCheck");


password.addEventListener("input", function() {

    let p = password.value;


    if (p.length >= 8) {
        lengthCheck.innerHTML = "&#10004; Length";
    } else {
        lengthCheck.innerHTML = "&#10006; Length";
    }


    if (p.match(/[A-Z]/)) {
        uppercaseCheck.innerHTML = "&#10004; Uppercase";
    } else {
        uppercaseCheck.innerHTML = "&#10006; Uppercase";
    }


    if (p.match(/[a-z]/)) {
        lowercaseCheck.innerHTML = "&#10004; Lowercase";
    } else {
        lowercaseCheck.innerHTML = "&#10006; Lowercase";
    }


    if (p.match(/[0-9]/)) {
        numberCheck.innerHTML = "&#10004; Number";
    } else 
        {
        numberCheck.innerHTML = "&#10006; Number";
    }


    if (p.match(/[^A-Za-z0-9]/)) {
        specialCheck.innerHTML = "&#10004; Special Character";
    } else {
        specialCheck.innerHTML = "&#10006; Special Character";
    }

});