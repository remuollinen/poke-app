import React from "react";
import { Router } from "react-router-dom";

import Header from "./components/Header";
import PokeList from "./components/PokeList";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header />
			<PokeList />
		</div>
	);
};

export default App;
