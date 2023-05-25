import React from "react";

const List = ({ activities, onDeleteActivity, isGoodWeather }) => {
  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );
  const badWeatherActivities = activities.filter(
    (activity) => !activity.isForGoodWeather
  );

  return (
    <div>
      <h2>Activities List</h2>

      {/* Good Weather Activities */}
      <div>
        <h3>Good Weather Activities</h3>
        <ul>
          {goodWeatherActivities.map((activity) => (
            <li
              key={activity.id}
              style={{
                backgroundColor: "orange",
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

      {/* Bad Weather Activities */}
      <div>
        <h3>Bad Weather Activities</h3>
        <ul>
          {badWeatherActivities.map((activity) => (
            <li
              key={activity.id}
              style={{
                backgroundColor: "lightblue",
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
