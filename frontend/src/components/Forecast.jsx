import React from 'react'

const Forecast = ({ title, data}) => {
    // const data = [1,2,3,4,4];
  return (
    <div>
      <div className="flex itemscenter justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {
            data.map((d, index)=>(
                <div key={index}
                className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>{d.title}</p>
                    <img src={d.icon} 
                    alt="img"
                    className='w-12 my-1'
                    />
                    <p className='font-medium '>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Forecast