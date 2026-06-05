export async function handler(event) {

  const lat = event.queryStringParameters.lat;
  const lon = event.queryStringParameters.lon;

  try {

    const response = await fetch(
      `https://api.weather-ai.co/v1/weather?lat=${lat}&lon=${lon}&units=metric`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEATHER_API_KEY}`
        }
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };

  }
}