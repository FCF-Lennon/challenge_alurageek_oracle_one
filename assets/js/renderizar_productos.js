import { conexionAPI } from "./conexionAPI.js";
import { eventoEliminar } from "./limpiarDatos.js";

const lista = document.querySelector("[data-lista-productos]");

function crearTarjetaProducto(titulo, precio, url, id) {
    
    const producto = document.createElement('li');
    
    producto.className =  "producto__item";
    producto.innerHTML = `<img src="${url}" class="img__item-producto" alt="imagen del producto" >
                    <h2 class="titulo__item-producto">${titulo}</h2>
                    <div class="contenedor__precio-delete">
                        <p class="precio__item-producto ">$ ${precio}</p>
                        <button class="boton__eliminar-producto" data-id="${id}">
                            <img class="img__item-delete" src="assets/imagenes/iconos/vector_delete.png" alt="imagen icono eliminar">
                        </button>    
                    </div>`

    const botonEliminarProducto = producto.querySelector('.boton__eliminar-producto');                
    botonEliminarProducto.addEventListener('click', evento => eventoEliminar.manejarEventoEliminar(evento, id, producto));

    return producto;
}

async function renderizarProductos() {
    try {
        const obtenerListaProductos = await conexionAPI.obtenerProductos();
        obtenerListaProductos.forEach(producto => lista.appendChild(
            crearTarjetaProducto(
                producto.titulo, 
                producto.precio,
                producto.imagen,
                producto.id
            )
        )); 
    } catch {
        lista.innerHTML = `<h2 class="modal__renderizacion-productos">Ha ocurrido un problema con la conexión :(</h2>`
    }
}

renderizarProductos();








