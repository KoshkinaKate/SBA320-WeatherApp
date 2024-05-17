import { useState } from "react";

export default function Form({ weatherSearch }) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    weatherSearch(formData.searchterm);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="custom-input"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Enter location (lat,lng)"
        />
        <button className="custom-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

