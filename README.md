# Challenge Alurageek - Oracle One

![AluraGeek web](/assets/imagenes/web/screenshot_web.png)

AluraGeek es una aplicación web diseñada para gestionar productos en una tienda virtual. Permite listar, agregar y eliminar productos de manera dinámica. La aplicación está pensada para facilitar la gestión de productos mediante una interfaz simple y moderna, que se conecta a una API para realizar operaciones CRUD sobre los productos.

## Características

- **Listar productos**: Muestra una lista dinámica de productos disponibles en la tienda.
- **Agregar productos**: Permite a los usuarios agregar nuevos productos con un título, precio y URL de imagen.
- **Eliminar productos**: Los usuarios pueden eliminar productos de la lista.

## Tecnologías utilizadas

- **HTML**: Estructura básica de la aplicación.
- **CSS**: Estilos visuales de la interfaz de usuario, incluyendo un diseño responsive.
- **JavaScript (Vanilla)**: Para la interactividad de la aplicación y las operaciones con la API.
- **API REST**: Comunicación con un servidor para obtener, crear y eliminar productos.
  
## Estructura del Proyecto

El proyecto consta de los siguientes archivos principales:

- **index.html**: Contiene la estructura HTML principal de la aplicación.
- **style.css**: Estilos visuales de la aplicación.
- **normalize.css**: Reset CSS para asegurar una presentación uniforme en todos los navegadores.
- **assets/js/renderizar_productos.js**: Script para renderizar los productos de la lista obtenida desde la API.
- **assets/js/limpiarDatos.js**: Script para limpiar el formulario de entrada de datos.
- **assets/js/crear_producto.js**: Script para crear nuevos productos y enviarlos a la API.

## Cómo funciona

1. **Renderización de productos**: Al cargar la página, la aplicación realiza una solicitud `GET` a la API para obtener la lista de productos y mostrarlos en el DOM. Si la conexión falla, se muestra un mensaje de error.
2. **Agregar productos**: Los usuarios pueden agregar productos a la lista a través de un formulario, que se envía a la API mediante una solicitud `POST`.
3. **Eliminar productos**: Cada producto tiene un botón para ser eliminado. Al hacer clic en él, la aplicación envía una solicitud `DELETE` a la API y elimina el producto tanto de la base de datos como del DOM.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/FCF-Lennon/challenge_alurageek_oracle_one
## Instalación

1. Asegúrate de tener un servidor API en funcionamiento en `http://localhost:3001`. Si no tienes uno, necesitarás crear una API que gestione los productos.

2. Abre el archivo `index.html` en tu navegador para ver la aplicación en acción.

## Funcionalidad API

La API tiene los siguientes endpoints:

- **GET `/productos`**: Obtiene la lista de todos los productos.
- **POST `/productos`**: Crea un nuevo producto.
- **DELETE `/productos/:id`**: Elimina un producto por su `id`.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tu característica:
   ```bash
   git checkout -b nueva-caracteristica
3. Realiza tus cambios y haz un commit:
    ```bash 
    git commit -am 'Agrega nueva característica'
4. Haz push a tu rama: 
    ```bash 
    git push origin nueva-caracteristica
5. Abre un pull request.


markdown
Copiar código
## Créditos

- **Desarrollado por**: PipeDev
- **Año**: 2024
- **Alura Latam**

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).