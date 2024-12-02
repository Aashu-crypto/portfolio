import Image from "next/image";
import ManPic from "../public/images/ManPic.svg";
import "./globals.css";
import ResponsiveSVG from "../public/images/ResponsiveSvg";
import {
  FaDiscord,
  FaFacebookSquare,
  FaLinkedinIn,
  FaGitSquare,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiSocketdotio, SiRedux, SiWebrtc } from "react-icons/si";
import { FaEthereum, FaSchool, FaBriefcase, FaGitAlt } from "react-icons/fa";
import AboutMe from "../public/images/AboutMe.png";
import { useState } from "react";
import Form from "@/components/Form";
import Project from "@/components/Project";
import MyGitHub from "@/components/MyGitHub";
import LeetCode from "@/components/LeetCode";

export default function Home() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/aashutosh-gandotra/",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://x.com/AashutoshGando3",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discord.com/channels/@me",
    },
  ];
  const skillsName = [
    { icon: FaReact, name: "React Native" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaNode, name: "Node.js" },
    { icon: DiPostgresql, name: "PostgreSQL" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: IoLogoFirebase, name: "Firebase" },
    { icon: SiSocketdotio, name: "Socket.io" },
    { icon: SiRedux, name: "Redux" },
    { icon: FaGitAlt, name: "Git" },
    { icon: SiWebrtc, name: "WebRTC" },
  ];

  const experiences = [
    {
      company: "Ethereum Technologies",
      role: "React Native Developer",
      duration: "July 2023 - Present",
      location: "Jammu, India",
      icon: <FaEthereum />,
      details:
        "Developed 'All Cures,' a healthcare app leveraging WebRTC and WebSockets for real-time communication, boosting performance by 20%. Also created 'Saathi,' an elderly care platform with a React admin dashboard, website, and mobile app, integrating secure payments and user authentication. Built a backend for driver registration and car leasing using Node.js, Express, Prisma, and PostgreSQL, implementing effective slot management. Utilized Firebase Authentication, Amazon S3, Redis caching, and Docker for performance optimization and deployment.",
    },
    {
      company: "Ministry of Education, Government of India",
      role: "Computer Science Teacher",
      duration: "April 2022 - July 2023",
      location: "Jammu, India",
      icon: <FaSchool />,
      details:
        "Contributed to the UI/UX design of the JK Attendance SED app, gaining hands-on experience with React Native. Designed a Python curriculum for high school students to enhance their technical skills, creativity, and problem-solving abilities. Fostered an environment encouraging technical innovation and collaboration through project-based learning.",
    },
    {
      company: "Pie Infocomm Pvt. Ltd",
      role: "Web Developer",
      duration: "March 2022 - July 2022",
      location: "Lucknow, Uttar Pradesh, India",
      icon: <FaBriefcase />,
      details:
        "Developed and optimized responsive websites and web applications, enhancing user experience and functionality through efficient coding practices and UI improvements.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "All Cures",
      description:
        "Seeking a more diverse approach to healthcare? My app All Cures offers articles on a wide range of healing systems, direct doctor consultations via video & chat, community article submission, and secure payment integration (CCAvenue). Leveraging WebRTC, WebSockets, and Redux for a seamless experience.",
      link: "https://play.google.com/store/apps/details?id=com.allcures&hl=en&gl=US&pli=1",
      image: "/images/AllCures.jpg",
      live: true,
    },
    {
      number: "02",
      title: "GenZ Express",
      description:
        "GenZ Express is a React Native e-commerce app tailored for the younger generation of shoppers. It includes an intuitive product browsing and search function, secure payment integration, wishlist functionality, and smooth animations. The backend, built with Mongoose and MongoDB, ensures reliable inventory management, while Express.js handles secure user authentication and order processing. Optimized API calls guarantee a responsive app experience, leveraging JavaScript, Redux, and Firebase for a seamless shopping experience.",
      link: "https://github.com/Aashu-crypto/ecommerce",
      image: "/images/ecommerce.jpg",
      live: false,
    },
    {
      number: "03",
      title: "Saathi",
      description:
        "An elderly care platform encompassing a React admin dashboard, website, and React Native mobile app. Integrated secure payments and user authentication, enabling reliable access for users. Built RESTful APIs with Firebase Authentication, Amazon S3 for image storage, and Redis for caching, deployed using Docker.",
      link: "https://play.google.com/store/apps/details?id=com.aashutoshgandotra14.saathi&hl=en",
      image: "/images/saathi.png",
      live: true,
    },
    {
      number: "04",
      title: "JK Attendance SED",
      description:
        "Contributed to the UI/UX design of the JK Attendance app, which helps monitor attendance for the Ministry of Education. Gained expertise in React Native during this project.",
      link: "https://play.google.com/store/apps/details?id=com.attendance.dsek&hl=en_IN",
      image: "/images",
      live: true,
    },
    {
      number: "05",
      title: "Zaptric Driver",
      description:
        "Created App for Drive App for driver to see rides and accept Rides",
      link: "https://github.com/Aashu-crypto/Driver-app",
      image: "/images/zaptric.png",
      live: true,
    },
  ];

  return (
    <div className=" flex flex-col  ">
      <div className="md:flex-row flex w-full flex-col p-5 md:p-14  ">
        <div className=" w-full md:w-1/2 items-center md:order-2 h-auto flex justify-center  md:justify-end">
          <ResponsiveSVG className=" w-full " />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col  font-sans mt-7 md:mt-4    ">
          <h1 className="justify-center md:justify-start text-2xl md:text-4xl  ">
            Hello I am
            <span className="font-extrabold"> Aashutosh Gandotra</span>
          </h1>

          <div className="font-outline text-4xl md:text-5xl font-extrabold tracking-wider leading-tight">
            Frontend Developer
          </div>
          <div className=" text-2xl md:text-4xl flex-row flex ">
            Based In{" "}
            <div className="font-extrabold ml-2 leading-10">India.</div>
          </div>

          <div className="text-xs  my-20 font-normal leading-6 text-slate-600  mt-10">
            Highly skilled React Native Developer with over 2 years of
            experience in full-stack development and a dedicated focus on mobile
            application development for the past year. Proficient in JavaScript,
            TypeScript, Redux, Firebase, WebRTC, WebSockets, and Docker.
            Experienced in building scalable, real-time solutions and delivering
            intuitive user experiences. Passionate about leveraging modern
            technologies to develop innovative, high-performance applications in
            collaborative and dynamic environments.
          </div>
          <div className="flex flex-row justify-around max-w-60 ">
            {socialLinks.map((Item, index) => {
              return (
                <a href={Item.url} key={index}>
                  <div className=" flex-col  bg-white hover:bg-black border-2 border-black p-1 rounded-md">
                    <Item.icon
                      size={"25"}
                      className=" text-black hover:text-white "
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col " id="skills">
        <div className=" text-3xl my-3 flex-row flex">
          My<div className="font-sans ml-2 font-semibold"> {"  "}Skills</div>
        </div>
        <div className="flex-row flex flex-wrap justify-center ">
          {skillsName.map((Item, index) => {
            return (
              <div
                key={index}
                className=" flex-row border-2 p-5 bg-white m-7 hover:bg-slate-100 border-black md:p-10 md:m-10 justify-center items-center text-center"
              >
                <Item.icon size="65" color="black" />
                <span className="mt-10 my-6 text-sm">{Item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-black text-white p-8">
        <h2 className="text-3xl  mb-8 text-center">
          My <span className="font-sans ml-2 font-semibold">Experience</span>
        </h2>
        {experiences.map((Exp, index) => {
          return (
            <div
              className=" text-white border border-gray-600 rounded-lg p-5 my-5 space-y-4 "
              key={index}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center gap-5">
                  <div>{Exp.icon}</div>
                  <div className="font-semibold">
                    {Exp.role} at {Exp.company}
                  </div>
                </div>
                <div className=" md:justify-end flex justify-center">
                  {Exp.duration}
                </div>
              </div>
              <p className="mb-2 text-slate-100">{Exp.details}</p>
            </div>
          );
        })}
      </div>

      <MyGitHub />
      <LeetCode />

      <div className="mt-10 md:grid md:grid-cols-2  p-10 md:p-14">
        <div>
          <Image
            src="/images/AboutMe.png"
            alt="Description of your image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-3xl my-3 flex flex-row text-black justify-center">
            About <div className="font-sans ml-2 font-semibold">Me</div>
          </div>
          <div className="h-4/5 flex flex-col justify-around text-sm my-8 leading-7 font-normal space-y-4">
            <p>
              I&apos;m a highly skilled React Native developer with over 2 years
              of professional experience, including a dedicated focus on React
              Native development for the past year. My expertise lies in
              creating intuitive and engaging mobile experiences, leveraging
              core React Native concepts, state management with Redux, and
              implementing real-time communication features using WebRTC and
              WebSockets. With a strong foundation in JavaScript and TypeScript,
              I excel in writing clean, maintainable, and high-performance code.
            </p>
            <p>
              My portfolio highlights my ability to deliver impactful projects,
              including &quot;AllCures&quot;—a cross-platform healthcare app
              available on both Android and iOS. This app showcases my skills in
              developing complex solutions with secure payment integrations and
              real-time communication. Additionally, my experience in building a
              full-stack e-commerce platform using Node.js, Express, and MongoDB
              demonstrates my versatility and expertise in backend and frontend
              development.
            </p>
            <p>
              I pride myself on being a detail-oriented problem solver with the
              ability to translate complex requirements into user-friendly
              interfaces. As a collaborative team player, I value continuous
              learning and knowledge sharing within dynamic development
              environments. If you&apos;re looking for a results-driven React
              Native developer passionate about crafting innovative mobile
              applications, let&apos;s connect and build something
              extraordinary!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* <div className=" text-3xl my-3 flex-row flex text-center">
          My<div className="font-sans ml-2 font-semibold"> {"  "}Projects</div>
        </div> */}
      </div>
      <div className=" bg-black " id="projects">
        <div className=" text-3xl my-3 flex-row flex text-white  justify-center mt-10">
          My<div className="font-sans ml-2 font-semibold"> {"  "}Projects</div>
        </div>
        <div className="container mx-auto px-4 py-8 ">
          {projects.map((project, index) => (
            <Project
              key={project.number}
              index={index}
              number={project.number}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              status={project.live}
            />
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
}
