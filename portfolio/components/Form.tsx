"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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
      setStatus("Your message has been sent successfully.");
      setName("");
      setEmail("");
      setWebsite("");
      setMessage("");
      setLoading(false);
      alert("Thank you! I'll get back to you shortly.");
    } else {
      setStatus(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  return (
    <div
      className="md:grid md:grid-cols-2 md:mt-14 mt-10 relative bg-gray-900 text-white"
      id="contact"
    >
      {loading && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
          <div className="loader"></div>
        </div>
      )}
      <div className="p-6 md:p-14">
        <h2 className="text-4xl mb-8 text-center font-jetbrains">
          Let&apos;s{" "}
          <span className="font-sans ml-2 font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && (
            <div className="text-red-400 text-sm">{errors.name}</div>
          )}
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && (
            <div className="text-red-400 text-sm">{errors.email}</div>
          )}
          <input
            type="text"
            placeholder="Your website (optional)"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
            onChange={(e) => setWebsite(e.target.value)}
            value={website}
          />

          <textarea
            placeholder="How can I assist you?"
            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 h-32 resize-none"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {errors.message && (
            <div className="text-red-400 text-sm">{errors.message}</div>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
        {status && (
          <div className="mt-4 text-center text-gray-300">{status}</div>
        )}
      </div>
      <div className="p-10 flex flex-col justify-center bg-gray-800/50 backdrop-blur-sm">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl flex flex-row font-jetbrains">
            Let&apos;s{" "}
            <span className="mx-2 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              discuss
            </span>{" "}
            your
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl flex flex-row font-jetbrains">
            Next Opportunity
          </h1>
        </div>

        <p className="font-normal text-gray-300 my-5 leading-relaxed">
          I&apos;m always excited to connect with innovative companies and
          teams. Whether you&apos;re looking for a skilled developer to join
          your team, have a project in mind, or want to explore potential
          collaborations, I&apos;d love to hear from you. Let&apos;s discuss how
          we can create something exceptional together.
        </p>
        <div className="font-medium text-xl text-blue-400 flex items-center gap-2">
          <Mail className="w-5 h-5" />
          ashugandotra14@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Form;
