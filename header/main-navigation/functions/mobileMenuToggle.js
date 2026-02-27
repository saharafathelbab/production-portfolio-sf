export function mobileMenuToggle() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerButton = document.getElementById('mobile-menu')
    const iconButton = document.getElementById('icon-button')

    hamburgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (iconButton.classList.contains('fa-bars')) {
            iconButton.classList.replace('fa-bars', 'fa-times');
            hamburgerButton.setAttribute('aria-label', 'Close Navigation Menu');
            hamburgerButton.setAttribute('aria-expanded', 'true');
        } else {
            iconButton.classList.replace('fa-times', 'fa-bars');
            hamburgerButton.setAttribute('aria-label', 'Open Navigation Menu')
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => {
        let width = window.innerWidth;

        if(width >= 768){
            navLinks.classList.remove('active')
            iconButton.classList.replace('fa-times', 'fa-bars');
            hamburgerButton.setAttribute('aria-label', 'Open Navigation Menu')
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
    })
}