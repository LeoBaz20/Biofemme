document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, // Hacer que el slider sea infinito
        autoplay: {
            delay: 3000, // Cambia la imagen automáticamente cada 3 segundos
            disableOnInteraction: false, // Continuar autoplay después de interacción
        },
        grabCursor: true, // Mostrar cursor de "mano" para arrastrar
    });
});

function updateImages() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const slides = document.querySelectorAll(".swiper-slide img");

    slides.forEach(img => {
        const mobileSrc = img.getAttribute("data-mobile");
        const desktopSrc = img.getAttribute("data-desktop");

        if (isMobile) {
            img.src = mobileSrc;
        } else {
            img.src = desktopSrc;
        }
    });
}

// Ejecutar al cargar la página
updateImages();

// Agregar un listener para el cambio de tamaño de la ventana
window.addEventListener("resize", updateImages)