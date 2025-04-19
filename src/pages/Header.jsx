import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1>Task Manager</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/BasicComponents">Basic Components</Link>
                <Link to="/Tasks">Tasks</Link>
            </nav>
        </div>
    )
}

export default Header;