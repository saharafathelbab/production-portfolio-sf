# Overview

## Files included
```getCurrentlyReading.js``` and ```getRecentlyRead.js``` 
</br></br>
Include the GraphQL Query data related to both sections to retrieve. For both sections, there is a limit of only 4 items to be retrieved.
</br></br>
```getCurrentlyReading.js```
</br></br>
The items are retrieved in descending order; latest book added or latest book that has reader activity such as progression updated.
</br></br>
```getRecentlyRead.js```
</br></br>
The items are retrieved in descending order of last read, specifically with ```desc_nulls_last```. The ```desc_nulls_last``` ensures that books that do not have read dates associated with them and were simply marked as a book read are at the bottom of the list, and the latest books completed with dates associated with them are at the top of the list to be retrieved.
</br></br>
```utils.js```
</br></br>
A place for shared variables used for both ```getCurrentlyReading.js``` and ```getRecentlyRead.js``` to limit copy and pasting the same variables.

## Question related to code

### Why is JSON.stringify() used to wrap around the query?
JSON.stringify() is used to convert a JavaScript object or value into a JSON-formatted string so the data can be reliably transmitted over a network (e.g., via HTTP requests) and understood by different programming languages. Network protocols typically exchange data as a sequence of bytes (strings), not complex, language-specific objects.
</br></br>
JSON serves as a universal, language-independent format for exchanging structured data between different systems (e.g., a JavaScript frontend and a Python backend).

[YouTube: Why do we need JSON.stringify and parse](https://youtu.be/E4FaVuGhDhk?si=XBkGGejAjgRCo8Ox)

## Netlify Functions

### What are Netlifly Functions?
Serverless functions, branded as Netlify Functions when running on Netlify, are a way to deploy server-side code as API endpoints. [Read More Here](https://www.netlify.com/blog/intro-to-serverless-functions/)

### How are they accessible in local environment?
Netlify Command Line Interface, or CLI. You must run the below to be able to access the environment variables needed in your localhost environment.

 ```netlify dev```

 ### Additional Links
 <strong> [Netlify Docs](https://docs.netlify.com/build/functions/overview/)</strong>