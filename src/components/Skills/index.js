import React from "react";
import {
	Container,
	Box,
	Heading,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";

function Skills() {
	return (
		<Container>
			<Box>
				<Heading>Education</Heading>
				<UnorderedList>
					<ListItem>JavaScript</ListItem>
					<ListItem>React</ListItem>
					<ListItem>MongoDB</ListItem>
					<ListItem>GraphQL</ListItem>
					<ListItem>Node.JS</ListItem>
				</UnorderedList>
			</Box>
		</Container>
	);
}

export default Skills;
