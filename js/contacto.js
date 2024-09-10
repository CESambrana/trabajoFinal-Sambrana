const boton = document.querySelector("#boton");
const form = document.querySelector("#form");

form.addEventListener("submit", mandar_mns);

function mandar_mns(e) {
  e.preventDefault();
  let valEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const formCont = new FormData(this);
  if (formCont.get("nombre").length < 4) {
    Swal.fire({
      icon: "error",
      title: "El nombre debe tener mas caracteres.",
    });
  } else if (!valEmail.test(formCont.get("email"))) {
    Swal.fire({
      icon: "error",
      title: "El email no es válido. Intente nuevamente.",
    });
  } else if (formCont.get("mensaje").length < 8) {
    Swal.fire({
      icon: "error",
      title: "El mensaje tiene que ser mas extenso.",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Su mensaje fue enviado correctamente.",
      showConfirmButton: false,
      timer: 1500,
    });

    console.log(formCont.get("nombre"));
    console.log(formCont.get("email"));
    console.log(formCont.get("mensaje"));
  }
}
