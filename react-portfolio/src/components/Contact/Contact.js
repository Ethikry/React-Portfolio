import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w516b17",
        "template_v8mgbtz",
        form.current,
        "JlxScyc9GtVMsyfrW"
      )
      .then(
        (result) => {
          alert(`Your message has been sent!`);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="section grid grid-cols-8 gap-4 mt-4">
      <div className="col-start-4 col-span-2 items-center">
        <h2 className="text-3xl text-center">Contact</h2>
      </div>
      <div className="container col-start-4 col-span-2">
        <form className="p-4" ref={form} onSubmit={sendEmail}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            name="user_name"
            onBlur={(e) => {
              if (!e.target.value) {
                alert("Name is required");
              }
            }}
          />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="email"
            name="user_email"
            onBlur={(e) => {
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailPattern.test(e.target.value)) {
                alert("Invalid email address");
              }
            }}
          />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Message
          </label>
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            name="message"
            onBlur={(e) => {
              if (!e.target.value) {
                alert("Message is required");
              }
            }}
          />
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
