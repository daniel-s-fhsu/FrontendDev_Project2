import { useState } from "react";

function TaskForm() {
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInput);
        setUserInput('');
    }

    return(
    <form>
        <input value={userInput} onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    );
}

export default TaskForm;