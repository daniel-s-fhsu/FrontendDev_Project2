function TaskComponent() {
    return <h3>
        {getRandomTask()}
    </h3>;
}

let tasks = ["Work on homework", "Work on work", "Clean house", "Feed animals"];

function getRandomTask() {
    return tasks[Math.floor(Math.random() * tasks.length)]
}

export default TaskComponent;