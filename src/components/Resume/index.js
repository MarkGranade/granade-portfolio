import React from "react";
import {
	Container,
	Box,
	Heading,
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";

function Resume() {
	return (
		<Container bg="secondary.50" maxW={"7xl"} p="12" className="resume">
			<Heading
				as="h1"
				textDecoration="underline"
				textDecorationColor="gray.400"
				backgroundColor="primary.200"
				w="100%"
				h="50"
				textAlign="center"
			>
				<a href="https://docdro.id/Nun6EBv">Download my Resume</a>
			</Heading>
		</Container>

		// <Container>
		// 	<Box>
		// 		<a href="https://docdro.id/Nun6EBv">Download my Resume</a>
		// 	</Box>

		// 	<Box>
		// 		<Heading>Projects</Heading>
		// 		<UnorderedList>
		// 			<ListItem>goghBuy</ListItem>
		// 			<ListItem>Space RPG</ListItem>
		// 			<ListItem>Tech Blog</ListItem>
		// 			<ListItem>The Huddle</ListItem>
		// 			<ListItem>Note Taker</ListItem>
		// 			<ListItem>Run Buddy</ListItem>
		// 		</UnorderedList>
		// 	</Box>
		// </Container>
	);
}

export default Resume;
