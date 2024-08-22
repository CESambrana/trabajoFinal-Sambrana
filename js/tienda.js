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
  {
    nombre: "Caña Beast Red Max 1.80m Bait Casting 2 Tramos",
    precio: 23855,
    img: "Caña-Beast-Red-Max-1.80m-Bait-Casting.jfif",
    off: "35% OFF",
  },
  {
    nombre: "Caña De Pesca Shimano Fx 6.6 Pies 6-14lbs Frontal 2 Tramos",
    precio: 31620,
    img: "Caña-De-Pesca-Shimano-Fx6.6Pies-6-14lbs.jfif",
    off: "",
  },
  {
    nombre: "Señuelo Caster Froggy 6.5cm 9gr Rana Superficie",
    precio: 2595,
    img: "Señuelo-Caster-Froggy-6.5cm-9gr-Rana-Superficie.jpg",
    off: "34% OFF",
  },
  {
    nombre: "Caja Pesca Caster Señuelos 20 Divisiones 29,5x18,5x4,5cm",
    precio: 8765,
    img: "Caja-Pesca-Caster-eñuelos-20-Divisiones-29,5x18,5x4,5cm.webp",
    off: "",
  },
  {
    nombre: "Señuelo Caster River Shad 12cm 24.9g Articulado Hundimiento",
    precio: 47075,
    img: "Señuelo-Caster-River-shad-12cm-24.9g-Articulado.jpg",
    off: "35% OFF",
  },
  {
    nombre: "Kit Caja De Pesca Variada Completa Accesorios Infaltables",
    precio: 22900,
    img: "Kit-Caja-De-Pesca-Variada.webp",
    off: "",
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
            <button type="submit" class="product_agregar">Agregar al carrito</button>
          </article>
        </div>`;
});
