// get Elements html output
var fname = document.getElementById('fname');
var errfname = document.getElementById('errfname');

var lname = document.getElementById('lname');
var errlname = document.getElementById('errlname');

email = document.getElementById('email');
var erremail = document.getElementById('erremail');

var paspassword = document.getElementById('password');
var errpassword = document.getElementById('errpassword');

var repassworld = document.getElementById('repassword');
var errrepassword = document.getElementById('errrepassword');

//  validation 
// first name valid==========================================================================
function subm() {
    if (fname.value == "") {
        fname.style.border = " 1px solid red";
        fname.focus();
        errfname.innerHTML = "please enter your first name";
        return false;
    }
    if (lname.value == "") {
        lname.style.border = " 1px solid red";
        lname.focus();
        errlname.innerHTML = "please enter your last name";
        return false;
    }
    if (email.value == "") {
        email.style.border = " 1px solid red";
        email.focus();
        erremail.innerHTML = "please enter your email";
        return false;
    }
    // password name
    if (password.value == "") {
        password.style.border = " 1px solid red";
        password.focus();
        errpassword.innerHTML = "please enter your password";
        return false;
    }
    if (password.value.length <= 5) {
        password.style.border = " 1px solid red";
        password.focus();
        errpassword.innerHTML = "please enter your password minimum 6 chars";
        return false;
    }
    if (repassword.value == "") {
        repassword.style.border = " 1px solid red";
        repassword.focus();
        errrepassword.innerHTML = "please enter your password and comfirm password don't match";
        return false;
    }
    if (password.value != repassword.value) {
        repassword.style.border = " 1px solid red";
        repassword.focus();
        errrepassword.innerHTML = "please enter your password and comfirm password don't match";
        return false;
    }
    
}
// remove error aftter enter text================================================================
function valid() {
    if (fname.value != "") {
        fname.style.border = "1px solid green";
        errfname.innerHTML = "";
    }
    if (lname.value != "") {
        lname.style.border = "1px solid green";
        errlname.innerHTML = "";
    }
    if (email.value != "") {
        email.style.border = "1px solid green";
        erremail.innerHTML = "";
    }
    if (password.value != "") {
        password.style.border = "1px solid green";
        errpassword.innerHTML = "";
    }
    if (repassword.value != "") {
        repassword.style.border = "1px solid green";
        errrepassword.innerHTML = "";
    }
}
fname.addEventListener('blur', valid);
lname.addEventListener('blur', valid);
email.addEventListener('blur', valid);
password.addEventListener('blur', valid);
repassword.addEventListener('blur', valid);