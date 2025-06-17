import React, { useActionState } from "react";

import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
export default function Signup() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const acquisition = formData.getAll("acquisition"); // Get all checked checkboxes
  //   const data = Object.fromEntries(formData.entries()); // Convert FormData to an object
  //   data.acquisition = acquisition; // Add the acquisition array to the data object
  //   console.log("Signup Data:", data);
  //   // Here you would typically handle the signup logic, e.g., API call
  //   event.target.reset(); // Reset the form after submission
  // };

  const handleFormAction = (prevState, formData) => {
    const acquisition = formData.getAll("acquisition"); // Get all checked checkboxes
    const data = Object.fromEntries(formData.entries()); // Convert FormData to an object
    data.acquisition = acquisition; // Add the acquisition array to the data object
    console.log("Signup Data:", data);
    // Here you would typically handle the signup logic, e.g., API call
    // Validate the form data
    const errors = [];
    if (!isEmail(data.email)) {
      errors.push("Please enter a valid email address.");
    }
    if (!isNotEmpty(data.password)) {
      errors.push("Password cannot be empty.");
    }
    if (!hasMinLength(data.password, 6)) {
      errors.push("Password must be at least 6 characters long.");
    }
    if (data.password !== data["confirm-password"]) {
      errors.push("Passwords do not match.");
    }
    if (!isNotEmpty(data["first-name"])) {
      errors.push("First name cannot be empty.");
    }
    if (!isNotEmpty(data["last-name"])) {
      errors.push("Last name cannot be empty.");
    }
    if (!isNotEmpty(data.role)) {
      errors.push("Please select your role.");
    }
    if (errors.length > 0) {
      return {
        errors,
        email: data.email || prevState.email,
        password: data.password || prevState.password,
        confirmPassword:
          data["confirm-password"] || prevState["confirm-password"],
        firstName: data["first-name"] || prevState["first-name"],
        lastName: data["last-name"] || prevState["last-name"],
        role: data.role || prevState.role,
        acquisition: data.acquisition || prevState.acquisition || [],
        terms: data.terms || prevState.terms || false,
      };
    }
    // If no errors, proceed with the signup logic (e.g., API call)
    console.log("Form submitted successfully with data:", data);
    // Reset the form data after successful submission
    return {
      errors: null, // Clear errors on successful submission
    };
  };
  // useFormAction is used to handle form submission in React Router v6.4+
  const [formData, formAction] = useActionState(handleFormAction, {
    errors: null,
  });
  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formData?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formData?.password}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formData?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formData?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formData?.lastName}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formData?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formData?.acquisition?.includes("google") || false}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formData?.acquisition?.includes("friend") || false}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultChecked={formData?.acquisition?.includes("other") || false}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            defaultChecked={formData?.terms || false}
          />
          I agree to the terms and conditions
        </label>
      </div>
      {formData?.errors && formData?.errors?.length > 0 && (
        <div className="error">
          <ul>
            {formData?.errors?.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
