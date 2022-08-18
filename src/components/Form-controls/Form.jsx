import { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    country: "",
    bio: "",
    date: "",
    gender: "",
    skills: [],
    agree: false,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const checkBoxHandler = (e) => {
    const check = e.target.checked;
    setUser({
      ...user,
      agree: check,
    });
  };
  const skillChangeHandler = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setUser({
        ...user,
        skills: [...user.skills, value],
      });
    } else {
      const newSkills = skills.filter(item => item !== value);
      setUser({
        ...user,
        skills: [...newSkills]
      })
    }
  };
  const { name, country, bio, date, agree, skills } = user;
  return (
    <div className="App">
      <input type="text" name="name" value={name} onChange={changeHandler} />
      <br />
      <select name="country" value={country} onChange={changeHandler}>
        <option>Select Country</option>
        <option value="bangladesh">Bangladesh</option>
        <option value="india">India</option>
        <option value="pakistan">Pakistan</option>
        <option value="china">China</option>
      </select>
      <br />
      <textarea name="bio" value={bio} onChange={changeHandler} />
      <br />
      <input type="date" name="date" value={date} onChange={changeHandler} />
      <br />
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={changeHandler}
          id="male"
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={changeHandler}
          id="female"
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={changeHandler}
          id="other"
        />
        <label htmlFor="other">Other</label>
      </div>
      <div>
        <h4>Skills : </h4>
        <input
          type="checkbox"
          name="skills"
          id="java"
          value="java"
          checked={skills.includes("java")}
          onChange={skillChangeHandler}
        />
        <label htmlFor="java">Java</label>
        <input
          type="checkbox"
          name="skills"
          id="javascript"
          value="javascript"
          checked={skills.includes("javascript")}
          onChange={skillChangeHandler}
        />
        <label htmlFor="javascript">JavaScript</label>
        <input
          type="checkbox"
          name="skills"
          id="python"
          value="python"
          checked={skills.includes("python")}
          onChange={skillChangeHandler}
        />
        <label htmlFor="python">Python</label>
      </div>
      <br />
      <br />
      <input
        type="checkbox"
        onChange={checkBoxHandler}
        checked={agree}
        id="agree"
      />
      <label htmlFor="agree">I Agree with this terms and condition</label>
      <br />
      <button onClick={() => console.log(user)}>Click here</button>
      <br />
    </div>
  );
}

export default Form;