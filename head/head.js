export function addHeadElements() {
    const headElement = document.getElementById("head-element");
    headElement.innerHTML =
        `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Macondo&family=Namdhinggo:wght@400;500;600;700;800&family=Patrick+Hand&family=Port+Lligat+Slab&display=swap" rel="stylesheet">
    <meta name="color-scheme" content="light dark">

    <!-- Default favicons (fallback) -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />

    <!-- Light mode favicon -->
    <link rel="icon" type="image/png" href="/head/favicon/favicon-96x96.png" sizes="96x96" media="(prefers-color-scheme: light)" />
    <link rel="icon" type="image/svg+xml" href="/head/favicon/favicon.svg" media="(prefers-color-scheme: light)" />
    <link rel="shortcut icon" href="/head/favicon/favicon.ico" media="(prefers-color-scheme: light)" />
    <link rel="apple-touch-icon" sizes="180x180" href="/head/favicon/apple-touch-icon.png" media="(prefers-color-scheme: light)" />

    <!-- Dark mode favicon -->
    <link rel="icon" type="image/png" href="/head/favicon-dark/favicon-96x96.png" sizes="96x96" media="(prefers-color-scheme: dark)" />
    <link rel="icon" type="image/svg+xml" href="/head/favicon-dark/favicon.svg" media="(prefers-color-scheme: dark)" />
    <link rel="shortcut icon" href="/head/favicon-dark/favicon.ico" media="(prefers-color-scheme: dark)" />
    <link rel="apple-touch-icon" sizes="180x180" href="/head/favicon-dark/apple-touch-icon.png" media="(prefers-color-scheme: dark)" />
    <link rel="manifest" href="/head/favicon-dark/site.webmanifest" />

    <link rel="stylesheet" href = "/fonts/font.css">
    <link rel="stylesheet" href = "/header/style/header.css">
    <link rel="stylesheet" href="/header/light-dark-toggle/style/toggle.css">
    <link rel="stylesheet" href="/header/main-navigation/style/main-navigation.css">
    <link rel="stylesheet" href="/main/style/main.css">
    <link rel="stylesheet" href="/footer/style/footer.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    ` + headElement.innerHTML;
}