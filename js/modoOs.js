let modo = document.querySelector("button");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let canvas = document.getElementById("canvas");

let modoUsuario = localStorage.getItem("modo");

header.className = modoUsuario;
footer.className = modoUsuario;
canvas.className = modoUsuario;

modo.addEventListener("click", () => {
  if (header.className == "light-mode") {
    header.className = "dark-mode";
  } else {
    header.className = "light-mode";
  }

  if (footer.className == "light-mode") {
    footer.className = "dark-mode";
  } else {
    footer.className = "light-mode";
  }

  if (canvas.className == "light-mode") {
    canvas.className = "dark-mode";
  } else {
    canvas.className = "light-mode";
  }

  localStorage.setItem("modo", header.className);
  localStorage.setItem("modo", footer.className);
  localStorage.setItem("modo", canvas.className);
});
