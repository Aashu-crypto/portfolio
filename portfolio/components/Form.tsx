"use client";
import React, { useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("website", website);
    formData.append("message", message);

    const res = await fetch("https://formspree.io/f/xjkbvyog", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("Email sent successfully");
      setName("");
      setEmail("");
      setWebsite("");
      setMessage("");
    } else {
      setStatus("Error sending email");
    }
  };
  return (
    <div className="md:grid md:grid-cols-2 mt-16 ">
      <div className=" p-14">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="Email"
            placeholder="Email"
            className="border w-full rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your website (If exists)"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setWebsite(e.target.value)}
          />
          <textarea
            placeholder="How can I help?"
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md"
            onClick={handleSubmit}
          >
            Get In Touch
          </button>
        </form>
      </div>
      <div className="p-10 justify-around flex flex-col">
        <div>
          {" "}
          <h1 className="font-bold text-4xl max-w-96 flex flex-row">
            Let&apos;s <span className="mx-2 font-outline">talk</span>for
          </h1>
          <h1 className="font-bold text-4xl max-w-96 flex flex-row">
             Something Special
          </h1>
        </div>

        <p className=" font-normal text-slate-700">
          I seek to push the limits of creativity to create
          high-engaging,user-friendly, and memorable interactive experiences
        </p>
        <div className="font-bold text-2xl">ashugandotra14@gmail.com</div>
      </div>
    </div>
  );
};
export default Form;
