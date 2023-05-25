import React, { useRef } from "react";

const ActivityForm = ({onAddActivity}) => {
  const nameRef = useRef();
  const isForGoodWeatherRef = useRef();

  const handleAddActivity = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const name = data.name;
    const check = data.check;

    const activity = {
      name: name,
      isForGoodWeather: check,
    };
    console.log(activity)
  };

  return (
      <form onSubmit={handleAddActivity}>
      <h2>Add New Activity</h2>
      <label htmlFor="name">Name of Activity:</label>
      <input id="name" type="text" name="name" ref={nameRef} required />
      <label htmlFor="isForGoodWeather">Good for good weather:</label>
      <input id="isForGoodWeather" type="checkbox" name="check" ref={isForGoodWeatherRef} />
      <button type="submit">Submit</button>
      </form>
  );
};

export default ActivityForm;
