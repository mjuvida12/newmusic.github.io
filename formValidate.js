function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement)
{
	// Check if the text field has a value
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

function validate(e)
{
	//	Determine if the form has errors
	hideErrors();
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}
	else{
		alert("Thanks for voting!")
	}
	return true;
	
}

function formHasErrors(){
	var errorFlag = false;
	

	var requiredTextFields = ["fullname","email"];

	for(var i=0; i<requiredTextFields.length; i++){
		var textField = document.getElementById(requiredTextFields[i]);
		
		if(!formFieldHasInput(textField)){
			document.getElementById(requiredTextFields[i] + "_error").style.display = "block";

			// Determine if this is the first field in error
			if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
	}

	// Email
	var email = document.getElementById("email").value;
	// Email Validation
	var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
	var emailValue = document.getElementById("email").value;
	if(email == ""){
		document.getElementById("email_error").style.display = "block";
		if(!errorFlag){
			textField.focus();
			textField.select();
		}
		errorFlag = true;	
	}else if(!emailRegex.test(emailValue)){
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag){
			textField.focus();
			textField.select();
		}
		errorFlag = true;
	}

	// Country
	if(document.getElementById("country").value == ""){
	   document.getElementById("country_error").style.display = "block";
		if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
	}

	

	// Song
	if(document.getElementById("song").value == ""){
	   document.getElementById("song_error").style.display = "block";
		if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
	}

	// Artist
	if(document.getElementById("artist").value == ""){
	   document.getElementById("artist_error").style.display = "block";
		if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
	}
	return errorFlag;
}

function hideErrors()
{
	var errorFields = document.getElementsByClassName("error");

	for(var i=0; i<errorFields.length; i++){
		errorFields[i].style.display = "none";

	}
}

function load()
{
	hideErrors();
	document.getElementById("voteform").addEventListener("submit", validate, false);
}

document.addEventListener("DOMContentLoaded", load, false);
