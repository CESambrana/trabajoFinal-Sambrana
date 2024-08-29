let productos = [
  {
    nombre: "Señuelo Caster Barracuda 14.2cm 27gr Articulado Hundimiento",
    precio: 7250,
    img: "Señuelo-Caster-Barracuda-14.2cm-27gr-Articulado-Hundimiento.jpg",
    off: "",
    id: "1",
  },
  {
    nombre: "Señuelo Amberjack Sabalo 120 Crank 12 Cm 32 Gramos Dorado",
    precio: 6500,
    img: "Señuelo-Amberjack-Sabalo-120-Crank-12Cm-32-Gramos-Dorado.webp",
    off: "20% OFF",
    id: "2",
  },
  {
    nombre: "Reel frontal Shimano fx 4000 FC",
    precio: 53390,
    img: "reel-shimano-4000.jpg",
    off: "20% OFF",
    id: "3",
  },
  {
    nombre: "Caña Spinit Sunset Telescopica 2.40 Mts",
    precio: 17370,
    img: "Caña-Spinit-Sunset-Telescopica-2.40Mts.jfif",
    off: "10% OFF",
    id: "4",
  },
  {
    nombre: "Balanza Digital Portátil De Mano Hasta 50 Kg.",
    precio: 5270,
    img: "Balanza-Digital-Portátil-De-Mano-Hasta-50Kg..webp",
    off: "",
    id: "5",
  },
  {
    nombre: "Reel rotativo Caster Carbon X BG 307",
    precio: 167665,
    img: "Reel-rotativo-Caster-Carbon-X-BG-307.jfif",
    off: "34% OFF",
    id: "6",
  },
  {
    nombre: "Caña Beast Red Max 1.80m Bait Casting 2 Tramos",
    precio: 23855,
    img: "Caña-Beast-Red-Max-1.80m-Bait-Casting.jfif",
    off: "35% OFF",
    id: "7",
  },
  {
    nombre: "Caña De Pesca Shimano Fx 6.6 Pies 6-14lbs Frontal 2 Tramos",
    precio: 31620,
    img: "Caña-De-Pesca-Shimano-Fx6.6Pies-6-14lbs.jfif",
    off: "",
    id: "8",
  },
  {
    nombre: "Señuelo Caster Froggy 6.5cm 9gr Rana Superficie",
    precio: 2595,
    img: "Señuelo-Caster-Froggy-6.5cm-9gr-Rana-Superficie.jpg",
    off: "34% OFF",
    id: "9",
  },
  {
    nombre: "Caja Pesca Caster Señuelos 20 Divisiones 29,5x18,5x4,5cm",
    precio: 8765,
    img: "Caja-Pesca-Caster-eñuelos-20-Divisiones-29,5x18,5x4,5cm.webp",
    off: "",
    id: "10",
  },
  {
    nombre: "Señuelo Caster River Shad 12cm 24.9g Articulado Hundimiento",
    precio: 47075,
    img: "Señuelo-Caster-River-shad-12cm-24.9g-Articulado.jpg",
    off: "35% OFF",
    id: "11",
  },
  {
    nombre: "Kit Caja De Pesca Variada Completa Accesorios Infaltables",
    precio: 22900,
    img: "Kit-Caja-De-Pesca-Variada.webp",
    off: "",
    id: "12",
  },
];

let productos_card = document.getElementById("prods");

productos.forEach((productos) => {
  productos_card.innerHTML += `<div class="a" href="producto.html">
          <article class="producto">
            <img
              src="../img/productos/${productos.img}"
              alt="${productos.nombre}"
            />
            <div class="producto_info">
              <h3>${productos.nombre}</h3>
              <p class="producto_precio">$${productos.precio}<span> ${productos.off}</span></p>
            </div>
            <button type="submit" class="product_agregar" id="${productos.id}">Agregar al carrito</button>
          </article>
        </div>`;
});

let btn_agregar = document.querySelectorAll(".product_agregar");

function act_btn() {
  btn_agregar = document.querySelectorAll(".product_agregar");
  btn_agregar.forEach((e) => {
    e.addEventListener("click", agregarCar);
  });
}

let productosCarrito = [];

function agregarCar(e) {
  const id_btn = e.currentTarget.id;
  const pr_agregado = productos.find((e) => e.id === id_btn);
  productosCarrito.push(pr_agregado);

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Se agregó al carrito correctamente.",
    showConfirmButton: false,
    timer: 1500,
  });

  localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}

act_btn();
