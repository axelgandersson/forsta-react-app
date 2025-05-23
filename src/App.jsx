import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./Styles/App.css";
import "./Styles/index.css";
import "./Styles/Navbar.css";
import "./Styles/Sidebar.css";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<Router>
			<div className="app">
				<Navbar toggleSidebar={toggleSidebar} />
				<Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(false)} />

				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
