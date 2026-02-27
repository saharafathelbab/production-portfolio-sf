export function mobileMenuToggle() {
    const navLinks = document.querySelector('.nav-links');
    const iconButton = document.getElementById('icon-button')

    iconButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (iconButton.classList.contains('fa-bars')) {
            iconButton.classList.replace('fa-bars', 'fa-times');
        } else {
            iconButton.classList.replace('fa-times', 'fa-bars')
        }
    });

    window.addEventListener('resize', () => {
        let width = window.innerWidth;

        if(width >= 768){
            navLinks.classList.remove('active')
            iconButton.classList.replace('fa-times', 'fa-bars');
        }
    })
}