// Animaciones suaves al hacer scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const trigger = window.innerHeight * 0.8;

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < trigger) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// Estilo inicial para animaciones
document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.8s ease";
});
