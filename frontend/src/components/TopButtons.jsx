import React from 'react'
import { cities } from "../data/cities";


const TopButtons = ({setQuery}) => {

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
         key={city.id} 
         className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2
        rounded-md transition ease-in"
        onClick={()=> setQuery({lat: city.lat, lon: city.lon})}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons