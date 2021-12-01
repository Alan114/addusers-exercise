import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    //   if (userName.trim().length === 0 || age.trim().length === 0) {
    //     setError({
    //       title: "Invalid input",
    //       message: "Please enter a valid name and age (non-empty values).",
    //     });
    //     return;
    //   }
    //   if (+age < 1) {
    //     setError({
    //       title: "Invalid age",
    //       message: "Please enter a valid age (larger than 0).",
    //     });
    //     return;
    //   }
    //   props.onAddUser(userName, age);
    //   setUserName("");
    //   setAge("");
    // };

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (larger than 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setUserName("");
    // setAge("");
  };

  // const handleChangeUsername = e => {
  //   setUserName(e.target.value);
  // };

  // const handleChangeAge = e => {
  //   setAge(e.target.value);
  // };

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
            id="username"
            type="text"
            // value={userName}
            // onChange={handleChangeUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={handleChangeAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
