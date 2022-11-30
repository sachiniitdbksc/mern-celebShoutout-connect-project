import React, { useState, useEffect } from "react";
import { Celeb } from "./celeb";

import Axios from "axios";

const homeURL = "http://localhost:4000/";

export const CelebList = () => {
	const [data, setData] = useState([]);
	const getUsers = async () => {
		const res = await Axios.get(homeURL);
		const resjson = await res.json();
		setData(resjson);
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<section className="celebList">
			{data.map((celeb) => console.log("got it"))}
		</section>
	);
};
