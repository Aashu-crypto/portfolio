"use client";
import React, { useState } from "react";
import { FaDownload, FaHatCowboy } from "react-icons/fa";
import { Link } from "react-scroll";
type Props = {};

function NavBar({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-400 dark:border-gray-600">
      <div className="flex justify-between items-center p-4 px-12">
        <a href="/" className="flex gap-2">
          <FaHatCowboy size={"25"} />
          <span>Portfolio</span>
        </a>

        <div
          className={` ${open ? "block" : "hidden"} md:flex`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:gap-8 absolute top-16 right-5 md:static">
            <li className={`${open?"border rounded-md text-center m-1 bg-slate-200":""}`}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium"
              >
                About Me
              </Link>
            </li>
            <li className={`${open?"border rounded-md text-center m-1 bg-slate-200":""}`}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium"
              >
                Skills
              </Link>
            </li>
            <li className={`${open?"border rounded-md text-center m-1 bg-slate-200":""}`}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium"
              >
                Projects
              </Link>
            </li>
            <li className={`${open?"border rounded-md text-center m-1 bg-slate-200":""}`}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-md w-auto flex">
          <button className="text-white flex items-center justify-center p-2 text-base hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-black mr-2">
            <a
              href="https://drive.google.com/file/d/1JZHTGnMn5ryLlS6glTrI9Yt3JlUuyVuo/view?usp=sharing"
              className="flex"
            >
              Resume
              <FaDownload className="ml-1" />
            </a>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
