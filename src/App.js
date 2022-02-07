import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Landing from "./components/Landing";

function App() {
	return (
		<ChakraProvider>
			<Nav />
			<Landing />
			{/* <Carousel /> */}
		</ChakraProvider>
	);
}

export default App;
