import React, { use, useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";
export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  const handleFormAction = async (prevState, formData) => {
    const newOpinion = {
      userName: formData.get("userName"),
      title: formData.get("title"),
      body: formData.get("body"),
    };
    const errors = [];
    if (!newOpinion.userName) {
      errors.push("User name is required.");
    }
    if (!newOpinion.title) {
      errors.push("Title is required.");
    }
    if (!newOpinion.body) {
      errors.push("Opinion body is required.");
    }
    if (errors.length > 0) {
      return {
        errors: errors,
        formData: formData,
      };
    }
    await addOpinion(newOpinion);
    return { errors: null };
  };
  const [formState, formStateAction] = useActionState(handleFormAction, {
    errors: null,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formStateAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
