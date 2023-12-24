import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Title: ${formData.title}, Author: ${formData.author}, Year: ${formData.year}, Message: ${formData.message}`,
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="author">Author</label>
      <input
        type="author"
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />

      <label htmlFor="year">Year</label>
      <input
        type="year"
        id="year"
        name="year"
        value={formData.year}
        onChange={handleChange}
      />

      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
