// Obtén el botón de modo nocturno y los íconos de dark_mode y light_mode
const modoNocturnoBtn = document.getElementById("modoNocturnoBtn");
const darkModeIcon = document.getElementById("darkModeIcon");
const lightModeIcon = document.getElementById("lightModeIcon");
const body = document.body;

// Verifica si hay una preferencia de modo nocturno en el almacenamiento local
const modoNocturno = localStorage.getItem("modoNocturno");

// Inicializa la variable de control de modo nocturno
let modoNocturnoActivo = false;

// Si hay una preferencia de modo nocturno, aplícala
if (modoNocturno) {
  body.classList.add("modo-nocturno");
  modoNocturnoActivo = true;
}

// Actualiza la visibilidad de los íconos basándose en el estado inicial del modo nocturno
darkModeIcon.style.display = modoNocturnoActivo ? "none" : "block";
lightModeIcon.style.display = modoNocturnoActivo ? "block" : "none";

// Agrega un evento de clic al botón de modo nocturno
modoNocturnoBtn.addEventListener("click", () => {
  // Alternar la clase modo-nocturno en el body
  body.classList.toggle("modo-nocturno");

  // Actualiza la variable de control
  modoNocturnoActivo = !modoNocturnoActivo;

  // Actualiza la visibilidad de los íconos
  darkModeIcon.style.display = modoNocturnoActivo ? "none" : "block";
  lightModeIcon.style.display = modoNocturnoActivo ? "block" : "none";

  // Guarda la preferencia de modo nocturno en el almacenamiento local
  if (modoNocturnoActivo) {
    localStorage.setItem("modoNocturno", true);
  } else {
    localStorage.removeItem("modoNocturno");
  }
});

