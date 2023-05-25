import React, { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  // State for activities
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("activities")) || []
  );

  // State for weather
  const [weather, setWeather] = useState({});

  // State for showing only good weather activities
  const [showOnlyGoodWeather, setShowOnlyGoodWeather] = useState(false);

  // Function to fetch weather data
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Fetch weather data on initial render
  useEffect(() => {
    fetchWeather();
  }, []);

  // Update local storage when activities state changes
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  // Function to handle adding a new activity
  const handleAddActivity = (newActivity) => {
    const activityWithId = { ...newActivity, id: Date.now() };
    setActivities([...activities, activityWithId]);
  };

  // Function to handle toggling of showing only good weather activities
  const handleToggleGoodWeather = () => {
    setShowOnlyGoodWeather(
      (prevShowOnlyGoodWeather) => !prevShowOnlyGoodWeather
    );
  };

  // Function to handle deleting an activity
  const handleDeleteActivity = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Weather & Activities App</h1>

      {/* Display weather condition and temperature */}
      <h2>
        {weather.condition} {weather.temperature}°C
      </h2>

      {/* Add Activity Form */}
      <Form
        onAddActivity={handleAddActivity}
        onToggleGoodWeather={handleToggleGoodWeather}
      />

      {/* List of activities */}
      <List
        activities={activities}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={weather.isGoodWeather}
        showOnlyGoodWeather={showOnlyGoodWeather}
      />
    </div>
  );
}

export default App;
