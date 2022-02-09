import React from "react";
import {
	Container,
	Box,
	Heading,
	List,
	ListItem,
	UnorderedList,
} from "@chakra-ui/react";

function Education() {
	return (
		<Container>
			<Box>
				<Heading>Education</Heading>
				<UnorderedList>
					<ListItem>Fairleigh Dickinson</ListItem>
					<ListItem>Rutgers Coding Bootcamp</ListItem>
				</UnorderedList>
			</Box>
		</Container>
	);
}

export default Education;
