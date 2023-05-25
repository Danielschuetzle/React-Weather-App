import React, { useRef } from "react";

const ActivityForm = ({ onAddActivity }) => {
  const nameRef = useRef();
  const isForGoodWeatherRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const Data = Object.fromEntries;

    const activity = {
      name: nameRef.current.value,
      isForGoodWeather: isForGoodWeatherRef.current.checked,
    };
    onAddActivity(activity);
    nameRef.current.value = "";
    isForGoodWeatherRef.current.checked = false;
    nameRef.current.focus();
  };

  return (
    <div>
      <h2>Add New Activity</h2>
      <label htmlFor="name">Name of Activity:</label>
      <input id="name" type="text" ref={nameRef} required />
      <label htmlFor="isForGoodWeather">Good for good weather:</label>
      <input id="isForGoodWeather" type="checkbox" ref={isForGoodWeatherRef} />
      <button type="submit">Submit</button>
    </div>
  );
};

export default ActivityForm;
