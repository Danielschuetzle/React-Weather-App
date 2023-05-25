import React from "react";
import ActivityForm from "./Form";

const List = ({ onAddActivity, activities, onDeleteActivity }) => {
  return (
    <div>
      <h1>Weather & Activities App</h1>

      <ActivityForm onAddActivity={onAddActivity} />

      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
