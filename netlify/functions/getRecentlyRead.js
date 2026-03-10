const { USER_ID, API_KEY, API_ENDPOINT } = require('./utils');

const recentlyReadGraphQLQuery = `
query RecentlyRead {
  user_books(
    where: {user_id: {_eq: ${USER_ID}}, status_id: {_eq: 3}}
    order_by: {last_read_date: desc_nulls_last}
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
    const recentlyReadResponse = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${API_KEY}`,
      },
      body: JSON.stringify({
        query: recentlyReadGraphQLQuery
      }),
    });

    if (!recentlyReadResponse.ok) {
      throw new Error(`HTTP error! status: ${recentlyReadResponse.status}`);
    }

    const recentlyReadResult = await recentlyReadResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(recentlyReadResult),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from external API' }),
    };
  }
};

module.exports = { handler };
