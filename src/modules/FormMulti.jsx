import { useState } from "react";
export default function MultipleInputs({ changeUserInfo, logged }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange({ target }) {
    
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    changeUserInfo(formData);
    logged();
  }
  return (
    <form>
      <input
        onChange={handleChange}
        placeholder="First Name"
        name="firstName"
      ></input>
      <input
        onChange={handleChange}
        placeholder="Last Name"
        name="lastName"
      ></input>

      <br />
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
}
