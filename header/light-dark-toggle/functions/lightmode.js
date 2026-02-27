export function lightmode(buttonElement) {
    document.querySelector('html').setAttribute('data-theme', 'light');
    document.querySelector('button i').classList.remove('fa-toggle-on')
    document.querySelector('button i').classList.add('fa-toggle-off')
    buttonElement.setAttribute('aria-pressed', 'false');
    localStorage.setItem("mode", "light");
}