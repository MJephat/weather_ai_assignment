import React from 'react'

const TopButtons = ({setQuery}) => {
   const cities = [
  { id: 1, name: "Nairobi", lat: -1.286389, lon: 36.817223 },
  { id: 2, name: "Mombasa", lat: -4.043477, lon: 39.668206 },
  { id: 3, name: "Nakuru", lat: -0.303099, lon: 36.080025 },
  { id: 4, name: "Naivasha", lat: -0.716667, lon: 36.433333 },
  { id: 5, name: "Kisumu", lat: -0.091702, lon: 34.768022 }
];

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