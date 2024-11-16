import { conexionAPI } from "/assets/js/conexionAPI.js";

const lista = document.querySelector("[data-lista-productos]");

function crearTarjetaProducto(titulo, precio, url) {
    const producto = document.createElement('l1');
    producto.className =  "producto__item";
    producto.innerHTML = `<img src="${url}" class="img__item-producto" alt="imagen del producto" >
                    <h2 class="titulo__item-producto">${titulo}</h2>
                    <div class="contenedor__precio-delete">
                        <p class="precio__item-producto ">$ ${precio}</p>
                        <img class="img__item-delete" src="/assets/imagenes/iconos/vector_delete.png" alt="imagen icono eliminar">
                    </div>`

    return producto;
}

async function renderizarProductos() {
    try {
        const obtenerListaProductos = await conexionAPI.obtenerProductos();
        obtenerListaProductos.forEach(producto => lista.appendChild(
            crearTarjetaProducto(
                producto.titulo, 
                producto.precio,
                producto.imagen
            )
        )); 
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocuurrido un problema con la conexión :(</h2>`
    }
}

renderizarProductos();








