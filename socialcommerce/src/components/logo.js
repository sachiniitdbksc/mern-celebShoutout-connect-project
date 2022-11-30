import React from "react";
import logo from "../assets/images/logo.png";
import Wrapper from "../assets/wrappers/logo";

const Logo = () => {
	return (
		<Wrapper>
			<header>
				<img src={logo} alt="SocialCommerce Logo" />
				<h1 className="tagline">
					Brand <span>meets</span> Ambassadors
				</h1>
			</header>
		</Wrapper>
	);
};

export default Logo;
