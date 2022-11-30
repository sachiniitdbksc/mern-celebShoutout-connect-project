import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/landing">landing</Link>
			<Link to="/login">Login</Link>
		</nav>
	);
};

export default Home;
