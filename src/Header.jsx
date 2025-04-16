import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/BasicComponents">Basic Components</Link>
            <Link to="/Tasks">Tasks</Link>
        </nav>
    )
}

export default Header;