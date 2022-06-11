import React, { useState } from "react";
import BaseButton from "./BaseButton";

function BaseForm({ mode }) {
  const [formValue, setFormValue] = useState("");
  
  function handleSubmit(e) {
    alert("email: " + formValue);
    e.preventDefault();
  }

  function handleChange(e) {
    setFormValue(e.target.value);
    console.log(e)
  }

  if (mode === "newsletter") {
    return (
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label className="form-title" name="email">
          Subscribe to our newsletter
        </label>
        <div className="input-container">
          <input
            type="text"
            className="form-input"
            placeholder="Email address"
            name="email"
            value={formValue}
            onChange={handleChange}
          />
          <BaseButton mode="btn-input">
            <i className="fa-solid fa-arrow-right"></i>
          </BaseButton>
        </div>
      </form>
    );
  }
}

export default BaseForm;
