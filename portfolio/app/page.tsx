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
      company: "Etherium Technologies",
      role: "React Native Developer | IOS Developer | Android Developer",
      duration: "July 2023 - Present",
      location: "Jammu, India",
      icon: <FaEthereum />,
      details:
        "If you're seeking a diverse approach to healthcare, All Cures is your go-to app. It features a wide range of articles on various healing systems, direct doctor consultations via video and chat, and community article submissions. Secure payments are handled through CCAvenue, ensuring safe transactions. The app leverages WebRTC, WebSockets, and Redux to provide a seamless, real-time experience, making it a comprehensive health companion that blends traditional and modern medical practices. ",
    },
    {
      company: "Ministry of Education, Government of India",
      role: "Computer Science Teacher",
      duration: "April 2022 - July 2023",
      location: "Jammu, India",
      icon: <FaSchool />,
      details:
        "I designed and implemented a comprehensive C++ curriculum tailored for 11th and 12th-grade students, which seamlessly integrated theoretical concepts with practical programming exercises. Through personalized guidance and support, I focused on enhancing students' coding skills, problem-solving abilities, and critical thinking. As a leader of student projects, I fostered an environment that encouraged creativity, technical expertise, and collaborative work, significantly contributing to improved student performance in C++ programming.",
    },
    {
      company: "Pie Infocomm Pvt. Ltd",
      role: "Web Developer",
      duration: "March 2022 - July 2022",
      location: "Lucknow, Uttar Pradesh, India",
      icon: <FaBriefcase />,
      details: [
        "Developed and optimized websites and web applications to improve user experience and functionality.",
      ],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "All Cures",
      description:
        "Seeking a more diverse approach to healthcare? My app All Cures offers.Articles on a wide range of healing systems Direct doctor consultations via video & chat Community article submission Secure payment integration (CCAvenue) Leveraging WebRTC, WebSockets, & Redux for a seamless experience",
      link: "https://play.google.com/store/apps/details?id=com.allcures&hl=en&gl=US&pli=1",
      image: "/images/AllCures.jpg",
      live: true,
    },
    {
      number: "02",
      title: "GenZ Express",
      description:
        "I have just wrapped up the development of GenZ Express a React Native e-commerce app tailored for the younger generation of shoppers. This project includes an intuitive product browsing and search function, secure payment integration, wishlist functionality, and smooth animations to enhance user experience. The backend, built with Mongoose and MongoDB, ensures reliable inventory and product data management, while Express.js handles secure user authentication and order processing. Optimized API calls guarantee a responsive app experience, and the entire system is designed with scalability in mind, leveraging JavaScript, Redux, and Firebase to deliver a seamless shopping experience.",
      link: "https://github.com/Aashu-crypto/ecommerce",
      image: "/images/ecommerce.jpg",
      live: false,
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
            Highly skilled React Native Developer with over 1 year of experience
            in mobile application development. Proficient in JavaScript, Redux,
            Firebase, and WebRTC/WebSockets. Passionate about delivering
            innovative user experiences and high-quality code. Seeking to
            contribute expertise in a collaborative environment to develop
            cutting-edge solutions.
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

      <MyGitHub/>

      <div className="mt-10 md:grid md:grid-cols-2  p-10 md:p-14">
        <div>
          <Image
            src="/images/AboutMe.png"
            alt="Description of your image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col ">
          <div className=" text-3xl my-3 flex-row flex text-black  justify-center">
            About <div className="font-sans ml-2 font-semibold"> {"  "}Me</div>
          </div>
          <div className=" h-4/5 flex flex-col justify-around text-xs my-8 leading-6 font-normal space-y-2">
            <p>
              I&apos;m a React Native developer with 2+ years of work
              experience, including a dedicated focus on React Native
              development for the past year. My passion lies in building
              intuitive and engaging mobile experiences. I&apos;m well-versed in
              core React Native concepts, state management with Redux, and
              integrating complex features like WebRTC and WebSockets for
              real-time communication capabilities. My proficiency in JavaScript
              allows me to write clean, maintainable, and performant code.
            </p>
            <p>
              My portfolio showcases my abilities, with projects like
              &quot;AllCures&quot; (available on both Android and iOS)
              demonstrating my expertise in developing cross-platform healthcare
              solutions. Additionally, my full-stack experience building an
              e-commerce application using Node.js, Express, and MongoDB
              highlights my adaptability and end-to-end development skills.
            </p>
            <p>
              Beyond my technical abilities, I possess strong problem-solving
              skills, attention to detail, and the ability to translate complex
              requirements into user-friendly interfaces. I&apos;m a
              collaborative team player, always eager to learn and share
              knowledge within a dynamic development environment. If you&apos;re
              seeking a results-oriented React Native developer passionate about
              creating impactful mobile applications, let&apos;s connect!
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
