let productos = JSON.parse(localStorage.getItem("carrito"));
let boton = document.querySelectorAll(".borrarProducto");

let productos_carrito = document.getElementById("carritoId");

productos.forEach((producto) => {
  productos_carrito.innerHTML += `<article class="articulo_carrito">
            <img
              src="../img/productos/${producto.img}"
              alt="producto 1"
            />
            <div class="articulo_carrito-info">
              <h3>${producto.nombre}</h3>
              <p>$${producto.precio}</p>
               <button class="borrarProducto" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg></button>

            </div>
          </article>`;
});

function actCarrito() {
  productos = JSON.parse(localStorage.getItem("carrito"));
}

function actBoton() {
  boton = document.querySelectorAll(".borrarProducto");
  boton.forEach((e) => {
    e.addEventListener("click", eliminarProd);
  });
}

function eliminarProd(e) {
  const id_btn = e.currentTarget.id;
  const pr_eliminar = productos.findIndex((e) => e.id === id_btn);

  productos.splice(pr_eliminar, 1);

  actCarrito();
  console.log(localStorage.setItem("carrito", JSON.stringify(productos)));
}

actBoton();
