"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function page() {
  const text = "Say hello!";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current ?? "",
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          formRef.current?.reset;
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div>
            {text.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 3, repeat: Infinity }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😊
          </motion.div>
        </div>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="h-1/2 lg:h-[90%] lg:w-1/2 bg-gradient-to-tr from-green-50 to-purple-50 rounded-xl text-xl flex flex-col gap-8 p-8 m-4 justify-center"
        >
          <span>Dear Vitor Santos,</span>
          <textarea
            name="user_message"
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong. Please try again later.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
