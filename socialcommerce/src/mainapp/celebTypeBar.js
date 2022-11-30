import React from "react";
import { celebs } from "./celebsData";

const uniqueProfessions = [
	{ id: 0, profession: "All" },
	...new Set(
		celebs.map((item) => {
			return { id: item.id, profession: item.profession };
		})
	),
];

const CelebTypeBar = () => {
	return (
		<div>
			<ul>
				{uniqueProfessions.map((item1) => {
					return (
						<li key={item1.id}>
							<a href={"#" + item1.profession}>{item1.profession}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CelebTypeBar;
