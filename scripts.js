// This file can include any JavaScript you need for your site, 
// such as interactive functionality or animations.

// Example of a simple script to add a class to the navigation item 
// based on the current page (this would need additional HTML changes to work)
document.addEventListener('DOMContentLoaded', (event) => {
    const navItems = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split("/").pop();
    
    navItems.forEach((navItem) => {
        if (navItem.getAttribute('href') === currentPage) {
            navItem.classList.add('active');
        }
    });
});
