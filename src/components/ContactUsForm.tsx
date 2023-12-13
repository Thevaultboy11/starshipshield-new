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
      <form onSubmit={(e) => onSubmit(e)} className="w-full">
        <label className="p1" htmlFor="name">
          Name of your company
        </label>
        <input
          onChange={(e) => changeFormData("name", e.target.value)}
          placeholder="John Doe"
          className="rounded-md w-full p-2 md:p-4 mb-6 border border-gray-300"
          type="text"
          id="name"
          name="user_name"
          required
        />

        <label className="p1" htmlFor="phone">
          Have you tried to solve this problem in the past?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="flex items-center ps-4 border border-gray-200 rounded-md bg-white">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600  border-gray-300  "
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 bg-white"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded-md bg-white">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600  border-gray-300"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 bg-white"
            >
              No
            </label>
          </div>
        </div>
        <label className="p1" htmlFor="phone">
          About Your Business
        </label>
        <textarea
          onChange={(e) => changeFormData("business_type", e.target.value)}
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Gdpr became mandatory in my country"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer btn-primary btn-lg w-full  mt-8"
          >
            Schedule a time that fits you
          </button>
        </div>
      </form>
    </>
  );
}

export default CallPage;
