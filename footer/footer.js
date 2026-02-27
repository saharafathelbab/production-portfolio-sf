export function addFooterElements() {
    const footerElement = document.getElementById("additional-links");

    if (footerElement) {
        footerElement.innerHTML =
        `
            <div class="footer-content">
                <hr class="divider"/>
                <div class= "parent-info">
                    <div class="child-info">
                        <div class="buttons">
                            <a class="patrick-hand-regular button" target="_blank" href="documents/sahara-fathelbab-resume.pdf">Resume</a>
                            <a class="patrick-hand-regular button" target="_blank" href="mailto:saharafathelbab1@gmail.com">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

        `
    }
}