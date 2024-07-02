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
import { FaEthereum, FaSchool, FaBriefcase } from "react-icons/fa";
import AboutMe from "../public/images/AboutMe.png";
import { useState } from "react";
import Form from "@/components/Form";
import Project from "@/components/Project";

export default function Home() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookSquare,
      url: "https://facebook.com/yourFacebookHandle",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/aashutosh-gandotra/",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://twitter.com/yourTwitterHandle",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discordapp.com/users/yourDiscordHandle",
    },
  ];
  const skillsName = [
    { icon: FaGitSquare, name: "Git" },
    { icon: FaReact, name: "React" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaNode, name: "Node.js" },
    { icon: DiPostgresql, name: "PostgreSQL" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: IoLogoFirebase, name: "Firebase" },
    { icon: SiSocketdotio, name: "Socket.io" },
    { icon: SiRedux, name: "Redux" },
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
        "I developed the 'All Cures' healthcare app, leveraging WebRTC, WebSockets, and Redux to deliver real-time communication features and a seamless user experience. Additionally, I implemented secure payment processing using CCAvenue, ensuring a safe and convenient user journey. My efforts contributed to a 20% increase in user engagement within the first month of the app's launch.",
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
        "Developed 'All Cures,' a comprehensive healthcare app offering diverse healing resources, direct doctor consultations, and community engagement...",
      link: "https://play.google.com/store/apps/details?id=com.allcures&hl=en&gl=US&pli=1",
      image: "/images/project1.png",
    },
    {
      number: "02",
      title: "GenZ Express",
      description:
        "Built 'GenZ Express,' a full-stack e-commerce application. Implemented secure payment integration, wishlist feature, and smooth animations for an enhanced user experience...",
      link: "https://github.com/Aashu-crypto/ecommerce",
      image: "/images/project2.png",
    },
  ];

  return (
    <div className=" flex h-screen flex-col  ">
      <div className="md:flex-row flex w-full flex-col p-14">
        <div className=" w-full md:w-1/2 items-center md:order-2 h-auto ">
          <ResponsiveSVG className="w-full h-auto max-w-lg md:max-w-md lg:max-w-lg" />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col  ">
          <div className="text-2xl flex ">
            Hello I am{" "}
            <div className="ml-2 font-extrabold">Aashutosh Gandotra.</div>
          </div>
          <div className="font-outline text-4xl font-extrabold tracking-wider">
            Frontend Developer
          </div>
          <div className="text-2xl flex-row flex ">
            Based In <div className="font-extrabold ml-2">India.</div>
          </div>

          <div className="text-xs my-8 leading-6 font-normal">
            Highly skilled React Native Developer with over 1 year of experience
            in mobile application development. Proficient in JavaScript, Redux,
            Firebase, and WebRTC/WebSockets. Passionate about delivering
            innovative user experiences and high-quality code. Seeking to
            contribute expertise in a collaborative environment to develop
            cutting-edge solutions.
          </div>
          <div className="flex flex-row justify-around max-w-60">
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
      <div className="flex justify-center items-center flex-col ">
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
        <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
        {experiences.map((Exp, index) => {
          return (
            <div
              className=" text-white border border-gray-600 rounded-lg p-5 m-5 space-y-4 "
              key={index}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div className=" flex flex-row items-center gap-5">
                  <div>{Exp.icon}</div>
                  <div className="font-semibold">
                    {Exp.role} at {Exp.company}
                  </div>
                </div>
                <div className=" md:justify-end flex">{Exp.duration}</div>
              </div>
              <p className="mb-2 text-slate-100">{Exp.details}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 md:grid md:grid-cols-2  p-14">
        <div>
          <Image
            src="/images/AboutMe.png"
            alt="Description of your image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col">
          <div className=" text-3xl my-3 flex-row flex text-black  justify-center">
            About <div className="font-sans ml-2 font-semibold"> {"  "}Me</div>
          </div>
          <div className=" h-4/5 flex flex-col justify-around text-xs my-8 leading-6 font-normal ">
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
      <div className=" bg-black ">
        <div className=" text-3xl my-3 flex-row flex text-white  justify-center">
          My<div className="font-sans ml-2 font-semibold"> {"  "}Projects</div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
          {projects.map((project, index) => (
            <Project
              key={project.number}
              index={index}
              number={project.number}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
}
