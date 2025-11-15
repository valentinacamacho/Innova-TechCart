# Proyecto: Carrito de Compras en React
<a id="readme-top"></a> <details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#objetivo-del-proyecto">Objetivo del Proyecto</a></li>
        <li><a href="#tecnologías-utilizadas">Tecnologías Utilizadas</a></li>
         <li><a href="#requerimientos-funcionales">Requerimientos Funcionales</a></li>
              <li><a href="#enlaces-del-proyecto">Enlaces del proyecto</a></li>
      </ul>
    </li>
  </ol>
</details>

---

## Objetivo
Construir un flujo completo de **carrito de compras** usando el framework de **React** sin backend, simulando datos en formato **JSON** para consumir la información desde el frontend.  

El proyecto se enfoca en conceptos de React como la utilización de **componentes, hooks, props, localStorage, manejo de eventos y animaciones**.

<p style="text-align: right;">
  <a href="#readme-top">volver arriba</a>
</p>

---
### Tecnologías Utilizadas

### Framework
![React-logo]<br>
*Propósito:* Framework de JavaScript para construir interfaces de usuario dinámicas y reactivas. [React][React-url]

![React-Router-logo]<br>
*Propósito:* Librería para la gestión de rutas y navegación dentro de la aplicación React. [React Router DOM][React-Router-url]

![Tailwind-logo]<br>
*Propósito:* Framework de utilidades CSS para diseño rápido, responsivo y moderno. [Tailwind CSS][Tailwind-url]

![React-Icons-logo]<br>
*Propósito:* Librería de iconos vectoriales para mejorar la interfaz de usuario. [React Icons][React-Icons-url]

![JSON-logo]<br>
*Propósito:* Formato de intercambio de datos utilizado para simular la información del frontend.

<p style="text-align: right;">
  <a href="#readme-top">volver arriba</a>
</p>

---

### Requerimientos Funcionales

1. **Listado de productos**  
   - Mostrar datos simulados en JSON: imagen, título,marca, precio, badge de stock.  

2. **Carrito flotante (drawer)**  
   - Animación de entrada/salida.  
   - Control desde el header (icono con contador de productos).  

3. **Operaciones del carrito**  
   - Agregar productos.  
   - Eliminar productos.  
   - Actualizar cantidad de productos, **prevenir cantidades mayores al stock**.  

4. **Cálculos del carrito**  
   - Subtotal.  
   - Envío fijo e impuestos simulados.  
   - Mostrar **TOTAL** de la compra.  

5. **Persistencia del carrito**  
   - Usar **localStorage** para mantener el estado entre recargas.  

6. **Estado vacío del carrito**  
   - Mostrar mensaje y CTA **"El carrito está vacío"** cuando no hay productos.  

7. **Diseño responsivo y accesibilidad básica**  
   - Mobile-first.  
   - Uso de semántica, foco visible, labels y atributos ARIA para accesibilidad.  


<p style="text-align: right;">
  <a href="#readme-top">volver arriba</a>
</p>

---

### Enlaces del Proyecto
- Demo en Vercel: [Innova TechCart](https://innova-tech-cart.vercel.app/)


<p style="text-align: right;">
  <a href="#readme-top">volver arriba</a>
</p>

---

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-logo]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/


[React-Router-logo]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white  
[React-Router-url]: https://reactrouter.com/

[Tailwind-logo]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white  
[Tailwind-url]: https://tailwindcss.com/

[React-Icons-logo]: https://img.shields.io/badge/React_Icons-000000?style=for-the-badge&logo=react&logoColor=white  
[React-Icons-url]: https://react-icons.github.io/react-icons/

[JSON-logo]: https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white  
[JSON-url]: https://www.json.org/json-en.html

