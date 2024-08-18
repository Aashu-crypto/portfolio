"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // useEffect hook to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav
      className={`sticky top-0 z-20 shadow-lg bg-white transition-opacity duration-300 ${
        scrollY > 0 ? "opacity-70" : "opacity-100"
      }`}
    >
      <div className="flex justify-between items-center p-4 px-12">
        <a href="/" className="flex gap-2 items-center">
          <Image
            src={"/images/me.jpg"}
            width={35}
            height={35}
            className="rounded-2xl"
            alt="Admin Photo"
          />
          <span className="font-semibold text-xl">Portfolio</span>
        </a>

        <div className={`${open ? "block" : "hidden"} md:flex`}>
          <ul className="flex flex-col md:flex-row md:gap-8 absolute top-16 right-5 md:static">
            <li className={`${open ? "border rounded-md text-center m-1 bg-slate-200" : ""}`}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium hover:font-bold"
              >
                About Me
              </Link>
            </li>
            <li className={`${open ? "border rounded-md text-center m-1 bg-slate-200" : ""}`}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium hover:font-bold"
              >
                Skills
              </Link>
            </li>
            <li className={`${open ? "border rounded-md text-center m-1 bg-slate-200" : ""}`}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium hover:font-bold"
              >
                Projects
              </Link>
            </li>
            <li className={`${open ? "border rounded-md text-center m-1 bg-slate-200" : ""}`}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="cursor-pointer text-base font-medium hover:font-bold"
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
