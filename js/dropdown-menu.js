const navDropdown = document.querySelector('.nav-dropdown'); 
const dropdownContent = document.querySelector('.nav-dropdown-content'); 

let hideTimeout;

function showDropdown() {
    clearTimeout(hideTimeout);
    dropdownContent.classList.add('visible');
}

function hideDropdown() {
    hideTimeout = setTimeout(() => {
        dropdownContent.classList.remove('visible');
    }, 500);
}

navDropdown.addEventListener('mouseenter', showDropdown);
navDropdown.addEventListener('mouseleave', hideDropdown);
dropdownContent.addEventListener('mouseenter', showDropdown);
dropdownContent.addEventListener('mouseleave', hideDropdown);
