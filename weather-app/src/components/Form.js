import React, { useState } from "react";

// Define the ActivityForm component, which receives onAddActivity as a prop
const ActivityForm = ({ onAddActivity }) => {
  // Define state variables for the form inputs
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Call onAddActivity with the activity data
    onAddActivity({ name, isForGoodWeather });

    // Reset the form inputs
    setName("");
    setIsForGoodWeather(false);
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>

      <label htmlFor="name">Name of Activity:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="isForGoodWeather">Good for good weather:</label>
      <input
        id="isForGoodWeather"
        type="checkbox"
        checked={isForGoodWeather}
        onChange={(e) => setIsForGoodWeather(e.target.checked)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ActivityForm;
