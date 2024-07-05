"use client";
import React, { useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [loading,setLoading]= useState(false)
  const validate = () => {
    const newErrors = { name: "", email: "", website: "", message: "" };
    let isValid = true;

    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }
    if (!message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!validate()) {
        return;
      }
    setStatus("Sending...");
    setLoading(true)

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
      setLoading(false)
      alert("I will reach back to you")
    } else {
      setStatus("Error sending email");
    }
  };
  return (
    <div className="md:grid md:grid-cols-2 md:mt-14 mt-10 relative" id="contact">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
          <div className="loader"></div>
        </div>
      )}
      <div className="p-6 md:p-14">
        <h2 className="text-3xl mb-8 text-center">
          Let&apos;s{" "}
          <span className="font-sans ml-2 font-semibold">Connect</span>
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
          <input
            type="email"
            placeholder="Email"
            className="border w-full rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
          <input
            type="text"
            placeholder="Your website (If exists)"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setWebsite(e.target.value)}
            value={website}
          />
         
          <textarea
            placeholder="How can I help?"
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {errors.message && <div className="text-red-500">{errors.message}</div>}
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md"
            onClick={handleSubmit}
          >
            Get In Touch
          </button>
        </form>
        {status && <div className="mt-4 text-center">{status}</div>}
      </div>
      <div className="p-10 flex flex-col justify-center">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl flex flex-row">
            Let&apos;s <span className="mx-2 font-outline">talk</span>for
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl flex flex-row">
            Something Special
          </h1>
        </div>

        <p className="font-normal text-slate-700 my-5">
          Send mail if you want to recruit or Have a project that needs my expertise. I will be happy to work with you.
        </p>
        <div className="font-bold text-2xl">
          Mail me: ashugandotra14@gmail.com
        </div>
      </div>
    </div>
  );
};
    
 
export default Form;
