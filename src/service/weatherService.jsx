import { DateTime } from "luxon";



const API_KEY = import.meta.env.VITE_API_KEY_ENV;
const BASE_URL = import.meta.env.VITE_BASE_URL_ENV;

if (!API_KEY || !BASE_URL) {
  console.error("Missing env variables!");
}

// ***************fetchin data from api **************
// const getWeatherData = async (endpoint, searchParams) => {
//   const url = new URL(`${BASE_URL}/v1/${endpoint}`);

//     // url.search = new URLSearchParams({...searchParams,appid: API_KEY});
//       url.search = new URLSearchParams(searchParams);

//       const res = await fetch(url, {
//             headers: {
               
//             Authorization: `Bearer ${API_KEY}`,
//             },
//         });
//             if (!res.ok) {
//             throw new Error(`API Error: ${res.status}`);
//         }

//   return res.json();
//   console.log(res)
 
// };



// export default getWeatherData;
// **************************Local time converter function******************************
const formatToLocalTime = (secs, offset, format="ccc,dd LLLL yyyy' | Local time: 'hh:mm a")=>
    DateTime.fromSeconds(secs + offset, {Zone: "utc"}).toFormat(format);

// ****************************changing code to url function****************************
const iconUrlFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;


// ******************************api data structuring function*******************
const formatCurrent = (data) => {
  const { location, current } = data;

  return {
    temp: current.temperature,
    feels_like: current.feels_like,
    humidity: current.humidity,
    wind_speed: current.wind_speed,

    icon: current.icon,
    condition: current.condition_code,

    country: location.country,
    lat: location.lat,
    lon: location.lon,
    //  lat: -1.286389,
    // lon: 36.817223,
    timezone: location.timezone,

    formattedLocalTime: current.time,
  };
};

const formatForecastWeather = (data) => {
  const hourly = data.hourly.slice(0, 6).map((h) => ({
    time: h.time,
    temp: h.temperature,
    icon: h.icon,
    wind: h.wind_speed,
    humidity: h.humidity,
  }));

  const daily = data.hourly
    .filter((h) => h.time.includes("12:00"))
    .slice(0, 5)
    .map((h) => ({
      time: h.time,
      temp: h.temperature,
      icon: h.icon,
    }));

  return { hourly, daily };
};
// *********************searching data from api ********************************
// const getFormattedWeatherData = async (searchParams) => {
//   const data = await getWeatherData("weather", {
//     lat: searchParams.lat,
//     lon: searchParams.lon,
//     units: "metric",
//   });

//   const formattedCurrentWeather = formatCurrent(data);

//   const formattedForecastWeather = formatForecastWeather(data);

//   return {
//     ...formattedCurrentWeather,
//     ...formattedForecastWeather,
//   };
// };

const getFormattedWeatherData = async (searchParams) => {
  const params = new URLSearchParams(searchParams);

  const res = await fetch(
    `/?${params.toString()}`
  );

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  const data = await res.json();

  return formatWeather(data); // keep your existing formatter
};


export default getFormattedWeatherData;