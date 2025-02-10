function Greeting() {
    return <div>
        <h1>"Hello, Welcome to React!"</h1>
        <p style={{color: "yellow"}}>Inline Style, Time: {new Date().toLocaleTimeString()}</p>        
    </div>;
}



export default Greeting;