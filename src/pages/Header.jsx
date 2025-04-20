import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../UserContext";

function Header() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      alert("You are logged out");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="header">
      <h1>Task Manager</h1>
      <nav>
        <Link to="/">Home</Link>
        {user && <Link to="/Tasks">Tasks</Link>}
        {user ? (
          <>
            <Link onClick={handleLogout}>
              Logout
            </Link>
            <span className="welcome-text">
              Hello, {user.displayName || user.email}
            </span>
          </>
        ) : (
          <Link to="/signIn">Sign In</Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
