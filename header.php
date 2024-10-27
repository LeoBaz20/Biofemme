<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BioFemme - <?php echo $pageTitle; ?></title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>

<body>
    <header>

        <!-- Sección para pantallas pequeñas: menú, logo y carrito -->
        <div class="mobile-header">
            <div class="menu-icon" id="menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="logo">
                <a href="/">
                    <img src="images/logo-white.png" alt="BioFemme Logo">
                </a>
            </div>
            <div class="cart-icon">
                <a href="#"><i class="fa-solid fa-cart-shopping"></i><span>0</span></a>
            </div>
        </div>

        <!-- Barra de búsqueda que se expande en pantallas pequeñas -->
        <div class="search-bar-mobile">
            <input type="text" placeholder="Buscar...">
            <button><i class="fas fa-search"></i></button>
        </div>

        <!-- Overlay para oscurecer el fondo -->
        <div class="mobile-overlay" id="mobile-overlay"></div>

        <!-- Menú despegable -->
        <div class="mobile-menu-container" id="mobile-menu">
            <div class="mobile-menu-content">
                <span class="mobile-close-menu" id="close-menu"><i class="fa-solid fa-x"></i></span>
                <ul class="mobile-menu-list">
                    <li><a href="/" class="mobile-menu-item">Tienda</a></li>
                    <li>
                        <a href="https://compras.biofemme.com.ec/productos/" class="mobile-menu-item">Productos</a>
                        <ul class="mobile-submenu">
                            <li><a href="#" class="mobile-submenu-item">Categoría <span class="mobile-submenu-arrow">&rsaquo;</span></a></li>
                            <li><a href="#" class="mobile-submenu-item">Usos <span class="mobile-submenu-arrow">&rsaquo;</span></a></li>
                            <li><a href="#" class="mobile-submenu-item">Tipo de piel <span class="mobile-submenu-arrow">&rsaquo;</span></a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="mobile-menu-item"><i class="fa-solid fa-store"></i> Puntos de venta</a></li>
                </ul>
                <div class="mobile-social-media">
                    <a href="https://www.facebook.com/BioFemmeEc" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/biofemme_ec/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@biofemme_ec" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="mobile-logo-footer">
                    <a href="/">
                        <img src="images/logo_home.png" alt="BioFemme Logo">
                    </a>
                </div>
            </div>
        </div>


        <!-- Barra superior -->
        <div class="top-bar">
            <div class="container">
                <div class="social-media">
                    <a href="https://www.facebook.com/BioFemmeEc" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/biofemme_ec/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@biofemme_ec" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div class="user-links">
                    <a href="#">MI CUENTA <i class="fa-regular fa-circle-user"></i></a>
                    <a href="#"><i class="fa-solid fa-store"></i>PUNTOS DE VENTA</a>
                </div>
            </div>
        </div>

        <!-- Sección principal del header -->
        <div class="main-header">
            <div class="container">
                <div class="logo">
                    <a href="/">
                        <img src="images/logo_home.png" alt="BioFemme Logo">
                    </a>
                </div>
                <nav class="main-nav">
                    <ul class="main-nav-list">
                        <li><a href="/" class="nav-links">TIENDA</a></li>
                        <li class="nav-dropdown">
                            <a href="https://compras.biofemme.com.ec/productos/" class="nav-links">PRODUCTOS <i class="fa-solid fa-chevron-down"></i></a>
                            <?php include 'includes/dropdown-menu.php'; ?>
                        </li>
                    </ul>
                </nav>
                <div class="search-cart">
                    <div class="search-bar">
                        <input type="text" placeholder="¿Qué producto buscas?">
                        <button><i class="fas fa-search"></i></button>
                    </div>
                    <div class="cart-icon">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i><span>0</span></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <script src="js/main.js"></script>
</body>

</html>