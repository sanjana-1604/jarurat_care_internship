import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function AddPatientForm() {
  const { addPatient } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.contact) return;
    addPatient(formData);
    setFormData({ name: "", age: "", contact: "" }); // reset form
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mb-8 rounded-lg shadow-md bg-white"
    >
      <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">
        Add New Patient
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] outline-none"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] outline-none"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-[var(--info)] text-white rounded-lg hover:bg-[var(--teal)] transition"
      >
        Add Patient
      </button>
    </form>
  );
}
