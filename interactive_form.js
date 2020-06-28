// set name and email to variables
const usernameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
// Set focus on Name field
$('#name').focus();


// Job role section
// set variables to target Job Role to hide textbox
const $other = $("#other-title").hide();

// create function to drop text box for other if selected, and hidden if not needed
$('#title').change(function(){
	if ($('#title option:selected').val() === "other") {
		$('#other-title').show();
	} else {
		$('#other-title').hide();
	}
});


// T-shirt section

const shirtDesign = document.querySelector('#design');
const shirtColor = document.querySelector('#color');
const jsPuns = document.querySelector(`optgroup[label=JS-Puns]`);
const jsHeart = document.querySelector(`optgroup[label=JS-Heart]`);
const shirtColorDiv = document.getElementById('colors-js-puns');

// Hide shirt color label until t-shirt design theme is selected
shirtColorDiv.style.display = "none";

// create an event listener to change options list with conditional statement
shirtDesign.addEventListener('change', () => {
  // If the user selects "Select Theme" nothing should display
  if(shirtDesign.options[shirtDesign.selectedIndex].value === "Select Theme") {
      shirtColor.appendChild(jsPuns);
      shirtColor.appendChild(jsHeart);
      shirtColorDiv.style.display = "none";
  }
  // If the user selects "Theme - JS Puns" then the color menu should only display colors - Cornflower Blue, Dark Slate Grey, Gold
  else if(shirtDesign.options[shirtDesign.selectedIndex].value === "js puns") {
      shirtColorDiv.style.display = "block";
      shirtColor.appendChild(jsPuns);
      shirtColor.removeChild(jsHeart);
      shirtColorDiv.style.display = "block";
  }
  // If the user selects "Theme - I ♥ JS" then the color menu should only display colors - Tomato, Steel Blue, Dim Grey
  else if (shirtDesign.options[shirtDesign.selectedIndex].value === "heart js") {
      shirtColorDiv.style.display = "block";
      shirtColor.appendChild(jsHeart);
      shirtColor.removeChild(jsPuns);
      shirtColorDiv.style.display = "block";
  }
})



