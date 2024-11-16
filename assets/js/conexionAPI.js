const url = "http://localhost:3001/productos";

async function obtenerProductos() {
    const conexion = await fetch(url);
    const dataJson = await conexion.json();
    return dataJson;
}

export const conexionAPI = {
    obtenerProductos
}



