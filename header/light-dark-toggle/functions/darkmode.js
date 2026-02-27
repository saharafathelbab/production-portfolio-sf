export function darkmode(buttonElement) {
    document.querySelector('html').setAttribute('data-theme', 'dark');
    document.querySelector('button i').classList.remove('fa-toggle-off')
    document.querySelector('button i').classList.add('fa-toggle-on')
    buttonElement.setAttribute('aria-pressed', 'true');
    localStorage.setItem("mode", "dark");
}