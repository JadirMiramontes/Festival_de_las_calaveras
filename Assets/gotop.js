// Obtén el botón de regreso al principio de la página
var btnScrollTop = document.getElementById("btn-scroll-top");

// Muestra u oculta el botón de regreso al principio según la posición de desplazamiento de la página
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollTop.classList.add("show");
  } else {
    btnScrollTop.classList.remove("show");
  }
};

// Agrega un evento clic al botón
btnScrollTop.addEventListener("click", function () {
  // Hace que la página se desplace hacia arriba suavemente al hacer clic en el botón
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
