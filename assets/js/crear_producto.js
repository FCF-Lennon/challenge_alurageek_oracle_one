import { conexionAPI } from "/assets/js/conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function optenerDataFormulario(evento) {
    
    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-url-imagen]').value;

    try {
        await conexionAPI.crearProducto(titulo, precio, imagen);
        alert("El producto fue creado con exito :)");
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => optenerDataFormulario(evento));
