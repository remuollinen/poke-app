import React from "react";

import Card from "react-bootstrap/Card";

const PokemonCard = ({ pokemon }) => {
	return (
		<Card text="light" className={`${pokemon.types[0].type.name}`}>
			<Card.Header>{pokemon.name}</Card.Header>
			<Card.Body>
				<Card.Img
					variant="top"
					src={pokemon.sprites.other.dream_world.front_default}
				/>
			</Card.Body>
		</Card>
	);
};

export default PokemonCard;
