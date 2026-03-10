const { API_KEY, API_ENDPOINT, USER_ID } = require('./utils');

const currentlyReadingGraphQLQuery = `
query CurrentlyReading {
  user_books(
    where: {user_id: {_eq: ${USER_ID}}, status_id: {_eq: 2}}
    order_by: {updated_at: desc}
    limit: 4
  ) {
    book {
      slug
      title
      contributions {
        author {
          name
        }
      }
      image {
        url
      }
    }
  }
}
`

const handler = async () => {
  try {
    const currentlyReadingResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${API_KEY}`,
      },
      body: JSON.stringify({
        query: currentlyReadingGraphQLQuery
      }),
    });

    if (!currentlyReadingResponse.ok) {
      throw new Error(`HTTP error! status: ${currentlyReadingResponse.status}`);
    }

    const currentlyReadingResult = await currentlyReadingResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(currentlyReadingResult),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from external API' }),
    };
  }
};

module.exports = { handler };
