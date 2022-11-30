import React from "react";
import { Celeb } from "./celeb";
import { celebs } from "./celebsData";

export default function CelebList() {
	return (
		<section className="celebList">
			{celebs.map((celeb) => (
				<Celeb key={celeb.id} {...celeb} />
			))}
		</section>
	);
}
