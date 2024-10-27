
const products = [
    {
        name: "LIFTING SERUM",
        description: "Sérum Tensor",
        category: "Proage | Todo tipo de piel",
        price: "$21.57",
        image: "images/producto1.jpg",
        badge: "Nuevo Producto",
        link: "/producto.php?id=1"
    },
    {
        name: "SUNSCREEN 50+",
        description: "Bloqueador Solar",
        category: "Protección | Todo tipo de piel",
        price: "$24.64",
        image: "images/producto2.jpg",
        badge: "",
        link: "#"
    },
    {
        name: "BIO BEAUTY OIL",
        description: "Aceite Seco Hidratante",
        category: "Hidratación | Todo tipo de piel",
        price: "$16.42",
        image: "images/producto3.jpg",
        badge: "",
        link: "#"
    },
    {
        name: "BIOFEMME MINI KIT",
        description: "Mini Sizes",
        category: "Sets | Piel mixta a grasa",
        price: "<span class='old-price'>$20.70</span> $15.00",
        image: "images/producto4.jpg",
        badge: "Promoción",
        link: "#"
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

