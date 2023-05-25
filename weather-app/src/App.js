import React, { useState } from "react";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    // Adding a unique id to each new activity object using Date.now()
    const activityWithId = { ...newActivity, id: Date.now() };
    setActivities((prevActivities) => [...prevActivities, activityWithId]);
  };

  // Define the isGoodWeather variable
  const isGoodWeather = true;

  // Filter the activities based on the isGoodWeather variable
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div className="App">
      <List
        onAddActivity={handleAddActivity}
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
      />
    </div>
  );
}

export default App;
