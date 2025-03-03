function Greeting({ username }) {
    return <div>
        <h1>"Hello, {username}!"</h1>
        <p style={{color: "yellow"}}>Inline Style, Time: {new Date().toLocaleTimeString()}</p>        
    </div>;
}



export default Greeting;