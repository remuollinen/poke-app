import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./App.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
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

	// console.log(pokemons);

	return (
		<div>
			<Navbar bg="dark" variant="dark" className="add_padding">
				<Container>
					<Navbar.Brand href="#">PokéApp</Navbar.Brand>
				</Container>
			</Navbar>
			<Container>
				<Row
					xs={1}
					md={4}
					lg={6}
					className="justify-content-between my-5 g-flex gap-3"
				>
					{isLoading && (
						<Spinner animation="border" role="status">
							<span>Loading...</span>
						</Spinner>
					)}
					{!isLoading &&
						pokemons.map((p) => (
							<Card key={p.name} bg="dark" text="light">
								<Card.Header>{p.name}</Card.Header>
								<Card.Body>
									<Card.Img
										variant="top"
										src={p.sprites.other.dream_world.front_default}
									/>
								</Card.Body>
							</Card>
						))}
				</Row>
			</Container>
		</div>
	);
};

export default App;
