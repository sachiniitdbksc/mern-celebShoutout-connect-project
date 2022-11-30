import React from "react";
import Loneli from "./2loneli";

const HomePageLoneliLess = () => {
	return (
		<div>
			{DataTransfer.map((loneli) => (
				<Loneli key={loneli.id} {...loneli} />
			))}
		</div>
	);
};

export default HomePageLoneliLess;
