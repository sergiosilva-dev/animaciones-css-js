/*
Autor: Sergio Silva
Fecha: 2025-06-19
Descripción: Script JS para controlar animaciones disparadas por eventos (click, focus, mouseover) y animaciones avanzadas con requestAnimationFrame.
*/

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

// Animación con mouseover (JS)
const cuadroHover = document.getElementById("cuadro-hover-js");

cuadroHover.addEventListener("mouseover", () => {
  cuadroHover.classList.add("animacion-hover");

  // Eliminar la clase para poder volver a animar
  setTimeout(() => {
    cuadroHover.classList.remove("animacion-hover");
  }, 500); // misma duración que la animación
});

// Animación con focus (JS)
const inputFocus = document.getElementById("input-focus");

inputFocus.addEventListener("focus", () => {
  inputFocus.classList.add("animacion-focus");

  // Remover animación tras ejecución
  setTimeout(() => {
    inputFocus.classList.remove("animacion-focus");
  }, 600);
});

// Animación con zoom al hacer clic
const cuadroZoom = document.getElementById("cuadro-zoom");

cuadroZoom.addEventListener("click", () => {
  cuadroZoom.classList.add("zoom-in");
  setTimeout(() => {
    cuadroZoom.classList.remove("zoom-in");
  }, 500); // duración igual a la animación
});

// Animación con requestAnimationFrame (cuadro que rebota)
const cuadroRaf = document.getElementById("cuadro-raf");
let posicion = 0;
let direccion = 1;

function animarCuadro() {
  const anchoContenedor = document.querySelector(".raf").clientWidth;
  if (posicion >= anchoContenedor - 60) {
    direccion = -1;
  } else if (posicion <= 0) {
    direccion = 1;
  }

  posicion += direccion * 2; // velocidad
  cuadroRaf.style.left = `${posicion}px`;

  requestAnimationFrame(animarCuadro);
}

requestAnimationFrame(animarCuadro);
