// js/script.js

// Use one single listener for when the document is ready
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. ACTIVE NAVIGATION LINK LOGIC (THE FIX) ---
    // This part identifies the current page and highlights the correct link.
    // -------------------------------------------------------------------
    try {
        const currentPage = window.location.pathname.split('/').pop() || 'home.html'; // Default to home.html if path is empty
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();

            // Remove the 'active' class from all links first to reset them
            link.classList.remove('active');

            // Add the 'active' class if the link's href matches the current page
            if (currentPage === linkPage) {
                link.classList.add('active');
            }
        });
    } catch (e) {
        console.error("Error setting active navigation link:", e);
    }
    

    // --- 2. MOBILE MENU TOGGLE ---
    // Your original code, placed correctly inside the listener.
    // -------------------------------------------------------------------
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 3. SCROLL TO TOP BUTTON ---
    // Your original logic with an improved event listener.
    // -------------------------------------------------------------------
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };
        // Note: The onclick is handled in your HTML: <button onclick="scrollToTop()" ...>
    }

    // --- 4. CLOSE MOBILE MENU ON LINK CLICK ---
    // Your original code, placed correctly inside the listener.
    // -------------------------------------------------------------------
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    if (mobileLinks.length > 0 && mobileMenu) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }

    // --- 5. ACCORDION FUNCTIONALITY ---
    // Your original code, placed correctly inside the listener.
    // -------------------------------------------------------------------
    const accordionButtons = document.querySelectorAll('.accordion-button');
    if (accordionButtons.length > 0) {
        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const accordionContent = button.nextElementSibling;
                const chevron = button.querySelector('svg');
                const isCurrentlyOpen = accordionContent.style.maxHeight;

                // Close all other accordions first
                document.querySelectorAll('.accordion-content').forEach(content => {
                    content.style.maxHeight = null;
                });
                document.querySelectorAll('.accordion-button svg').forEach(svg => {
                    svg.style.transform = 'rotate(0deg)';
                });

                // If the clicked accordion was not open, open it
                if (!isCurrentlyOpen) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                    chevron.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

}); // END of the main DOMContentLoaded listener


// --- GLOBAL FUNCTIONS ---
// This function needs to be outside the DOMContentLoaded listener 
// because it is called directly by onclick="" in your HTML.
// -------------------------------------------------------------------
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}