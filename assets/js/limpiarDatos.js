import { conexionAPI } from "/assets/js/conexionAPI.js";

const titulo = document.querySelector('[data-titulo]');
const precio = document.querySelector('[data-precio]');
const imagen = document.querySelector('[data-url-imagen]');
const botonLimpiarFormulario = document.querySelector('.boton__limpiar');

async function manejarEventoEliminar(evento, id, producto) {
   
    evento.preventDefault();
    
    try {
        await conexionAPI.eliminarProducto(id); // eliminamos el producto de la BD
        producto.remove(); // eliminamos el producto desde DOM
    } catch (e) {
        alert(e)   
    }
}

function limpiarFormulario(...inputs) {

    
    botonLimpiarFormulario.addEventListener('click', evento => {
    
        evento.preventDefault();
       
        inputs.forEach(input => {
            input.removeAttribute('required');
            input.value = "";
            input.setAttribute('required', '');
            });
        }
    );
}


limpiarFormulario(titulo, precio, imagen);


export const eventoEliminar = {
    manejarEventoEliminar,
}





