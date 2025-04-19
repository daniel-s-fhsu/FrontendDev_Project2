import { useState } from "react";

function Greeting({ username }) {
    const possibleGreetings = [
        `Hello, ${username}!`,
        `Greetings, ${username}!`,
        `How are you, ${username}?`,
        `How's it going, ${username}?`,
        `Howdy ${username}`,
        `Good to see you ${username}`
    ];

    const selectRandomGreeting = () => {
        return possibleGreetings[Math.floor(Math.random() * possibleGreetings.length)];
    };

    const handleClick = () => {
        setGreetingMessage(selectRandomGreeting());
    }

    const [greetingMessage, setGreetingMessage] = useState(selectRandomGreeting());

    return <div>
        <h1>"{greetingMessage}"</h1>
        <p style={{color: "yellow"}}>Inline Style, Time: {new Date().toLocaleTimeString()}</p> 
        <button onClick={handleClick}>Change Greeting</button>       
    </div>;
}



export default Greeting;