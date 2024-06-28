import Image from "next/image";
import ManPic from "../public/images/ManPic.svg";
import "./globals.css";
import ResponsiveSVG from "../public/images/ResponsiveSvg";
import { FaDiscord, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Home() {
  const icoName = [FaFacebookSquare, FaLinkedinIn, FaXTwitter, FaDiscord];
  return (
    <div className=" flex h-screen flex-col ">
      <div className="md:flex-row flex w-full flex-col p-5">
        <div className=" w-full md:w-1/2 items-center md:order-2 h-auto ">
          <ResponsiveSVG className="w-full h-auto max-w-lg md:max-w-md lg:max-w-lg" />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col m-10 ">
          <h1 className="text-2xl flex ">
            Hello I am <div> Aashutosh Gandotra.</div>
            <div className="font-outline text-4xl font-extrabold tracking-wider">
              Frontend Developer
            </div>{" "}
            Based In India.
          </h1>
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
      <div className="flex justify-center items-center ">
        <div className=" text-3xl my-3 flex-row flex">
          My<div className="font-sans ml-2 font-semibold"> {"  "}Skills</div>
        </div>
      </div>
    </div>
  );
}
