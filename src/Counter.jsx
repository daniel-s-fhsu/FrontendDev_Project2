import { useState } from 'react'

function Counter () {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click Me</button>
            <p>(Clicking the button increases the count)</p>
        </div>
    );
}

export default Counter;