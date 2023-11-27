import React, { useState } from "react";

function CallPage() {
  const [
    { name, email, number, business_type, security_assessment, package_type },
    setFormData,
  ] = useState({
    email: "",
    number: "",
    business_type: "",
    name: "",
    security_assessment: 0,
    package_type: 0,
  });

  const changeFormData = (field, value) => {
    console.log(import.meta.env.STARSHIP_SHIELD_API);
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const apiUrl = "https://back-end-sooty.vercel.app/api";
    const apiData = {
      fullName: name,
      email: email,
      phoneNumber: String(number),
      businessDescription: String(business_type),
      pentestType: String(security_assessment),
      applicationType: "none",
      packageType: String(package_type),
    };

    fetch(`${apiUrl}/create-business`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => {
        if (response.status == 200) {
          window.location.href = "/schedule-a-time";
        } else {
          console.error(response);
        }
      })
      .then((data) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  return (
    <>
      <form
        action="/schedule-a-time"
        onSubmit={(e) => onSubmit(e)}
        className=""
      >
        <label className="text-xl" htmlFor="name">
          Full Name
        </label>
        <input
          onChange={(e) => changeFormData("name", e.target.value)}
          placeholder="John Doe"
          className="rounded-full w-full p-2 md:p-4 mb-6"
          type="text"
          id="name"
          name="user_name"
          required
        />

        <label className="text-xl" htmlFor="phone">
          Email Address
        </label>
        <input
          onChange={(e) => changeFormData("email", e.target.value)}
          placeholder="example@business.com"
          className="rounded-full w-full p-2 md:p-4 mb-6"
          type="email"
          id="email"
          name="user_email"
          required
        />

        <label className="text-xl" htmlFor="phone">
          Phone Number
        </label>
        <input
          onChange={(e) => changeFormData("number", e.target.value)}
          placeholder="+123 456 789"
          className="rounded-full w-full p-2 md:p-4 mb-6"
          type="tel"
          id="phone"
          name="phone"
          required
        />
        <label className="text-xl" htmlFor="phone">
          About Your Business
        </label>
        <input
          onChange={(e) => changeFormData("business_type", e.target.value)}
          placeholder="E-Commerce Company"
          className="rounded-full w-full p-2 md:p-4 mb-6"
          type="string"
          required
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer btn-primary btn-lg w-full md:w-80 mt-8"
          >
            Schedule a time that fits you
          </button>
        </div>
      </form>
    </>
  );
}

export default CallPage;
