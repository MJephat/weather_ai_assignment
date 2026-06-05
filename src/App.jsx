import { useEffect, useState } from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './service/weatherService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  const [query,setQuery] =  useState({q: "Nairobi"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () =>{
    const cityName = query.q ? query.q: "current location";
    toast.info (`Fetching weather data for ${cityName}`)


    const data = await getFormattedWeatherData( {...query, units})
    toast.success(`Fetched data for ${data.name || "location"}`);

   
      setWeather(data);
    
    console.log(data)
  }

    useEffect(() => {
      getWeather();
    }, [query, units]);
  // getWeather();

  const formatBackground = () =>{
    if(!weather) return " from-cyan-600 to-blue-700";
    const threshhold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshhold) return " from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700"
  }

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br 
    shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units}/>
          <Forecast title="1 hour step forecast" data={weather.hourly} />
          <Forecast title = "daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored' />
    </div>
  );
}

export default App