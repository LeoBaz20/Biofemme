
const products = [
    {
        name: "CLEANSING GEL",
        description: "Gel Limpiador",
        category: "Limpieza | Todo tipo de piel",
        price: "$11.9 - $19.00",
        image: "images/producto5.jpg",
        badge: "",
        link: "https://compras.biofemme.com.ec/producto/luminous-eye-serum-contorno-de-ojos-iluminador/"
    },
    {
        name: "REJUVENATING SERUM",
        description: "Serum Rejuvenecedor",
        category: "Proage | Todo tipo de piel",
        price: "$29.90",
        image: "images/producto6.jpg",
        badge: "",
        link: "https://compras.biofemme.com.ec/producto/eye-makeup-remover-desmaquillante-bifasico-de-ojos/"
    },
    {
        name: "CLEAN SKIN MASK",
        description: "Mascarilla Exfoliante",
        category: "Acné Control | Todo tipo de piel",
        price: "$12.96",
        image: "images/producto7.jpg",
        badge: "",
        link: "https://compras.biofemme.com.ec/producto/eau-micellaire-agua-micelar/"
    },
    {
        name: "HIDRAPURE GEL-CREAM",
        description: "Gel-Crema Hidratante Purificante",
        category: "Hidratación | Piel con tendencia acneica",
        price: "$21.57",
        image: "images/producto8.jpg",
        badge: "",
        link: "https://compras.biofemme.com.ec/producto/clean-skin-mask-mascarilla-exfoliante/"
    }
];

// Función para generar las tarjetas de productos
function generateProductCards() {
    const productContainer = document.getElementById('product-list');
    let productHTML = '';

    products.forEach(product => {
        productHTML += `
            <div class="product-card" onclick="window.location.href='${product.link}'">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">${product.price}</p>
                    <a href="${product.link}" class="add-to-cart">
                        <i class="fa fa-shopping-cart"></i> Añadir al carrito
                    </a>
                </div>
            </div>`;
    });

    productContainer.innerHTML = productHTML;
}

// Llamar a la función para generar las tarjetas cuando cargue la página
window.onload = generateProductCards;
