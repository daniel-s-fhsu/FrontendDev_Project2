import { useState } from "react";

function TaskComponent() {
    const tasks = ["Work on homework", "Work on work", "Clean house", "Feed animals"];
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    
    // function getRandomTask() {
    //     return tasks[Math.floor(Math.random() * tasks.length)]
    // }
    const handleOnChange = (event) => {
        setFilteredTasks(tasks.filter(task => task.toLowerCase().includes(event.target.value)))
    };

    const handleSort = () => {
        const sortedTasks = [...filteredTasks].sort();
        setFilteredTasks(sortedTasks);
    };

    return (
    <div>
        <label>Search Tasks</label>
        <input onChange={handleOnChange}/>
        <h3>
            { filteredTasks.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </h3>
        <button onClick={handleSort}>Sort by Name</button>
    </div>
    );
}



export default TaskComponent;