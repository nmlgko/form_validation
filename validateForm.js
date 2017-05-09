export function validateForm( idForm ){

	var myForm = document.getElementById( idForm );
	var inputName = myForm.querySelector( "input[name = 'name']" );
	var inputPhone = myForm.querySelector( "input[name = 'phone']");

	myForm.addEventListener( "submit", function( e ){
		e.preventDefault();

		var validName = /^[a-zA-Zа-я\s]+$/.test( inputName.value );
		var validPhone = /^[0-9\+\-()\s]{10,18}$/.test( inputPhone.value );

		resetError( inputName );
		resetError( inputPhone );

		if( !inputName.value ){
	    showError( inputName, "invalid", "Enter your name" );
		} else {
			if( !validName ){
				showError( inputName, "invalid", "Name must contain only letters" );
	    } else {
	    	console.log( inputName.value );
	    }
		}

		if( !inputPhone.value ){
	    showError( inputPhone, "invalid", "Enter your phone number" );
		} else {
			if( !validPhone ){
				showError( inputPhone, "invalid", "Phone must contain 12 numbers, for example +38(099) 123-45-67" );
			}
			else{
				console.log( inputPhone.value );
				alert( "Data sent!" );
			}
		}

	}, false);

	function showError( el, status, innerHtml ) {
		var span = document.createElement("span");
		span.className = "errorMess";
		el.parentElement.insertBefore( span, el.nextSiblingElement);
		el.className = status;
		span.innerHTML = innerHtml;
	}

	function resetError( el ){
		if( el.className === "invalid" ){
			el.className = "";
			var errorEl = myForm.querySelector( ".errorMess" );
			errorEl.parentElement.removeChild( errorEl );
		}
	}
}
