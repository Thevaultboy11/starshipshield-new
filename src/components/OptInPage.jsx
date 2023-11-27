import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const OptInPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <label for="name">Full Name</label>
      <input
        placeholder="John Doe"
        class="rounded-full w-full p-2 md:p-4"
        type="text"
        id="name"
        name="user_name"
        required
      />

      <label for="user_email">Email Address</label>
      <input
        placeholder="example@business.com"
        class="rounded-full w-full p-2 md:p-4"
        type="email"
        id="email"
        name="user_email"
        required
      />

      <label for="phone">Phone Number</label>
      <input
        placeholder="+123 456 789"
        class="rounded-full w-full p-2 md:p-4"
        type="string"
        id="phone"
        name="phone"
        required
      />

      <button type="submit" class="cta-button-lg mx-auto md:w-72 mt-8">
        Send Me The White Paper
      </button>
    </>
  );
};

// you're good hackers but we are better :D
export default OptInPage;
