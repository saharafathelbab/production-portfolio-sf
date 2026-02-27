export function addNavElements() {
    document.getElementById("main-navigation").innerHTML =
        `
        <div class="menu-toggle" id="mobile-menu">
            <i class="fas fa-solid fa-bars" id= "icon-button"></i>
        </div>

        <ul class="nav-links">
            <li><a class="nav-link port-lligat-slab-regular" href="/">Home</a></li>
            <li><a class="nav-link port-lligat-slab-regular" href="/about-me">About Me</a></li>
            <li><a class="nav-link port-lligat-slab-regular" href="/latest-updates">Latest Updates</a></li>
            <li><a class="nav-link port-lligat-slab-regular" target="_blank" href="documents/sahara-fathelbab-resume.pdf">Resume</a></li>
        </ul>
    `
}