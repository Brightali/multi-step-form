import React from "react";

const PersonalInfoForm = () => {
  return (
    <div>
      <label htmlFor="name" className="">
        Name
      </label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" autoComplete="email" />

      <label htmlFor="phone">Phone Number</label>
      <input type="number" id="phone" name="phone" />
    </div>
  );
};

export default PersonalInfoForm;
