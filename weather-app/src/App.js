import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("activities")) || []
  );
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (newActivity) => {
    const activityWithId = { ...newActivity, id: Date.now() };
    setActivities((prevActivities) => [...prevActivities, activityWithId]);
  };

  const handleDeleteActivity = (id) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== id)
    );
  };

  if (!weather) {
    return <div>Loading...</div>;
  }

  const isGoodWeather =
    weather.condition === "clear" || weather.condition === "partly-cloudy";

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div className="App">
      <h2>
        {weather.condition} {weather.temperature}°C {weather.isGoodWeather}
      </h2>
      <List
        onAddActivity={handleAddActivity}
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}

export default App;
