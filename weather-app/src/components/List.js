import React, { useState } from "react"
import ActivityForm from "./Form"


const List = () => {

const [activities, setActivities] = useState([]);
const handleAddActivity = (activity) => {
    setActivities([prevActivities => [...prevActivities, activity]])
};

return(
    <section className="list">
        <ActivityForm onAddActivity={handleAddActivity} />
    </section>
)
}

export default List;