import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({brand, length}) => {

    return (
      <>
        {/* Card */}
      <Link
        className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
        to={`/admin/car/${brand.toLowerCase()}`}
      >
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="group-hover:text-primary_red font-semibold text-primary_red dark:group-hover:text-neutral-400 dark:text-neutral-200">
                {brand}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {length} number of cars
              </p>
            </div>
            <div className="ps-3">
              <svg
                className="flex-shrink-0 size-5 text-primary_red dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
      {/* End Card */}
      </>
    );
  };
  
  export default Card;
  