// filepath: d:\skola\appar\forsta-react-app\src\components\navigation\Navbar.jsx
import { Link } from "react-router-dom";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import "../../Styles/Navbar.css";

export default function Navbar({ toggleSidebar }) {
	const scrollDirection = useScrollDirection();

	return (
		<nav className={`navbar ${scrollDirection === "down" ? "hide" : ""}`}>
			<div className="navbar-brand">Trasigatrasan</div>
			<div className="nav-links">
				<Link to="/" className="nav-item">
					Home
				</Link>
				<Link to="/products" className="nav-item">
					Products
				</Link>
				<Link to="/about" className="nav-item">
					About
				</Link>
				<Link to="/contact" className="nav-item">
					Contact
				</Link>
			</div>
			<button className="hamburger" onClick={toggleSidebar}>
				☰
			</button>
		</nav>
	);
}
