import React from "react";
import { FaDownload } from "react-icons/fa";
type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="bg-white border-gray-400 dark:border-gray-600">
      <div className=" flex justify-between items-center p-4">
        <a href="/" className=" flex">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
          />
          <span>N</span>
        </a>

        <div className=" bg-red flex gap-4 ">
          <ul>
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
        <div className="bg-black rounded-lg w-32">
  <button className="text-white flex items-center justify-center w-28">
    Resume <FaDownload className="ml-1" />
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
