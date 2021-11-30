import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameInputRef);
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (larger than 0).",
      });
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const handleChangeUsername = e => {
    setUserName(e.target.value);
  };

  const handleChangeAge = e => {
    setAge(e.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleError={handleError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={userName}
            id="username"
            type="text"
            onChange={handleChangeUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            id="age"
            type="number"
            onChange={handleChangeAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
