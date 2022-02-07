import React from "react";
import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
} from "@chakra-ui/react";

const markG = require("../../assets/images/mark-g.jpg");

function Landing() {
	return (
		<Container maxW={"7xl"}>
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 28 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: "column", md: "row" }}
			>
				<Flex
					flex={1}
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}
				>
					<Box
						position={"relative"}
						height={"300px"}
						rounded={"2xl"}
						boxShadow={"2xl"}
						width={"full"}
						overflow={"hidden"}
					>
						<Image
							alt={"Mark Granade"}
							fit={"cover"}
							align={"center"}
							w={"100%"}
							h={"100%"}
							src={markG}
						/>
					</Box>
				</Flex>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: "3xl", sm: "4xl", lg: "6x1" }}
					>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: `""`,
								width: "full",
								height: "30%",
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "red.400",
								zIndex: -1,
							}}
						>
							Mark Granade:
						</Text>
						<br />
						<Text as={"span"} color={"red.400"}>
							Full-Stack Web Developer!
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						My name is Mark Granade and I am an aspiring full-stack web
						developer! I decided to begin learning web development during
						quarantine and decided to enroll in Rutger's Coding Bootcamp.
					</Text>
					<Stack spacing={{ base: "column", sm: "row" }}>
						<Button
							rounded={"full"}
							size={"lg"}
							fontWeight={"normal"}
							px={6}
							colorScheme={"red"}
							bg={"red.400"}
							_hover={{ bg: "red.500" }}
						>
							View my Portfolio
						</Button>
						<Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
							View Resume
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Landing;
