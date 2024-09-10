let productos = [
  {
    nombre: "Señuelo Caster Barracuda 14.2cm 27gr Articulado Hundimiento",
    precio: 7250,
    img: "Señuelo-Caster-Barracuda-14.2cm-27gr-Articulado-Hundimiento.jpg",
    off: "",
  },
  {
    nombre: "Señuelo Amberjack Sabalo 120 Crank 12 Cm 32 Gramos Dorado",
    precio: 6500,
    img: "Señuelo-Amberjack-Sabalo-120-Crank-12Cm-32-Gramos-Dorado.webp",
    off: "20% OFF",
  },
  {
    nombre: "Reel frontal Shimano fx 4000 FC",
    precio: 53390,
    img: "reel-shimano-4000.jpg",
    off: "20% OFF",
  },
  {
    nombre: "Caña Spinit Sunset Telescopica 2.40 Mts",
    precio: 17370,
    img: "Caña-Spinit-Sunset-Telescopica-2.40Mts.jfif",
    off: "10% OFF",
  },
  {
    nombre: "Balanza Digital Portátil De Mano Hasta 50 Kg.",
    precio: 5270,
    img: "Balanza-Digital-Portátil-De-Mano-Hasta-50Kg..webp",
    off: "",
  },
  {
    nombre: "Reel rotativo Caster Carbon X BG 307",
    precio: 167665,
    img: "Reel-rotativo-Caster-Carbon-X-BG-307.jfif",
    off: "34% OFF",
  },
];

let productos_card = document.getElementById("card-of");

productos.forEach((productos) => {
  productos_card.innerHTML += `<a href="paginas/tienda.html">
          <article class="producto">
            <img
              src="img/productos/${productos.img}"
              alt="${productos.nombre}"
            />
            <div class="producto_info">
              <h3>${productos.nombre}</h3>
              <p class="producto_precio">$${productos.precio}<span> ${productos.off}</span></p>
            </div>
          </article>
        </a>`;
});
