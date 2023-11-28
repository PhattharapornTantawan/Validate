import React, { useState } from "react";
import "./App.css";

const ValidateForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
    address: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [validationMessages, setValidationMessages] = useState([]);

  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
    address: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (values.name === "") {
      tempErrors.name = (
        <span className="error-message">name is a required field</span>
      );
    }
    if (values.email === "") {
      tempErrors.email = (
        <span classEamil="error-message">email is a required field</span>
      );
    }
    if (values.password === "") {
      tempErrors.password = (
        <span classPassword="error-message">password must be at least 8 characters</span>
      );
    }
    if (values.tel === "") {
      tempErrors.tel = (
        <span classTel="error-message">tel is a required field</span>
      );
    }
    if (values.address === "") {
      tempErrors.address = (
        <span classAddress="error-message">address is a required field</span>
      );
    }

    if (values.gender === "") {
      tempErrors.gender = (
        <span classGender="error-message">gender is a required field</span>
      );
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted");

      setSubmittedData({
        name: values.name,
        email: values.email,
        password: values.password,
        tel: values.tel,
        address: values.address,
        gender: values.gender,
      });

    } else {
      console.log("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        minLength="8"
        maxLength="30"
        value={values.name}
        onChange={handleChange}
      />
      <div>{errors.name}</div>

      <label>Email</label>
      <input
        type="text"
        name="email"
        minLength="6"
        maxLength="30"
        value={values.email}
        onChange={handleChange}
      />
      <div>{errors.email}</div>

      <label>Password</label>
      <input
        type="password"
        name="password"
        minLength="8"
        maxLength="15"
        value={values.password}
        onChange={handleChange}
      />
      <div>{errors.password}</div>

      <label>Tel</label>
      <input
        type="text"
        name="tel"
        minLength="10"
        maxLength="10"
        value={values.tel}
        onChange={handleChange}
      />
      <div>{errors.tel}</div>

      <label>Address</label>
      <input
        type="text"
        name="address"
        value={values.address}
        onChange={handleChange}
      />
      <div>{errors.address}</div>

      <label>Gender</label>
      <select name="gender" value={values.gender} onChange={handleChange}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div>{errors.gender}</div>

      <button type="submit">Submit</button>

        <div>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Tel: {submittedData.tel}</p>
          <p>Address: {submittedData.address}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>

      <br />
      <div>
        {validationMessages.length > 0 && <span>Validation Summary</span>}
        <ul>
          {validationMessages.map((vm, index) => (
            <li key={index}>{vm}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default ValidateForm;