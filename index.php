<?php 
$pageTitle = "Inicio";
include 'header.php'; 
?>

<?php include 'includes/index/slider.php'; ?>

<div class="slider-caption">
    <h2>CATEGORÍAS DE PRODUCTOS BIOFEMME</h2>
    <p>DALE CLICK Y DESCUBRE LOS PRODUCTOS DE CADA UNA</p>
</div>

<?php include 'includes/index/category-cards.php'; ?>

<?php include 'includes/index/product-section.php'; ?>

<?php include 'includes/index/product-highlight.php'; ?>

<?php include 'includes/index/product-highlight-2.php'; ?>

<?php include 'footer.php'; ?>

<!-- Archivos CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<link rel="stylesheet" href="css/index.css" />
<link rel="stylesheet" href="css/main.css" />
<link rel="stylesheet" href="css/index/slider.css">
<link rel="stylesheet" href="css/index/category-cards.css">
<link rel="stylesheet" href="css/index/product-highlight.css">
<link rel="stylesheet" href="css/index/product-highlight-2.css">
<link rel="stylesheet" href="css/index/products.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

<!-- Archivos JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="js/swiper-setup.js"></script>
<script src="js/products.js"></script>