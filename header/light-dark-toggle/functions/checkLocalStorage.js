import { lightmode } from "./lightmode.js";
import { darkmode } from "./darkmode.js";
import { prefers_light, prefers_dark, buttonElement } from "../toggle.js";

/* First checks if the user changed from light to dark via prior preference. 
If not, it then OS system is set to prefers light / dark */


export function checkLocalStorage() {
    if (localStorage.getItem("mode") == "dark") {
        darkmode(buttonElement);
    } else if (localStorage.getItem("mode") == "light") {
        lightmode(buttonElement);
    } else if (prefers_light.matches) {
        lightmode(buttonElement);
    } else if (prefers_dark.matches) {
        darkmode(buttonElement);
    }
}