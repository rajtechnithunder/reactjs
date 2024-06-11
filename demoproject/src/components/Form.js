import React, { useState } from "react";

function Form({ getData }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");

  console.log(title);
  console.log(duration);
  console.log(cost);

  const manageSubmit = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      duration: duration,
      cost: cost,
    }
    getData(obj)

    setTitle("")
    setDuration("")
    setCost("")
  }

  return (
    <>
      <form onSubmit={manageSubmit} class="flex flex-col">
        <div class="mb-5">
          <input
            type="text"
            id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div class="mb-5">
          <input
            type="number"
            id="duration"
            placeholder="duration"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={duration}
            onChange={(e) => { setDuration(e.target.value) }}
          />
        </div>
        <div class="mb-5">
          <input
            type="number"
            id="cost"
            placeholder="cost"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
