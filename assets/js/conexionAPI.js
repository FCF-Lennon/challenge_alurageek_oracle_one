const url = "http://localhost:3001/productos";

async function obtenerProductos() {
    const conexion = await fetch(url);
    const dataJson = await conexion.json();
    return dataJson;
}

async function crearProducto(titulo, precio, imagen) {
    const conexion = await fetch(url, {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio:`${precio}`,
            imagen:imagen
        })
    });
    
    const dataJson = await conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al crear el producto :(");
    }

    return dataJson;
}

export const conexionAPI = {
    obtenerProductos, crearProducto
}




