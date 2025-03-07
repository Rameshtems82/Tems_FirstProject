document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    // Hide menu initially
    mobileMenu.style.display = "none"; 

    menuIcon.addEventListener("click", function () {
        mobileMenu.style.display = "flex"; // Show menu
        mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        setTimeout(() => {
            mobileMenu.style.display = "none"; // Hide menu after animation
        }, 300);
    });
});