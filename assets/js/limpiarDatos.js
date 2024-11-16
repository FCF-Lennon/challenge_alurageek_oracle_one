

function limpiarFormulario(titulo, precio, imagen) {
    titulo.removeAttribute('required');
    precio.removeAttribute('required');
    imagen.removeAttribute('required');
    
    titulo.value = "";
    precio.value = "";
    imagen.value = "";

    titulo.setAttribute('required');
    precio.setAttribute('required');
    imagen.setoveAttribute('required');
}

