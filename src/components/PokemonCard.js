import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PokemonCard = ({ name, image, type, pokemonName, fav, favClick }) => {
	return (
		<Card text="light" className={`${type} px-0`}>
			<Card.Header className="d-flex justify-content-between py-3">
				{name[0].toUpperCase() + name.slice(1)}
				{fav ? (
					<HeartFill onClick={favClick} size={25} color="red" />
				) : (
					<Heart onClick={favClick} size={25} color="white" />
				)}
			</Card.Header>
			<Card.Body className="d-flex flex-column">
				<Card.Img variant="top" src={image} className="p-3" />
				<LinkContainer className="mt-auto" to={`/${pokemonName}`}>
					<Button variant="outline-light" size="sm" className="mx-4">
						Details
					</Button>
				</LinkContainer>
			</Card.Body>
		</Card>
	);
};

export default PokemonCard;
