import React from "react";
import ActivityForm from "./Form";

const List = ({ onAddActivity, activities, onDeleteActivity }) => {
  return (
    <div>
      <h2>Weather & Activities App</h2>

      <ActivityForm onAddActivity={onAddActivity} />

      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
