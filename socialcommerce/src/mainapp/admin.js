import React from "react";
import { Celeb } from "./celeb";
import { celebs } from "./celebsData";

const Admin = () => {
	return (
		<div>
			{celebs
				.filter((celeb) => celeb.status === "admin")
				.map((celeb) => (
					<Celeb key={celeb.id} {...celeb} />
				))}
		</div>
	);
};

export default Admin;
