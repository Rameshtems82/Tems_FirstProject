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

function toggleSocialIcons(element) {
    let parent = element.parentElement;
    parent.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const shareContainers = document.querySelectorAll(".share-container");

    shareContainers.forEach(container => {
        const shareButton = container.querySelector(".share-btn");
        const socialIcons = container.querySelector(".social-icons");

        // Desktop Hover Effect
        container.addEventListener("mouseenter", function () {
            socialIcons.style.opacity = "1";
            socialIcons.style.visibility = "visible";
            socialIcons.style.bottom = "60px";
        });

        container.addEventListener("mouseleave", function () {
            socialIcons.style.opacity = "0";
            socialIcons.style.visibility = "hidden";
            socialIcons.style.bottom = "40px";
        });

        // Mobile Tap Effect
        shareButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents immediate closing
            container.classList.toggle("active");

            // Close other open share containers
            document.querySelectorAll(".share-container").forEach(item => {
                if (item !== container) {
                    item.classList.remove("active");
                }
            });
        });
    });

    // Hide social icons when clicking outside (Mobile)
    document.addEventListener("click", function () {
        document.querySelectorAll(".share-container").forEach(item => {
            item.classList.remove("active");
        });
    });
});

