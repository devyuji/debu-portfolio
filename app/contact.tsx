"use client";

import { useRef, useState } from "react";

export default function Contact() {
  const email = useRef("aec.ece.debojyotimahto.2024.033@gmail.com");

  const [nameInput, setNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    const mail = `mailto:${email.current}?Subject=My name is ${nameInput}&body=${messageInput}`;

    window.location.href = mail;
  };

  return (
    <section className="w-full grid place-items-center gap-10 p-4" id="contact">
      <div>
        <h2 className="uppercase text-3xl font-bold">Contact Me</h2>
      </div>

      <div className="flex md:gap-2 gap-8 md:flex-row flex-col">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-orange-400 font-bold text-2xl">
            {"Don't"} Be Shy
          </h3>
          <p className="text-lg text-gray-400">
            Feel free to get in touch with me. {"I'm"} always open to discussing
            new projects creative ideas or opportunities to be part of your
            vision
          </p>

          <div className="flex gap-2 items-center text-gray-400">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p>{email.current}</p>
          </div>

          <div className="flex gap-2 items-center text-gray-400">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>Bokaro, India</p>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={submit} className="grid gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="h-12 bg-zinc-800 p-2"
              onChange={(e) => setNameInput(e.target.value)}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="bg-zinc-800 p-2 min-h-40"
              onChange={(e) => setMessageInput(e.target.value)}
            />

            <button className="bg-orange-500 rounded-2xl py-4 px-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
