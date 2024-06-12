import React from 'react'

const image2 = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function Card({ title, duration, cost, onDelete, index, onUpdate }) {

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

            <div className='flex justify-between'>
              <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${cost}</h6>
              <div className='flex gap-1.5'>
                <button
                  onClick={onUpdate}
                  className=" bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  <svg
                    class="w-6 h-6 text-white dark:text-white"
                    strokeWidth={1.5}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                  </svg>

                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Card