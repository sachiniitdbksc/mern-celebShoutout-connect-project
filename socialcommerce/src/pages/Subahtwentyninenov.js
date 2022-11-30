import React, { useState } from "react";
import { celebs2 } from "../assets/data/celebsDataJSArray";
import Backhome from "../components/Backhome";

const Subahtwentyninenov = () => {
	const [arr, setArr] = useState(celebs2);
	return (
		<>
			{arr.map(({ id, img, bio, age }) => (
				<div key={id}>
					<h1>{bio}</h1>
					<br />
					<h3>{age}</h3>
					<br />
					<img src={img} alt={"image not loaded of:" + bio.toUpperCase()} />
				</div>
			))}
			<Backhome />
		</>
	);
};

export default Subahtwentyninenov;
