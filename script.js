/* Ocultar div del texto */
const divMostrarTexto = document.querySelector(".mostrar-texto");
const divMostrarImagen = document.querySelector(".mostrar-imagen");
const buttonPegar = document.getElementById("iPegar");
const buttonCopiar = document.getElementById("btnCopiar");
const entradaTexto = document.getElementById("eTexto");
const salidaTexto = document.getElementById("sTexto");

divMostrarTexto.style.visibility = "collapse";

/* Función para ocultar imagen y boton pegar */

function ocultarCorrespondiente() {

    let Texto = document.getElementById("sTexto").value;

    if (Texto == "") {
        divMostrarTexto.style.visibility = "collapse";
        divMostrarImagen.style.visibility = "visible";
        buttonPegar.style.visibility = "visible";
    } else {
          divMostrarImagen.style.visibility = "collapse";
          divMostrarTexto.style.visibility = "visible";
          entradaTexto.scrollIntoView();
    }
}

/*Verificar el texto*/

function verificarTexto() {
    let salidaTexto = document.getElementById("eTexto").value;
    if(/[A-ZÁÉÍÓÚáéíóú]/.test(salidaTexto)) {
        alert("El texto contiene mayúsculas o acentos.");
        return false; // interrumpe la ejecución de la función
    }
}

/* Función para encriptar */

function encriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let salidaTexto = document.getElementById("eTexto").value;
    /* Encriptar texto */
    let salidaTextoEncriptado = salidaTexto.replace(/e/g, 'enter');
    salidaTextoEncriptado = salidaTextoEncriptado.replace(/i/g, 'ime');
    salidaTextoEncriptado = salidaTextoEncriptado.replace(/a/g, 'ai');
    salidaTextoEncriptado = salidaTextoEncriptado.replace(/o/g, 'ober');
    salidaTextoEncriptado = salidaTextoEncriptado.replace(/u/g, 'ufat');

    document.getElementById("sTexto").innerHTML = salidaTextoEncriptado;
    ocultarCorrespondiente();
}

/* Función para desencriptar */

function desencriptarTexto() {

    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let salidaTexto = document.getElementById("eTexto").value;
    /* desencriptar texto */
    let salidaTextoDesencriptado = salidaTexto.replace(/enter/g, 'e');
    salidaTextoDesencriptado = salidaTextoDesencriptado.replace(/ime/g, 'i');
    salidaTextoDesencriptado = salidaTextoDesencriptado.replace(/ai/g, 'a');
    salidaTextoDesencriptado = salidaTextoDesencriptado.replace(/ober/g, 'o');
    salidaTextoDesencriptado = salidaTextoDesencriptado.replace(/ufat/g, 'u');

    document.getElementById("sTexto").innerHTML = salidaTextoDesencriptado;
    ocultarCorrespondiente();
}

/* Función para copiar */

function copiarTexto() {

    let copiarTexto = document.getElementById("sTexto");
    let botonPegar = document.getElementById("iPegar").style.display = "flex";

    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(copiarTexto.textContent);
    buttonCopiar.textContent="copiado"
    
    if (copiarTexto == ""){
        botonPegar();
    }
  }

 