import React from 'react'

const TimeAndLocation = ({weather: {formattedLocalTime, timezone, country}}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">
          {/* Wednesday, 5 June 2024 | Local time: 09:44 AM */}
          {formattedLocalTime}
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-3xl font-medium'>{`${timezone},${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation