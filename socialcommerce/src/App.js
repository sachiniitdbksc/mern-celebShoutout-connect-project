import React from "react";
import { Navbar, Landing, Error, Profile, Subahtwentyninenov } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<div>Oye, Chup ho jaa!</div>} />

				<Route
					path="*"
					element={
						<div>
							<h1>
								<Error />
							</h1>
						</div>
					}
				/>
				<Route path="/dailypractice" element={<Subahtwentyninenov />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
