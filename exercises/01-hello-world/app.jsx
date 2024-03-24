//Importa (traemos) la biblioteca React, ahora podemos utilizar JSX
import React from "react";

//Importa(traemos) la biblioteca ReactDom, sirve para poner contenido igual que innerHTML
import ReactDOM from "react-dom";

//QUÉ: La variable output contiene el HTML que se va a mostrar en el navegador (renderizar)
let output = (
	<span>
		James is <strong>12</strong> years old
	</span>
);

//DÓNDE: Dónde se mostrará el contenido hecho por react, en este caso la variable output
const myDiv = document.querySelector("#myDiv");

//qué  //dónde
ReactDOM.render(output, myDiv);
//Básicamente le decimos que queremos añadir contenido (output) en myDiv
