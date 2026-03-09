# My Portfolio

## Overview
I am a firm believer that you are only as smart and as knowledgeable on your previous work as your past self's documentation.
<br/><br/>
Documented below is information on the code structure of the portfolio.

### General Info
Wherever possible, I tried to not have any duplicable code. If something would be used across multiple pages, whether that be a border radius or a light to dark mode toggle, it would be created once and used either via variables (in the case of CSS styling), or dynamically added via JavaScript.
</br></br>
<strong>Style Folders</strong>
</br>
I utilized the Live Sass Compiler by Glenn Marks. At the bottom of my VS Code Window, I would first click to <strong>Watch SASS</strong>. Then, I would write in the ```.scss``` file. 
</br></br>
It would then convert it to a ```.css``` file with the addition of a ```.css.map``` file. <strong>I would only write in the ```.scss``` file, the extension handles the conversion.</strong>

#### Understanding the Code

```head/head.js```
</br>
This contains elements of the ```<head>``` that are shared across all pages of the portfolio. Where possible, I tried to put any reusable head elements in here to dynamically add to all pages instead of having to copy and paste them individually on each page.
</br></br>
Change in one place, change in all.

##### Header
This folder contains the Light to Dark Toggle, Main Navigation, and general header styling.

```header/style```
</br>
Contains general header styling. Each component has its own respective style folder present.

###### Header: Light to Dark Toggle
```header/light-to-dark-toggle/functions```
</br>
Includes all functions related to the toggle. Rather than having one large file, I put each function in its own file for easier debugging and easier management of them.

```header/light-to-dark-toggle/img```
</br>
Includes images being used, sun and moon, for mobile and desktop view. All images are in svg.

```header/light-to-dark-toggle/toggle.js```
</br>
Includes reusable variables that are used in the functions folder and also includes the main ```function ToggleThemeEventListener```

###### Header: Main Navigation
```header/main-navigation/functions```
</br>
Includes function that adds Nav Elements to the page and Mobile Menu Toggle.

##### Home
Contains the styling applied to the home page, ```index.html```.

##### Latest Updates
This folder contains GraphQL - code related to fetching api data for currently reading and recently read from (hardcover.app)[https://hardcover.app/] API and the style folder for the page.
</br></br>
Inside the GraphQL folder contains [its own respective README.md](latest-updates/GraphQL/README.md) related to coding logic and structure used.

##### Main
Includes code that runs on all pages, ```main.js```, universal styling used across multiple pages, as well as a helper functions folder.

```main/helper-functions/revealContent.js```
</br>
Initially, all html pages are set to visibility hidden in inline. After a set amount of time, when css files are loaded and functions are run, the content becomes visible.

```main/main.js```
</br>
Functions run on all pages via a script tag in the header element.

##### Netlify/functions
Contains Netlify Serverless Functions that allows me to utilize environment variables. At the present moment of writing this documentation, the only environment variable being used is the API_KEY from the [hardcover.app](https://hardcover.app/).
</br></br>
Inside netlify/functions folder contains [its own respective README.md](netlify/functions/README.md) related to coding logic and structure used.

##### Footer
Utilized for both the About Me and Latest Updates page. It looks for the footer element on the page, and if it is present it adds the footer, if not (as is the case with the home page) it does not add it.

##### Fonts
Font classes used universally across the site.

##### HTML Files
All HTML files are in the root folder to avoid having additional paths in the url. Since this is a small project, it is manageable to do this.

#### Localhost Vewing + Testing

##### Local environment - without Environment Variables on Netlify
<strong>Put in VS Code terminal:</strong> ```python3 -m http.server 8000```
<br/>
<strong>Chrome:&nbsp;</strong>http://localhost:8000/
<br/>
<strong>Safari:&nbsp;</strong>http://127.0.0.1:8000 | ```http://127.0.0.1:<port>```

##### Local environment - with Environment Variables on Netlify
You must run the below to be able to access the environment variables needed in your localhost environment. It generates it's own localhost:8888.

 ```netlify dev```

##### Production
https://saharafathelbab.netlify.app/

##### Cypress
For Cypress testing, please view the ```cypress``` folder. ```cypress-examples``` contains examples from (cypress.io)[https://www.cypress.io/] on the type of testing possible.

###### Open Cypress

```npx cypress open```
