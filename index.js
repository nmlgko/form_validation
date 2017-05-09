import { inputsArray } from "./arrays.js";
import { makeForm } from "./makeform.js";
import { validateForm } from "./validateForm.js";
import { main } from "./main.css";

makeForm( ".wrapper", "form", inputsArray );
validateForm( "form" );
