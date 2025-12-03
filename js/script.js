const slides = document.querySelectorAll(".img-slide");
let index = 0;

// Mostrar imagen correspondiente
function mostrarImagen() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// Botón siguiente
document.getElementById("btnNext").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    mostrarImagen();
});

// Botón anterior
document.getElementById("btnPrev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarImagen();
});

// Mostrar la primera imagen al cargar
mostrarImagen();
