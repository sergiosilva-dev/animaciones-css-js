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
