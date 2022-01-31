import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PokemonCard = ({ name, image, types, pokemonName }) => {
	return (
		<Card text="light" className={`${types[0].type.name} `}>
			<Card.Header>{name}</Card.Header>
			<Card.Body className="d-flex flex-column">
				<Card.Img variant="top" src={image} className="py-4" />
				<LinkContainer className="mt-auto" to={`/${pokemonName}`}>
					<Button variant="outline-light" size="sm">
						Details
					</Button>
				</LinkContainer>
			</Card.Body>
		</Card>
	);
};

export default PokemonCard;
