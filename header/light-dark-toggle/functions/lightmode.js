export function lightmode(buttonElement) {
    document.querySelector('html').setAttribute('data-theme', 'light');
    buttonElement.setAttribute('aria-pressed', 'false');
    localStorage.setItem("mode", "light");
}