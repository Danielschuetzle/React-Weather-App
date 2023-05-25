import React, { useRef } from "react";

// Define the ActivityForm component, which receives onAddActivity as a prop
const ActivityForm = ({ onAddActivity }) => {
  // Create refs to hold the input DOM elements
  const nameRef = useRef();
  const isForGoodWeatherRef = useRef();

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract the input values into an activity object
    const activity = {
      name: nameRef.current.value,
      isForGoodWeather: isForGoodWeatherRef.current.checked,
    };

    // Call onAddActivity with the activity object
    onAddActivity(activity);

    // Reset the form inputs and focus the first input field
    nameRef.current.value = "";
    isForGoodWeatherRef.current.checked = false;
    nameRef.current.focus();
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>

      <label htmlFor="name">Name of Activity:</label>
      <input id="name" type="text" ref={nameRef} required />

      <label htmlFor="isForGoodWeather">Good for good weather:</label>
      <input id="isForGoodWeather" type="checkbox" ref={isForGoodWeatherRef} />

      <button type="submit">Submit</button>
    </form>
  );
};
export default ActivityForm;
