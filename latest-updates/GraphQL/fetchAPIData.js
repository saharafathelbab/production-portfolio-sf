import { addCurrentlyReadingBooks } from "./helper-functions/addCurrentlyReadingBooks.js";
import { addRecentlyReadBooks } from "./helper-functions/addRecentlyReadBooks.js";


export async function fetchAPIData() {
    try {
    // Serverless functions URLs
    const currentlyReadingEndpointUrl = '/.netlify/functions/getCurrentlyReading';
    const recentlyReadEndpointUrl = '/.netlify/functions/getRecentlyRead'

    // The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. 
    const fetchCurrentlyReading = fetch(currentlyReadingEndpointUrl);
    const fetchRecentlyRead = fetch(recentlyReadEndpointUrl);

    // Waiting for both currentlyRead and recentlyRead data to be fetched - this reads the header
    const [currentlyReadingResponse, recentlyReadResponse] = await Promise.all([fetchCurrentlyReading, fetchRecentlyRead]);

    // Verifying the response came through and if not, the request status
    if (!currentlyReadingResponse.ok) {
      throw new Error(`HTTP error! Currently Read status: ${currentlyReadingResponse.status}`);
    }

    if (!recentlyReadResponse.ok) {
      throw new Error(`HTTP error! Recently Read status: ${currentlyReadingResponse.status}`);
    }

    // Waiting for both currentlyRead and recentlyRead data - this reads the body
    const currentlyReadingData = await currentlyReadingResponse.json();
    // console.log('Data from serverless function:', currentlyReadingData);

    const recentlyReadData = await recentlyReadResponse.json();
    // console.log('Data from serverless function:', recentlyReadData);

    // Add data to HTML
    addCurrentlyReadingBooks(currentlyReadingData.data.user_books); 
    addRecentlyReadBooks(recentlyReadData.data.user_books)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}