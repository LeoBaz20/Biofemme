function changeImage(imageSrc) {
    document.getElementById("main-image").src = imageSrc;


    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
        if (thumbnail.src.includes(imageSrc)) {
            thumbnail.classList.add('active');
        }
    });
}
