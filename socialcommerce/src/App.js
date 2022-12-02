import React from "react";
import { Navbar, Landing, Error, Dashboard, Subahtwentyninenov } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<div>Oye, Chup ho jaa!</div>} />
				<Route path="/dailypractice" element={<Subahtwentyninenov />} />

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
