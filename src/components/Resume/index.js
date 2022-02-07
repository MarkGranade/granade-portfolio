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
		<Container>
			<Box>
				<a href="https://docdro.id/Nun6EBv">Download my Resume</a>
			</Box>

			<Box>
				<Heading>Projects</Heading>
				<UnorderedList>
					<ListItem>goghBuy</ListItem>
					<ListItem>Space RPG</ListItem>
					<ListItem>Tech Blog</ListItem>
					<ListItem>The Huddle</ListItem>
					<ListItem>Note Taker</ListItem>
					<ListItem>Run Buddy</ListItem>
				</UnorderedList>
			</Box>
		</Container>
	);
}

export default Resume;
