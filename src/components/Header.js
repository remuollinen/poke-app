import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
	return (
		<Navbar
			collapseOnSelect
			bg="dark"
			variant="dark"
			expand="lg"
			className="add_padding"
		>
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>PokéApp</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="pokemons">
							<Nav.Link>Pokémons</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
