import React, { useState } from "react";

function TypeAssessment({ onChangePriceVariables, k }) {
  return (
    <div className="">
      <h1 className="block mb-4 text-base my-4">
        What Approach To Security Assessment You Need?
      </h1>
      <ul className="items-center grid grid-cols-1 md:grid-cols-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="white-box"
              type="radio"
              value={2}
              checked={k === 2}
              onChange={() => onChangePriceVariables("k", 2)}
              name="white-box"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
            />
            <label
              htmlFor="white-box"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              White Box
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="gray-box"
              type="radio"
              value={1.5}
              checked={k === 1.5}
              onChange={() => onChangePriceVariables("k", 1.5)}
              name="gray-box"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
            />
            <label
              htmlFor="gray-box"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Gray Box
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="black-box"
              type="radio"
              value={1}
              checked={k === 1}
              onChange={() => onChangePriceVariables("k", 1)}
              name="black-box"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
            />
            <label
              htmlFor="black-box"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Black Box
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TypeAssessment;
