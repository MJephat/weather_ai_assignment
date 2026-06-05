export const handler = async (event) => {
  try {
    const { lat, lon, units } = event.queryStringParameters;

    const BASE_URL = process.env.BASE_URL_ENV;
    const API_KEY = process.env.API_KEY_ENV;

    const url = `${BASE_URL}/v1/weather?lat=${lat}&lon=${lon}&units=${units}`;

    const response = await fetch(url, {
      headers: {
        "authorization": `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch weather data" }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};