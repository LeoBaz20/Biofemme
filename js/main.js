// Seleccionar el ícono de menú, el menú desplegable y el overlay
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

// Mostrar el menú y el overlay al hacer clic en el ícono de menú
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
});

// Ocultar el menú y el overlay al hacer clic en el botón de cierre
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
});

// Cerrar el menú y el overlay si se hace clic en el overlay
mobileOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
});

