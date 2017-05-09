export function makeForm( formWrap, idForm, array ){
	
	var myWrapper = document.querySelector( formWrap );
	var newForm = document.createElement( "form" );
	var newButton = document.createElement( "button" );

  myWrapper.appendChild(newForm);

  for( var i = 0; i < array.length; i++ ){
		var newDiv = document.createElement( "div" );
		var newInput = document.createElement( "input" );
  	var attrVal = array[ i ];
  	
  	newForm.appendChild( newDiv );
  	newDiv.appendChild( newInput );
  	newDiv.className = "row";
  	newInput.setAttribute( "name", array[ i ] );
    newInput.setAttribute( "placeholder", "Enter your " + array[ i ] );
  }

  newForm.appendChild(newButton);
	newButton.setAttribute( "type", "submit" );
	newButton.innerHTML = "Submit";
	newForm.id = idForm;
  
}