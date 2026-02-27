import { prefers_light, prefers_dark, buttonElement } from "../toggle.js";
import { lightmode } from "./lightmode.js";
import { darkmode } from "./darkmode.js";

/* Runs when OS changes from light/dark mode. */

export function OSColorChange() {
    if (prefers_light.matches) {
        lightmode(buttonElement);
    } else if (prefers_dark.matches) {
        darkmode(buttonElement);
    }
}