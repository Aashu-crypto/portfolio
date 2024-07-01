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

export default function Home() {
  const icoName = [FaFacebookSquare, FaLinkedinIn, FaXTwitter, FaDiscord];
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
      details: [
        "Developed 'All Cures' healthcare app, leveraging WebRTC, WebSockets, and Redux to deliver real-time communication features and a seamless user experience.",
        "Implemented secure payment processing (CCAvenue), ensuring a safe and convenient user journey.",
        "Contributed to a 20% increase in user engagement within the first month of the app's launch.",
      ],
    },
    {
      company: "Ministry of Education, Government of India",
      role: "Computer Science Teacher",
      duration: "April 2022 - July 2023",
      location: "Jammu, India",
      icon: <FaSchool />,
      details: [
        "Designed and implemented a comprehensive C++ curriculum for 11th and 12th-grade students, integrating theoretical concepts with practical programming exercises.",
        "Provided personalized guidance and support to enhance students' coding skills, problem-solving abilities, and critical thinking.",
        "Led student projects, fostering creativity, technical expertise, and collaborative work, contributing to improved student performance in C++ programming.",
      ],
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
  return (
    <div className=" flex h-screen flex-col p-5  ">
      <div className="md:flex-row flex w-full flex-col ">
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
          <div className="flex flex-row justify-around">
            {icoName.map((Item) => {
              return (
                <div className=" flex-col border-2 p-5 bg-black">
                  <Item size={"30"} color="white" />
                </div>
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
          {skillsName.map((Item) => {
            return (
              <div className=" flex-row border-2 p-5 bg-white m-7 hover:bg-slate-600 border-black md:p-12 md:m-10 justify-center items-center text-center">
                <Item.icon size="70" color="black" />
                <span className="mt-10 my-6 text-sm">{Item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-black text-white p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
        {experiences.map((Exp) => {
          return (
            <div className=" text-white border border-gray-600 rounded-lg p-5 m-5 ">
              <div className="flex flex-row justify-between">
                <div className=" flex flex-row gap-10">
                  <div>{Exp.icon}</div>
                  <div>
                    {Exp.role} at {Exp.company}
                  </div>
                </div>
                <div className=" justify-end flex">{Exp.duration}</div>
              </div>
              {Exp.details.map((detail, i) => (
                <li key={i} className="mb-2">
                  {detail}
                </li>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-10 md:grid md:grid-cols-2 ">
        <div>
          <Image
            src="/images/AboutMe.png"
            alt="Description of your image"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col">
          <div>About Me</div>
          <div className=" h-4/5 flex flex-col justify-around ">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>My Projects</div>
      </div>
    </div>
  );
}
