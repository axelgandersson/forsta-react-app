import { Link } from "react-router-dom";
import "../../Styles/Sidebar.css";

export default function Sidebar({ isOpen, toggle }) {
	return (
		<div className={`sidebar ${isOpen ? "open" : ""}`}>
			<div className="sidebar-links">
				<Link to="/" className="sidebar-item" onClick={toggle}>
					Home
				</Link>
				<Link to="/products" className="sidebar-item" onClick={toggle}>
					Products
				</Link>
				<Link to="/about" className="sidebar-item" onClick={toggle}>
					About
				</Link>
				<Link to="/contact" className="sidebar-item" onClick={toggle}>
					Contact
				</Link>
			</div>
		</div>
	);
}
