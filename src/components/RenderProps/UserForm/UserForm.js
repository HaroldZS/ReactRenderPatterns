import React, { useState } from "react";
import "./UserForm.css";

function UserForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    age: "",
    password: "",
    repeatPassword: "",
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, repeatPassword } = formData;

    if (password !== repeatPassword) {
      setPasswordMismatch(true);
    } else {
      setFormSubmitted(true);
    }

    setTimeout(() => {
      setFormSubmitted(false);
      setPasswordMismatch(false);
    }, 2000);
  };

  return (
    <>
      <form className="user-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="repeatPassword">Repeat password:</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign up</button>
      </form>
      {!!passwordMismatch && props.onPasswordMismatch()}
      {!!formSubmitted && props.onFormSubmitted()}
    </>
  );
}

export { UserForm };
