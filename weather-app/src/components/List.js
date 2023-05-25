import React from "react";
import ActivityForm from "./Form";

// Define the List component, which receives onAddActivity and activities as props
const List = ({ onAddActivity, activities }) => {
  // Render a form for adding new activities and a list of existing activities
  return (
    <div>
      <h1>Weather & Activities App</h1>

      {/* Render the ActivityForm component, passing onAddActivity as a prop */}
      <ActivityForm onAddActivity={onAddActivity} />

      {/* Map over the activities array and render a list item for each activity */}
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
