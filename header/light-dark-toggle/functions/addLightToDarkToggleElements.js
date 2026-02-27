export function addLightToDarkToggleElements() {
    document.getElementById("light-mode-to-dark-mode-toggle").innerHTML =
        `
        <i class="fas fa-solid fa-sun"></i>
            <button type="button" aria-pressed="false" id="light-dark-toggle" aria-label="Light Mode to Dark Mode Toggle">
                <i class="fas fa-solid fa-toggle-off"></i>
            </button>
        <i class="fas fa-solid fa-moon"></i>
    `
}