import { lightmode } from "./lightmode.js";
import { darkmode } from "./darkmode.js";

/* When user clicks light / dark mode via toggle, it checks for the current state.

If it is on light mode -> it is false (default)
If it is on dark mode -> it is true; indicates user has pressed

If user has pressed it when it is on light mode (false) that indicates the user
wants to switch to dark mode. 

If the user presses it while it is on dark mode (true [the else statement]), 
then that indicates the user wants to switch to light mode.*/

export function toggleThemeButton(buttonElement) {
    const currentState = buttonElement.getAttribute('aria-pressed')

    if (currentState == 'false') {
        darkmode(buttonElement);
    } else {
        lightmode(buttonElement);
    }
}