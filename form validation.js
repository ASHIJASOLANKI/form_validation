// ***********************************validate first name*************************************


$("#firstnameCheck").hide();
let firstnameError = true;
$("#firstname").on("focusout",function(){
    validateFirstName();
});

function validateFirstName() {
    let firstnamereg = /^[A-Za-z]*$/;
    let firstnameValue = $("#firstname").val();
    if (firstnameValue.length == "") {
        $("#firstnameCheck").show();
        firstnameError = false;
        return false;
    } else if (firstnamereg.test(firstnameValue)) {
        
        $("#firstnameCheck").hide();
    } else {
        $("#firstnameCheck").show();
        $("#firstnameCheck").html("** First name should be alphabetic");
        firstnameError = false;
        return false;
    }
}




// ***********************************validate last name *************************************

$("#lastnameCheck").hide();
let lastnameError = true;
$("#lastname").on("focusout",function(){
    validateLastName();
});

function validateLastName() {
    let lastnamereg = /^[A-Za-z\s]*$/;
    let lastnameValue = $("#lastname").val();
    if (lastnameValue.length == "") {
        $("#lastnameCheck").show();
        lastnameError = false;
        return false;
    } else if (lastnamereg.test(lastnameValue)) {
        $("#lastnameCheck").hide();
        return true;
    } else {
        $("#lastnameCheck").show();
        $("#lastnameCheck").html("** Last name should be alphabetic");
        lastnameError = false;
        return false;
    }
}




// ***********************************Validate E-mail*************************************


$("#emailCheck").hide();
let emailError = true;
$("#email").on("focusout", function(){
    validateEmail();
});

function validateEmail() {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,7})?$/;
    let emailValue = $("#email").val();
    if (emailValue.length == ""){
        $("#emailCheck").show();
        emailError = false;
        return false;
    } else if (emailReg.test(emailValue)) {
        $("#emailCheck").hide();
    }
    else {
        $("#emailCheck").show();
        $("#emailCheck").html("Invalid E-mail address");
        emailError = false;
        return false;
    }
}




// ***********************************Validate phone number*************************************


$("#mobilenumberCheck").hide();
let mobilenumberError = true;
$("#mobilenumber").on("focusout", function(){
    validateMobilenumber();
});

function validateMobilenumber() {
    let mobilenumberValue = $("#mobilenumber").val();
    if (mobilenumberValue == "") {
        $("#mobilenumberCheck").show();
    } else if (mobilenumberValue.length != 10) {
        $("#mobilenumberCheck").show();
        $("#mobilenumberCheck").html("Mobile number must contain 10 digits.");
    } else if (isNaN(mobilenumberValue)){
        $("#mobilenumberCheck").show();
        $("#mobilenumberCheck").html("Mobile number should be in digits.");
    } else {
        $("#mobilenumberCheck").hide();
    }
}



// ***********************************Validate Password*************************************


$("#passwordCheck").hide();
let passwordError = true;
$("#password").on("focusout", function () {
	validatePassword();
});
function validatePassword() {
    let passwordValue = $("#password").val();
    let strongPassword = new RegExp(/^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/);;
	if (passwordValue.length == "") {
		$("#passwordCheck").show();
		passwordError = false;
		return false;
	} else if (passwordValue < 8){
        $("#passwordCheck").show();
        $("#passwordCheck").html("**Weak password");
		passwordError = false;
		return false;
    }else if (strongPassword.test(passwordValue)){
        $("#passwordCheck").hide();
        return true;
    } else {
        $("#passwordCheck").show();
        $("#passwordCheck").html("**Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
		$("#passwordCheck").css("color", "red");
        return true;
	}
}




// ***********************************Validate Confirm Password*************************************

$("#confirmPasswordCheck").hide();
let confirmPasswordError = true;
$("#confirmPassword").on("focusout", function () {
	validateConfirmPassword();
});
function validateConfirmPassword() {
	let confirmPasswordValue = $("#confirmPassword").val();
	let passwordValue = $("#password").val();
	if  (confirmPasswordValue.length == "") {
		$("#confirmPasswordCheck").show();
		passwordError = false;
		return false;
	} else if (passwordValue != confirmPasswordValue) {
		$("#confirmPasswordCheck").show();
		$("#confirmPasswordCheck").html("**Password didn't Match");
		$("#confirmPasswordCheck").css("color", "red");
		confirmPasswordError = false;
		return false;
	} else {
	    $("#confirmPasswordCheck").hide();
	}
}




// ***********************************submit button*************************************
$("#submitbutton").on("click", function(){
    validateFirstName();
    validateLastName();
    validateEmail();
    validateMobilenumber();
    validatePassword();
    validateConfirmPassword();
    if(
        firstnameError == false ||
        lastnameError == false ||
        emailError == false ||
        mobilenumberError == false ||
        passwordError == false ||
        confirmPasswordError == false
    ) {
        return false;
    } else {
        return true;
    }
});