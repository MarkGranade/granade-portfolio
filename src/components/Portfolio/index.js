import React from "react";
// import Carousel from "../Carousel";
import {
	Box,
	Heading,
	Link,
	Image,
	Text,
	HStack,
	Tag,
	useColorModeValue,
	Container,
} from "@chakra-ui/react";

const goghBuy = require("../../assets/images/goghbuy.png");
const spaceRPG = require("../../assets/images/space-rpg.png");
const noteTaker = require("../../assets/images/note-taker.png");
const techBlog = require("../../assets/images/tech-blog.png");

function ReactTag() {
	return (
		<Tag size={"md"} variant="solid" colorScheme="primary" color="gray.500">
			React
		</Tag>
	);
}

function ChakraTag() {
	return (
		<Tag size={"md"} variant="solid" colorScheme="primary" color="gray.500">
			Chakra-UI
		</Tag>
	);
}

function Portfolio() {
	return (
		<Container maxW={"7xl"} p="12">
			{/* <Carousel /> */}
			<Heading
				as="h1"
				textDecoration="underline"
				textDecorationColor="gray.400"
			>
				Projects
			</Heading>
			{/* GOGHBUY */}
			<Box
				marginTop={{ base: "1", sm: "5" }}
				display="flex"
				flexDirection={{ base: "column", sm: "row" }}
				justifyContent="space-between"
				borderBottom="2px"
				borderColor="gray.400"
				pb="5"
			>
				<Box
					display="flex"
					flex="1"
					marginRight="3"
					position="relative"
					alignItems="center"
				>
					<Box
						width={{ base: "100%", sm: "85%" }}
						zIndex="2"
						marginLeft={{ base: "0", sm: "5%" }}
						marginTop="5%"
					>
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							<Image
								borderRadius="lg"
								src={goghBuy}
								alt="goghBuy"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient={useColorModeValue(
								"radial(primary.600 1px, transparent 1px)",
								"radial(primary.300 1px, transparent 1px)"
							)}
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>

				<Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: "3", sm: "0" }}
				>
					<HStack spacing="2">
						<ReactTag />
						<ChakraTag />
					</HStack>
					<Heading marginTop="1">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							goghBuy
						</Link>
					</Heading>
					<Text
						as="p"
						marginTop="2"
						color={useColorModeValue("gray.700", "gray.200")}
						fontSize="lg"
					>
						goghBuy is an E-Commerce site that allows small, local artists to
						create and display their art in a personalized online gallery. It's
						designed to give artists control over their brand, and have a one
						stop site to display, advertise, and sell their art as well as
						update your fans with any important info you may want to share.
					</Text>
				</Box>
			</Box>

			{/* ==================================================================================================== */}
			{/* SPACE RPG */}
			<Box
				marginTop={{ base: "1", sm: "5" }}
				display="flex"
				flexDirection={{ base: "column", sm: "row" }}
				justifyContent="space-between"
				borderBottom="2px"
				borderColor="gray.400"
				pb="5"
			>
				<Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: "3", sm: "0" }}
				>
					<HStack spacing="2">
						<ReactTag />
						<ChakraTag />
					</HStack>
					<Heading marginTop="1">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							Space RPG
						</Link>
					</Heading>
					<Text
						as="p"
						marginTop="2"
						color={useColorModeValue("gray.700", "gray.200")}
						fontSize="lg"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
						perspiciatis alias quos at esse sed consequuntur possimus placeat,
						illum quo similique non eum quas voluptatibus itaque? Iure deleniti
						fugit debitis!
					</Text>
				</Box>

				<Box
					display="flex"
					flex="1"
					marginRight="3"
					position="relative"
					alignItems="center"
				>
					<Box
						width={{ base: "100%", sm: "85%" }}
						zIndex="2"
						marginLeft={{ base: "0", sm: "5%" }}
						marginTop="5%"
					>
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							<Image
								borderRadius="lg"
								src={spaceRPG}
								alt="Space RPG"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient={useColorModeValue(
								"radial(primary.600 1px, transparent 1px)",
								"radial(primary.300 1px, transparent 1px)"
							)}
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>
			</Box>

			{/* ==================================================================================================== */}
			{/* NOTE TAKER */}
			<Box
				marginTop={{ base: "1", sm: "5" }}
				display="flex"
				flexDirection={{ base: "column", sm: "row" }}
				justifyContent="space-between"
				borderBottom="2px"
				borderColor="gray.400"
				pb="5"
			>
				<Box
					display="flex"
					flex="1"
					marginRight="3"
					position="relative"
					alignItems="center"
				>
					<Box
						width={{ base: "100%", sm: "85%" }}
						zIndex="2"
						marginLeft={{ base: "0", sm: "5%" }}
						marginTop="5%"
					>
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							<Image
								borderRadius="lg"
								src={noteTaker}
								alt="Note Taker"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient={useColorModeValue(
								"radial(primary.600 1px, transparent 1px)",
								"radial(primary.300 1px, transparent 1px)"
							)}
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>

				<Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: "3", sm: "0" }}
				>
					<HStack spacing="2">
						<ReactTag />
						<ChakraTag />
					</HStack>
					<Heading marginTop="1">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							Note Taker
						</Link>
					</Heading>
					<Text
						as="p"
						marginTop="2"
						color={useColorModeValue("gray.700", "gray.200")}
						fontSize="lg"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
						perspiciatis alias quos at esse sed consequuntur possimus placeat,
						illum quo similique non eum quas voluptatibus itaque? Iure deleniti
						fugit debitis!
					</Text>
				</Box>
			</Box>

			{/* ==================================================================================================== */}
			{/* TECH BLOG */}
			<Box
				marginTop={{ base: "1", sm: "5" }}
				display="flex"
				flexDirection={{ base: "column", sm: "row" }}
				justifyContent="space-between"
				borderBottom="2px"
				borderColor="gray.400"
				pb="5"
			>
				<Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: "3", sm: "0" }}
				>
					<HStack spacing="2">
						<ReactTag />
						<ChakraTag />
					</HStack>
					<Heading marginTop="1">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							Tech Blog
						</Link>
					</Heading>
					<Text
						as="p"
						marginTop="2"
						color={useColorModeValue("gray.700", "gray.200")}
						fontSize="lg"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
						perspiciatis alias quos at esse sed consequuntur possimus placeat,
						illum quo similique non eum quas voluptatibus itaque? Iure deleniti
						fugit debitis!
					</Text>
				</Box>

				<Box
					display="flex"
					flex="1"
					marginRight="3"
					position="relative"
					alignItems="center"
				>
					<Box
						width={{ base: "100%", sm: "85%" }}
						zIndex="2"
						marginLeft={{ base: "0", sm: "5%" }}
						marginTop="5%"
					>
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							<Image
								borderRadius="lg"
								src={techBlog}
								alt="Tech Blog"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient={useColorModeValue(
								"radial(primary.600 1px, transparent 1px)",
								"radial(primary.300 1px, transparent 1px)"
							)}
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}

export default Portfolio;
