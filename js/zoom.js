const productContainer = document.querySelector('.product-image-main');
const productImage = document.querySelector('.product-image-main img');

productContainer.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = productContainer.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    productImage.style.transformOrigin = `${x}% ${y}%`; 
});

productContainer.addEventListener('mouseleave', () => {
    productImage.style.transformOrigin = 'center center'; 
});
