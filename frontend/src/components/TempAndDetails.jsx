import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempAndDetails = ({ weather, units }) => {
    const currentHour = weather.hourly[0];
    const humidity = currentHour?.humidity;

  if (!weather || !weather.temp) return null;

  const {
    temp,
    feels_like,
    // humidity,
    wind_speed,
    icon,
    formattedLocalTime,
    // uv_index,
  } = weather;

  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${Math.round(feels_like)}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${Math.round(humidity)}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${
        units === "metric"
          ? `${Math.round(wind_speed)} km/h`
          : `${Math.round(wind_speed)} mph`
      }`,
    },
   
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: MdKeyboardArrowUp,
      title: "Time",
      value: formattedLocalTime,
    },
  ];

  return (
    <div>
      {/* CONDITION */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{formattedLocalTime}</p>
      </div>

      {/* MAIN */}
      <div className="flex flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-20" />

        <p className="text-5xl">{`${Math.round(temp)}°`}</p>

        {/* DETAILS */}
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center"
            >
              <Icon size={18} className="mr-1" />
              {title}: <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default TempAndDetails;