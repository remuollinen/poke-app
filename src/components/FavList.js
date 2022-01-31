import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PokemonCard from "./PokemonCard";

const FavList = ({ favourites, favHandler }) => {
	return (
		<div>
			<Container className="text-center">
				<Row
					xs={1}
					md={4}
					lg={6}
					className="justify-content-between my-5 g-flex gap-3"
				>
					{favourites.map((pokemon) => (
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
			</Container>
		</div>
	);
};

export default FavList;
