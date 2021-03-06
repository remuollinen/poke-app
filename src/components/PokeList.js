import React, { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const PokeList = ({ favHandler, favourites }) => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [nextPokemons, setNextPokemons] = useState(
		"https://pokeapi.co/api/v2/pokemon/"
	);

	useEffect(() => {
		getPokemons();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPokemons = () => {
		axios
			.get(nextPokemons)
			.catch((error) => console.log(error))
			.then((res) => {
				const fetches = res.data.results.map((p) =>
					axios.get(p.url).then((res) => res.data)
				);

				setNextPokemons(res.data.next);

				Promise.all(fetches).then((data) => {
					setPokemons((prevState) => [...prevState, ...data]);
					setIsLoading(false);
				});
			});
	};

	return (
		<div>
			<Container className="text-center">
				<Row
					xs={1}
					md={4}
					lg={6}
					className="justify-content-between my-5 g-flex gap-3"
				>
					{isLoading && <Spinner animation="border" role="status"></Spinner>}
					{!isLoading &&
						pokemons.map((pokemon) => (
							<PokemonCard
								key={pokemon.id}
								type={pokemon.types[0].type.name}
								name={pokemon.name}
								image={pokemon.sprites.other.dream_world.front_default}
								pokemonName={pokemon.name}
								fav={favourites.some((item) => item.name === pokemon.name)}
								favClick={() => favHandler(pokemon)}
							/>
						))}
				</Row>
				<Button variant="primary" size="lg" onClick={getPokemons}>
					Load more
				</Button>
			</Container>
		</div>
	);
};

export default PokeList;
