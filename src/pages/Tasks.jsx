import { useState } from "react";
import TaskEntryDisplay from "../components/task/TaskEntryDisplay";
import TaskForm from "../components/task/TaskForm";


function Tasks() {
    
    const taskArray = [{ name: 'Feed dogs', description: 'Get the dogs some food' },
        { name: 'Feed cats', description: 'Get the cats some food' },
        { name: 'Do homework', description: 'Spend some time getting schoolwork done' },
        { name: 'Do work', description: 'Get work done for work' },
        { name: 'Clean house', description: 'Do chores around the house' }];
    
    const [tasksWithId, setTasksWithId] = useState(taskArray.map((task, index) => ({ name: task.name, description: task.description, key: crypto.randomUUID() })));
    
    const handleSubmit = (name, description) => {
        const newTasksWithId = [...tasksWithId, { name, description, key: crypto.randomUUID() }];
        setTasksWithId(newTasksWithId);
      };
    
    const handleDelete = (id) => {
        const newTasks = tasksWithId.filter((task) => task.key !== id);
        setTasksWithId(newTasks);
    };

    return (
        <div>
            <ul>
                {tasksWithId.map(task => (
                <TaskEntryDisplay
                    key={task.key}
                    taskName={task.name}
                    id={task.key}
                    description={task.description}
                    handleDelete={handleDelete}
                />
                ))}
            </ul>
            <hr />
            <TaskForm handleSubmit={handleSubmit} />
            <br />
        </div>
)}

export default Tasks;