import "./navbar.css";
import { Link, Router, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Boston Odyssey</span>
        </Link>
        {user ? (
          <button
            className="navButton"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            {user.username}
          </button>
        ) : (
          <div className="navItems">
            <button
              onClick={() => {
                navigate("signup");
              }}
              className="navButton"
            >
              Register
            </button>
            <button
              onClick={() => {
                navigate("login");
              }}
              className="navButton"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
