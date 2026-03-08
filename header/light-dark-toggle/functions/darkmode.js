export function darkmode(buttonElement) {
    document.querySelector('html').setAttribute('data-theme', 'dark');
    buttonElement.setAttribute('aria-pressed', 'true');
    localStorage.setItem("mode", "dark");
}