export function addLightToDarkToggleElements() {
    document.getElementById("light-mode-to-dark-mode-toggle").innerHTML =
        `
            <button type="button" aria-pressed="false" id="light-dark-toggle" aria-label="Light Mode to Dark Mode Toggle">
                <span class="toggle-icon"></span>
            </button>
    `
}