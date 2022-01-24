import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="sm"
			bg="dark"
			variant="dark"
			className="add_padding"
		>
			<Container>
				<Navbar.Brand href="#">PokéApp</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#pokemons">Pokémons</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
