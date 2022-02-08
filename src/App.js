import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
// import theme from "./theme/index.js";

const theme = extendTheme({
	colors: {
		primary: {
			50: "#d9ffff",
			100: "#adfcfd",
			200: "#80fafa",
			300: "#50f6f6",
			400: "#25f4f4",
			500: "#0bdada",
			600: "#00aaaa",
			700: "#007a7a",
			800: "#004a4a",
			900: "#001a1a",
		},
		secondary: {
			50: "#ffe5fe",
			100: "#fcb6f0",
			200: "#f787e5",
			300: "#f358da",
			400: "#f02bcf",
			500: "#d716b6",
			600: "#a70f8d",
			700: "#780866",
			800: "#49023e",
			900: "#1c0017",
		},
		white: "#ffffff",
		gray: {
			50: "#f8f0f2",
			100: "#d9d9d9",
			200: "#bfbfbf",
			300: "#a6a6a6",
			400: "#8c8c8c",
			500: "#737373",
			600: "#595959",
			700: "#404040",
			800: "#262626",
			900: "#120b0d",
		},
		black: "#000000",
	},
	styles: {
		global: {
			body: {
				bg: "secondary.50",
				color: "gray.500",
			},
		},
	},
});

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
		<ChakraProvider theme={theme}>
			<Nav navSelected={navSelected} setNavSelected={setNavSelected} />

			<main>{switchPage(navSelected)}</main>
			{/* <Landing /> */}
			{/* <Carousel /> */}
			{/* <ContactForm /> */}
		</ChakraProvider>
	);
}

export default App;
