import React from "react";
import { FaDownload, FaHatCowboy } from "react-icons/fa";
type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-white border-gray-400 dark:border-gray-600">
      <div className=" flex justify-between items-center p-4 px-12">
        <a href="/" className=" flex gap-2">
          <FaHatCowboy size={"25"} />
          <span>Portfolio</span>
        </a>

        <div className=" bg-red flex gap-4 hidden md:flex" id="navbar-sticky">
          <ul className=" flex-col md:flex-row">
            <li>
              <a href="#" className="text-base font-medium ">
                {" "}
                About me
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base font-medium ">
                {" "}
                Skills
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base font-medium ">
                {" "}
                Project
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base font-medium ">
                {" "}
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div className=" rounded-md w-auto flex ">
          <button className="text-white flex  items-center justify-center p-2 text-base hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-black mr-2">
            Resume <FaDownload className="ml-1" />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    //     <div
    //       className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-cta"
    //     >
    //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavBar;
