import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(userName, age);
    setUserName("");
    setAge("");
  };

  const handleChangeUsername = e => {
    setUserName(e.target.value);
  };

  const handleChangeAge = e => {
    setAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={userName}
          id="username"
          type="text"
          onChange={handleChangeUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input value={age} id="age" type="number" onChange={handleChangeAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
