import Image from "next/image";
import Link from "next/link";
import { M_PLUS_Rounded_1c } from "@next/font/google";
import { useEffect, useState } from "react";
const mPlusRounded1C700 = M_PLUS_Rounded_1c({ weight: "700" });

export default function HowWeWork({ allData }) {
  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  const toggleClass1 = () => {
    setActive1(!isActive1);
    setActive2(false);
    setActive3(false);
  };
  const toggleClass2 = () => {
    setActive1(false);
    setActive2(!isActive2);
    setActive3(false);
  };
  const toggleClass3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(!isActive3);
  };

  return (
    <div className=" flex flex-col md:min-h-[40vh] justify-center space-y-10 text-cleftenter ">
      <div className="container mx-auto">
        <h1
          className={`bg-gray-100 p-4 border-gray-900 border-b-2 leading-10 text-4xl tracking-tighter ${mPlusRounded1C700.className}`}
        >
          How we work
        </h1>

        <div
          className="flex md:flex-row flex-col md:gap-4 md:justify-between items-center"
          onClick={toggleClass1}
        >
          <div className="md:max-w-sm w-full md:text-center md:h-[250px] flex flex-col items-left md:mb-2 bg-white p-4 border-gray-900 border-b-2">
            <div className="font-bold text-2xl flex felx-col justify-between items-center ">
              {allData[0].heading}
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
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div
              className={`${
                isActive1 ? "block" : "hidden"
              } text-md text-gray-700 py-2 pr-8`}
            >
              {allData[0].caption}
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-4 md:justify-between items-center">
          <div className="md:max-w-sm w-full md:text-center md:h-[250px] flex flex-col items-left md:mb-2 bg-white p-4 border-gray-900 border-b-2">
            <div
              className="flex felx-col justify-between items-center font-bold text-2xl "
              onClick={toggleClass2}
            >
              {allData[1].heading}
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
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div
              className={`${
                isActive2 ? "block" : "hidden"
              } text-md text-gray-700 py-2 pr-8`}
            >
              {allData[1].caption}
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-4 md:justify-between items-center">
          <div className="md:max-w-sm w-full md:text-center md:h-[250px] flex flex-col items-left md:mb-2 bg-white p-4 border-gray-900 border-b-2">
            <div
              onClick={toggleClass3}
              className="flex felx-col justify-between items-center font-bold text-2xl "
            >
              {allData[2].heading}
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
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div
              className={`${
                isActive3 ? "block" : "hidden"
              } text-md text-gray-700 py-2 pr-8`}
            >
              {allData[2].caption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
