import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokeList from "./components/PokeList";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="pokemons" element={<PokeList />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
