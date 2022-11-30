import React from "react";
import hero from "../assets/images/hero.svg";
import Logo from "../components/logo";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
	return (
		<Wrapper>
			<Logo />
			<div className="page">
				<div className="main">
					<p>
						Thousands of Field-Agents cannot sell in months working day & night
						what a Youtuber can sell in an hour sitting in his room from the
						comfort of his/her room . We make this collaboration easy.
						<br />
						Campaigns from <span>Affiliate Marketing</span> to{" "}
						<span>Brand Endorsements</span>
					</p>
					<button className="btn btn-hero">Login/Register</button>
				</div>
				<img className="main" src={hero} alt="" />
			</div>
		</Wrapper>
	);
};

export default Landing;
