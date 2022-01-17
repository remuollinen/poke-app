import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./App.css";
import axios from "axios";

const App = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon")
			.then((res) => setPokemons(res.data.results));
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
					md={5}
					className="justify-content-between my-5 g-flex gap-3"
				>
					{pokemons.map((p) => (
						<Card key={p.name} bg="dark" text="light">
							<Card.Img
								variant="top"
								src="https://source.unsplash.com/1600x900/?pokemon"
								style={{ padding: "1rem" }}
							/>
							<Card.Body>
								<Card.Title>{p.name}</Card.Title>
							</Card.Body>
						</Card>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default App;
