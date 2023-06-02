import React, { useState } from "react";

const Form = () => {
  const storedData = JSON.parse(localStorage.getItem("formData"));
  let initData = {};
  if (localStorage.getItem("formData")) {
    initData = { ...storedData };
  }

  const [formData, setFormData] = useState({
    name: initData?.name ?? "",
    email: initData?.email ?? "",
    address: initData?.address ?? "",
    phone: initData?.phone ?? "",
    subject: initData?.subject ?? "",
    message: initData?.message ?? "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleClear = () => {
    localStorage.removeItem("formData");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Name:</h5>{" "}
      <input
        defaultValue={initData?.name}
        type="text"
        name="name"
        onChange={handleForm}
      />
      <h5>Email:</h5>{" "}
      <input
        type="email"
        name="email"
        defaultValue={initData?.email}
        onChange={handleForm}
      />
      <h5>Address:</h5>{" "}
      <input
        type="text"
        name="address"
        defaultValue={initData?.address}
        onChange={handleForm}
      />
      <h5>Phone:</h5>{" "}
      <input
        type="text"
        name="phone"
        defaultValue={initData?.phone}
        onChange={handleForm}
      />
      <h5>Subject:</h5>{" "}
      <input
        type="text"
        name="subject"
        defaultValue={initData?.subject}
        onChange={handleForm}
      />
      <h5>Message:</h5>{" "}
      <textarea
        name="message"
        defaultValue={initData?.message}
        id=""
        cols="50"
        rows="10"
        onChange={handleForm}
      ></textarea>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClear}>
        Clear Data
      </button>
    </form>
  );
};

export default Form;
