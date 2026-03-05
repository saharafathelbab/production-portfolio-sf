# How is it fetching the API data Securely?
With Netlify Functions. Please go to netlify/functions for more information

# Fetch - Why await response.json()?

```
const currentlyReadingResponse = await fetch('url to serverless function fetching api data)

const currentlyReadingData = await currentlyReadingResponse.json();
```

### Helpful Links to Reference

<strong>[helpful reading: Why `response.json()` must be awaited](https://dev.to/boscodomingo/why-responsejson-must-be-awaited-cbd#:~:text=It%20turns%20out%20json(),after%20fetch()%20has%20finished.)</strong>
<br/><br/>
<strong>[helpful watching: Why does JavaScript's fetch make me wait TWICE?](https://youtu.be/Ki64Cnyf_cA?si=9t5uC0h9XiUE4iGs)</strong>

### Brief Summary:
The initial fetch() call's promise resolves as soon as the response headers are received from the server, which happens relatively quickly. This does not guarantee that the entire, potentially large, response body has been downloaded yet. 
<br><br/>
It turns out json() must be awaited because fetch() will resolve or reject when it receives the response headers, regardless of what the body is! The body is likely  to be much larger in size, and may even take a long time to arrive and/or might do so in chunks, thus it has to be awaited even after fetch() has finished.
<br/><br/> 
So we have this second await here for the response to read all the data fully to completion. The first fetch await reads the headers, the second one for response reads the body. It is then parsed into json.

