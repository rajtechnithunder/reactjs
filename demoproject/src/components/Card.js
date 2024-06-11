import React from 'react'

const image2 = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function Card({ title, duration, cost, img }) {
  return (
    <>
      <div className='flex'>
        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <img
            src={image2}
            alt="AirMax Pro"
            className="z-0 h-[200px] w-[500px] rounded-md rounded-b-none object-cover"
          />

          <div class="p-5">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis overflow-hidden line-clamp-1" >{title}</h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Project duration is {duration} Months</p>

            <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cost}</h6>
          </div>
        </div>

      </div>

    </>
  )
}

export default Card