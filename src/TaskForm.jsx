import { useState } from "react";
import * as yup from "yup";

function TaskForm({ handleSubmit }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const schema = yup.object().shape({
        taskName: yup.string().required(),
        description: yup.string().required()
    });

    const handleSubmissionEvent = (event) => {
        event.preventDefault();
        //console.log(`${taskName} : ${description}`);

        // Validation
        schema.isValid({ taskName, description})
            .then((valid) => {
                if (valid) {
                    handleSubmit(taskName, description);
                    setTaskName('');
                    setDescription('');
                } else {
                    alert("You must fill out both name and description!");
                }
            })

        
    }

    return(
    <form>
        <label>Task Name: </label>
        <input value={taskName} onChange={handleNameChange}/>
        <br />
        <label>Description: </label>
        <input value={description} onChange={handleDescriptionChange}/>
        <br />
        <button onClick={handleSubmissionEvent}>Submit</button>
    </form>
    );
}

export default TaskForm;