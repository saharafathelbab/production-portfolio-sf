import { addHeadElements } from '/head/head.js';
import { toggleThemeEventListener} from "/header/light-dark-toggle/toggle.js";
import { addLightToDarkToggleElements } from '/../header/light-dark-toggle/functions/addLightToDarkToggleElements.js';
import { checkLocalStorage } from '../header/light-dark-toggle/functions/checkLocalStorage.js';
import { addNavElements } from '/../header/main-navigation/functions/addNavElements.js';
import { mobileMenuToggle } from '/../header/main-navigation/functions/mobileMenuToggle.js';
import { addFooterElements } from '/footer/footer.js';
import {revealContent} from '/main/helper-functions/revealContent.js'

// run on page load
function onPageLoad() {
    addHeadElements();
    addLightToDarkToggleElements();
    toggleThemeEventListener();
    checkLocalStorage();
    addNavElements();
    mobileMenuToggle();
    addFooterElements();
    revealContent();
}

window.onload = onPageLoad;

/* handles: Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received */
chrome.runtime?.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_DATA') {
        // Perform async operation
        fetchData().then(data => {
            sendResponse({ data });
        }).catch(error => {
            sendResponse({ error: error.message }); // Always call sendResponse, even on error
        });
        return true; // Keep the channel open for the async response above
    }
    // If not handled, don't return true; the channel closes immediately
});