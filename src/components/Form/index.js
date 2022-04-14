import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const styles = {
  form: {
    margin: "20px",
  },
  input: {
    display: "block",
    marginTop: "5px",
    marginBottom: "5px",
    width: "100%",
  },
};

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");

      return;
    }

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div>
      <form className="form" style={styles.form}>
        <input
          style={styles.input}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          style={styles.input}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <textarea
          style={styles.input}
          value={text}
          name="text"
          onChange={handleInputChange}
          type="text"
          placeholder="Add text here"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
