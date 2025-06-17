import React from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
export default function StateLogin() {
  // State for managing login form

  // Using useInput hook for email and password
  const {
    value: email,
    onChange: handleEmailChange,
    onBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: password,
    onChange: handlePasswordChange,
    onBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login State:", {
      email: email,
      password: password,
    });
    // Here you would typically handle the login logic, e.g., API call
    event.target.reset(); // Reset the form after submission
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          title="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          error={emailHasError ? "Please enter a valid email." : ""}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />

        <Input
          title="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          error={
            passwordHasError ? "Password must be at least 6 characters." : ""
          }
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
