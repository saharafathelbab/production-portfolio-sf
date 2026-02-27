import { toggleThemeButton } from "./functions/toggleThemeButton.js";
import { OSColorChange } from "./functions/OSColorChange.js";

export let prefers_light = window.matchMedia('(prefers-color-scheme: light)')
export let prefers_dark = window.matchMedia('(prefers-color-scheme: dark)')
export let buttonElement = document.getElementById("light-dark-toggle");

// Listen when you change OS setting for light/dark mode
prefers_light.addEventListener('change', OSColorChange)
prefers_dark.addEventListener('change', OSColorChange)

export function toggleThemeEventListener() {
    buttonElement = document.getElementById("light-dark-toggle");
    buttonElement.addEventListener("click", () => toggleThemeButton(buttonElement))
    buttonElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            toggleThemeButton(buttonElement)
        }
    }) 
}