import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokeList from "./components/PokeList";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PokeSingle from "./components/PokeSingle";
import FavList from "./components/FavList";

const App = () => {
	const [favourites, setFavourites] = useState();

	const favHandler = (pokemon) => {
		let item = favourites.some((item) => item.id === pokemon.id);

		if (!item) {
			setFavourites((prevState) => [...prevState, pokemon]);
		} else {
			const newArray = [...favourites];
			newArray.splice(
				newArray.splice(
					newArray.findIndex((item) => item.id === pokemon.id),
					1
				)
			);
			setFavourites(newArray);
		}
	};
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route
							path="pokemons"
							element={<PokeList favHandler={favHandler} />}
						></Route>
						<Route path=":pokemonName" element={<PokeSingle />} />
						<Route path="favourites" element={<FavList />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
