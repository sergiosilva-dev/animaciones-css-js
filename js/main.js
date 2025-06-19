// Archivo conectado correctamente
console.log("Proyecto Animaciones CSS + JS cargado");

// Scroll Reveal con IntersectionObserver
const cajas = document.querySelectorAll(".reveal-caja");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cajas.forEach((caja) => observer.observe(caja));

// Animación con click (JS)
const botonRebote = document.getElementById("boton-rebote");

botonRebote.addEventListener("click", () => {
  botonRebote.classList.add("rebotar");

  // Remover la clase para poder volver a hacer la animación en próximos clics
  setTimeout(() => {
    botonRebote.classList.remove("rebotar");
  }, 600); // misma duración que la animación
});
