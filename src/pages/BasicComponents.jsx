import { useState } from "react";
import Greeting from "../components/basicComponents/Greeting";
import UserInfo from "../components/basicComponents/UserInfo";
import TaskComponent from "../components/task/TaskComponent";
import Counter from "../components/basicComponents/Counter";




function BasicComponents() {

    const [count, setCount] = useState(0);

    const handleAlert = () => {
        alert("Showing an alert");
    };

    return(
        <div>
            <Greeting username="Bob" />
            <hr />
            <Greeting username="Alice" />
            <hr />
            <UserInfo handleClick={handleAlert} />
            <hr />
            <TaskComponent />
            <hr />
            <Counter />
        </div>

)}

export default BasicComponents;