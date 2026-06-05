import React, { useState, useCallback } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  // ✅ search handler (city OR fallback)
  const handleSearch = useCallback(() => {
    const trimmed = city.trim();
    if (!trimmed) return;

    setQuery({ q: trimmed });
  }, [city, setQuery]);

  // ✅ geolocation handler
  const handleLocation = useCallback(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setQuery({ lat: latitude, lon: longitude });
    });
  }, [setQuery]);

  // ✅ enter key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-row justify-center my-6">
      {/* SEARCH SECTION */}
      <div className="flex w-3/4 items-center justify-center rounded-full">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="text-gray-500 text-xl font-light p-2 w-full capitalize shadow-xl pace-x-4 bg-white rounded-full focus:outline-none placeholder:lowercase "
          placeholder="Search city..."
        />

        <BiSearch
          size={40}
          className="cursor-pointer hover:scale-110 transition"
          onClick={handleSearch}
        />

        <BiCurrentLocation
          size={40}
          className="cursor-pointer hover:scale-110 transition"
          onClick={handleLocation}
        />
      </div>

      {/* UNITS */}
      <div className="flex w-1/4 items-center justify-center space-x-3">
        <button
          className="text-2xl font-medium hover:scale-110 transition"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>

        <span className="text-2xl font-medium">|</span>

        {/* <button
          className="text-2xl font-medium hover:scale-110 transition"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button> */}
      </div>
    </div>
  );
};

export default Inputs;