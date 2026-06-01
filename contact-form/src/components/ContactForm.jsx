import { useState } from "react";
import "./styles/contactForm.css";

import FormInput from "./FormInput.jsx";
import FormTextarea from "./FormTextarea.jsx";
import FormSelect from "./FormSelect.jsx";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    priority: "",
    agree: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (value.length < 3) {
          error = "Minimum 3 characters required";
        } else if (value.length > 50) {
          error = "Maximum 50 characters allowed";
        }
        break;

      case "email": {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      }

      case "phone": {
        const phonePattern = /^\+91\d{10}$/;

        if (!phonePattern.test(value)) {
          error = "Phone format should be +91XXXXXXXXXX";
        }
        break;
      }

      case "subject":
        if (value.length < 5) {
          error = "Minimum 5 characters required";
        }
        break;

      case "message":
        if (value.length < 20) {
          error = "Minimum 20 characters required";
        } else if (value.length > 500) {
          error = "Maximum 500 characters allowed";
        }
        break;

      case "priority":
        if (!value) {
          error = "Please select priority";
        }
        break;

      case "agree":
        if (!value) {
          error = "You must agree to terms";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    setErrors({
      ...errors,
      [name]: validate(name, fieldValue),
    });
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.subject &&
      formData.message &&
      formData.priority &&
      formData.agree &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      priority: "",
      agree: false,
      newsletter: false,
    });

    setErrors({});
  };

  return (
    <div className="container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Advanced Contact Form</h1>

        <FormInput
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          valid={!errors.fullName}
          placeholder="Enter your name"
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          valid={!errors.email}
          placeholder="abc@company.com"
        />

        <FormInput
          label="Phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          valid={!errors.phone}
          placeholder="+91XXXXXXXXXX"
        />

        <FormInput
          label="Subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          valid={!errors.subject}
          placeholder="Enter subject"
        />

        <small>
          Word Count: {formData.subject.trim().split(/\s+/).filter(Boolean).length}
          /100
        </small>

        <FormTextarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          valid={!errors.message}
        />

        <FormSelect
          label="Priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          options={["Low", "Medium", "High"]}
          error={errors.priority}
          valid={!errors.priority}
        />

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />

          <label>Agree to Terms</label>
        </div>

        {errors.agree && <p className="error">{errors.agree}</p>}

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />

          <label>Newsletter Signup</label>
        </div>

        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
