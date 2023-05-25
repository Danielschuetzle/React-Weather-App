import React from "react";

const List = ({
  activities,
  onDeleteActivity,
  isGoodWeather,
  showOnlyGoodWeather,
}) => {
  // Filter activities based on showOnlyGoodWeather and isGoodWeather conditions
  const filteredActivities = showOnlyGoodWeather
    ? activities.filter(
        (activity) => activity.isForGoodWeather && isGoodWeather
      )
    : activities;

  return (
    <div>
      <h2>Activities for {isGoodWeather ? "Good" : "Bad"} Weather</h2>

      {/* Card container */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {/* Map through filtered activities and render list items */}
          {filteredActivities.map((activity) => (
            <li
              key={activity.id}
              style={{
                backgroundColor: activity.isForGoodWeather
                  ? "orange"
                  : "lightblue",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span>{activity.name}</span>
              </div>
              <button onClick={() => onDeleteActivity(activity.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
