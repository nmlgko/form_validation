/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inputsArray; });
var inputsArray = [ "name", "phone" ];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeForm;
function makeForm( formWrap, idForm, array ){
	
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateForm;
function validateForm( idForm ){

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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrays_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__makeform_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validateForm_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__main_css__);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__makeform_js__["a" /* makeForm */])( ".wrapper", "form", __WEBPACK_IMPORTED_MODULE_0__arrays_js__["a" /* inputsArray */] );
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__validateForm_js__["a" /* validateForm */])( "form" );


/***/ })
/******/ ]);