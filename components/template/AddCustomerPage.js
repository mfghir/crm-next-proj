import React, { useState } from "react";
import Form from "../module/Form";

const AddCustomerPage = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    product: [],
  });

  const cancelHandler =()=>{}
  const saveHandler =()=>{}

  return (
    <div className="customer-page">
      <h4>Add new customer</h4>
      <Form form={form} setForm={setForm} />

      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler} >Cancel</button>
        <button className="second" onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
};

export default AddCustomerPage;
