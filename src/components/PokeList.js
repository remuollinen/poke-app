import React, { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const PokeList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
			const fetches = res.data.results.map((p) =>
				axios.get(p.url).then((res) => res.data)
			);

			Promise.all(fetches).then((data) => {
				setPokemons(data);
				setIsLoading(false);
			});
		});
	}, []);

	return (
		<div>
			<Container>
				<Row
					xs={1}
					md={4}
					lg={6}
					className="justify-content-between my-5 g-flex gap-3"
				>
					{isLoading && <Spinner animation="border" role="status"></Spinner>}
					{!isLoading &&
						pokemons.map((p) => <PokemonCard key={p.id} pokemon={p} />)}
				</Row>
			</Container>
		</div>
	);
};

export default PokeList;
