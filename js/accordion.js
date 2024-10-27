document.addEventListener('DOMContentLoaded', function() {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            

            const parentItem = this.parentElement;
            parentItem.classList.toggle('active');
            

            const content = parentItem.querySelector('.accordion-content');
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});