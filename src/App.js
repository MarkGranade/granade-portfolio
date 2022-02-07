import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";

import Carousel from "./components/Carousel";

function App() {
	const [navSelected, setNavSelected] = useState("About");

	function switchPage(page) {
		if (page === "About") {
			return <Landing />;
		} else if (page === "Portfolio") {
			return <Portfolio />;
		} else if (page === "Resume") {
			return <Resume />;
		} else if (page === "Contact") {
			return <ContactForm />;
		}
	}

	return (
		<ChakraProvider>
			<Nav navSelected={navSelected} setNavSelected={setNavSelected} />

			<main>{switchPage(navSelected)}</main>
			{/* <Landing /> */}
			{/* <Carousel /> */}
			{/* <ContactForm /> */}
		</ChakraProvider>
	);
}

export default App;
