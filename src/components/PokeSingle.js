import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

import { useParams, useNavigate } from "react-router-dom";

const PokeSingle = () => {
	let { pokemonName } = useParams();
	let navigate = useNavigate();
	const [pokemon, setPokemon] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSinglePokemon();
	}, []);

	const getSinglePokemon = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.catch((error) => console.log(error))
			.then((res) => {
				const data = {
					name: res.data.name,
					baseExperience: res.data.base_experience,
					image: res.data.sprites.other.dream_world.front_default,
					types: res.data.types,
					height: res.data.height,
					weight: res.data.weight,
				};
				setPokemon(data);
				setIsLoading(false);
			});
	};

	return (
		<Container>
			{isLoading && <Spinner animation="border" role="status" />}
			{!isLoading && (
				<Container>
					<h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
					<Image src={pokemon.image} />
					<p>Base Experience: {pokemon.baseExperience} XP</p>
					<p>Height: {pokemon.height}0 cm</p>
					<p>Weight: {pokemon.weight} kg</p>
					<div>
						Types:{" "}
						<ul>
							{pokemon.types.map((type) => {
								return <li key={type.slot}>{type.type.name}</li>;
							})}
						</ul>
					</div>
				</Container>
			)}
			<Button variant="primary" onClick={() => navigate(-1)}>
				Go Back
			</Button>
		</Container>
	);
};

export default PokeSingle;