// Activities section

	// declare all variables with jquery to grab each activites
	var jsFrameworks = $("input[name='js-frameworks']");
	var jsLibraries = $("input[name='js-libs']");
	var express = $("input[name='express']");
	var nodeJS = $("input[name='node']");

  	// when activity is checked, total cost of activity is added and updated while disabling activities
	// interfering with each other's schedule
	var totalCost = 0;
	$('.activities').append('<div id="total"></div>');
	var updateCost = function (cost) {
		totalCost += cost;
		document.getElementById("total").innerHTML = "Total: $" + totalCost;
	};
	$("input[name='all']").change(function () {
		if ($(this).prop("checked")) {
			updateCost(200);
		} else {
			updateCost(-200);
		}
	});
	jsFrameworks.change(function () {
		if ($(this).prop("checked")) {
			express.prop("disabled", true);
			express.parent().addClass("disabled");
			express.parent().append('<span class="unavailable"> - Unavailable</span>');
			updateCost(100);
		} else {
			express.prop("disabled", false);
			express.parent().removeClass("disabled");
			express.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});
	jsLibraries.change(function () {
		if ($(this).prop("checked")) {
			nodeJS.prop("disabled", true);
			nodeJS.parent().addClass("disabled");
			nodeJS.parent().append('<span class="unavailable"> - Unavailable</span>');
			updateCost(100);
		} else {
			nodeJS.prop("disabled", false);
			nodeJS.parent().removeClass("disabled");
			nodeJS.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});
	express.change(function () {
		if ($(this).prop("checked")) {
			jsFrameworks.prop("disabled", true);
			jsFrameworks.parent().addClass("disabled");
			jsFrameworks.parent().append('<span class="unavailable"> - Unavailable</span>');
			updateCost(100);
		} else {
			jsFrameworks.prop("disabled", false);
			jsFrameworks.parent().removeClass("disabled");
			jsFrameworks.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});
	nodeJS.change(function () {
		if ($(this).prop("checked")) {
			jsLibraries.prop("disabled", true);
			jsLibraries.parent().addClass("disabled");
			jsLibraries.parent().append('<span class="unavailable"> - Unavailable</span>');
			updateCost(100);
		} else {
			jsLibraries.prop("disabled", false);
			jsLibraries.parent().removeClass("disabled");
			jsLibraries.parent().find('.unavailable').remove();
			updateCost(-100);
		}
	});

	// while activity is checked, total cost is updated
	$("input[name='build-tools']").change(function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});
	$("input[name='npm']").change(function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});


// Payment Section

// set credit card as default
$('#payment').val("credit card");
// hide info for paypal and bitcoin until their options show
$('#paypal, #bitcoin').hide();
// conditional for each payment showing the appropriate options
$('#payment').val("credit card");
$('#payment').change(function(){
	if ($('#payment option:selected').val() === "paypal") {
		$('#credit-card, #bitcoin').hide();
		$('#paypal').show();
	} else if ($('#payment option:selected').val() === "bitcoin") {
		$('#credit-card, #paypal').hide();
		$('#bitcoin').show();
	} else {
		$('#credit-card').show();
		$('#paypal, #bitcoin').hide();
	}
});

//Form Validation

$('#name, #mail, #cc-num, #zip, #cvv, #other-field').keyup(function (){
	if ( $(this).val() === "")  {
		$(this).removeClass('success');
		$(this).addClass('error');
	} else {
		$(this).removeClass('error');
		$(this).addClass('success');
	}
});

var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var creditCard = /^(\d{4}-){3}\d{4}$|^(\d{4} ){3}\d{4}$|^\d{16}$/;
var zipCode = /^(\d{5}(?:\-\d{4})?)$/;
var errorMessage ="";
$('form').prepend('<p id="error-message"></p>');
$('#error-message').hide();
$('form').submit(function (e){
	e.preventDefault();
	if ( $('#name').val() === "" ) {
		console.log("Error!");
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please ensure you have entered all required fields.";		
		document.getElementById('name').style.borderColor = "red";
		document.getElementById('mail').style.borderColor = "red";
		document.getElementById('activities').style.color = "red";
		document.getElementById('cc-num').style.borderColor = "red";
		document.getElementById('zip').style.borderColor = "red";
		document.getElementById('cvv').style.borderColor = "red";
		$('#name').addClass('error');
		$('#name').focus();	
	} else if ( !emailAddress.test($('#mail').val()) ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please enter a valid email.";
		document.getElementById('name').style.borderColor = "";
		document.getElementById('mail').style.borderColor = "red";
		$('#mail').focus();
	} else if ( $(".activities > label > input:checked").length === 0 ) {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2> Please select at least one activity.";
		document.getElementById('mail').style.borderColor = "";
		document.getElementById('activities').style.color = "red";
		$('.activities').focus();
	} else if ( $("#payment").val() === "select_method" )  {
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please select a payment method.";
		$('#payment').focus();
	} else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
		document.getElementById('activities').style.color = "";
		document.getElementById('cc-num').style.borderColor = "red";
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a valid credit card number.";
		$('#cc-num').focus();
	} else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
		document.getElementById('cc-num').style.borderColor = "";
		document.getElementById('zip').style.borderColor = "red";
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter your zip code.";
		$('#zip').focus();
	} else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
		document.getElementById('zip').style.borderColor = "";
		document.getElementById('cvv').style.borderColor = "red";
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
		$('#cvv').focus();
	} else {	
		$("html, body").animate({scrollTop: 0}, "slow");
		errorMessage = "";
		alert("Success!");
		alert("Thanks for registering! We'll see you at the Con!");
		document.getElementById('cvv').style.borderColor = "";
	}

	document.getElementById('error-message').innerHTML = errorMessage;
	$('#error-message').show();
});
