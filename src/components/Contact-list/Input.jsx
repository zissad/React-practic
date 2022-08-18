import React from "react";
import { useState } from "react";

const USER_INIT_VALUE = {
  name: "",
  email: "",
  grope: "",
};

export default function Input({ getContact }) {
  const [values, setValues] = useState(USER_INIT_VALUE);
  const { name, email, grope } = values;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getContact(values);
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Enter Your Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          id="name"
          value={name}
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="email">Enter Your Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Name"
          id="email"
          value={email}
          onChange={onChangeHandler}
        />
        <br />
        <select name="grope" value={grope} onChange={onChangeHandler}>
          <option value="">Select Option</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <br />

        <input type="submit" name="Sing-up" onClick={onSubmitHandler} />
      </form>
    </div>
  );
}
