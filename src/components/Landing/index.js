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
import "../../App.css";

const markG = require("../../assets/images/mark-g.jpg");
const background = require("../../assets/images/90s-background.jpg");

function Landing() {
	return (
		<Container
			className="intro"
			maxW={"7xl"}
			// backgroundImage={background}
			// border="2px solid"
			// borderColor="red"
		>
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 28 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: "column", md: "row" }}
			>
				<Flex
					flex={1}
					direction="row"
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}
				>
					<Box
						position={"relative"}
						height={"700px"}
						rounded={"2xl"}
						boxShadow={"2xl"}
						width={"full"}
						overflow={"hidden"}
					>
						<Image
							alt={"Mark Granade"}
							// fit={"cover"}
							align={"center"}
							w={"100%"}
							h={"100%"}
							src={markG}
						/>
					</Box>
				</Flex>
				{/* About Box */}
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Box
						position="relative"
						height="400px"
						rounded="2xl"
						backgroundColor="primary.200"
					>
						<Box alignContent="center" mt="15">
							<Box m="8">
								<Heading
									lineHeight={1.1}
									fontWeight={600}
									fontSize={{ base: "3xl", sm: "4xl", lg: "6x1" }}
								>
									<Text
										as={"span"}
										position={"relative"}
										textShadow="1px 1px black"
										_after={{
											content: `""`,
											width: "full",
											height: "30%",
											position: "absolute",
											bottom: 1,
											left: 0,
											bg: "primary.400",
											zIndex: -1,
										}}
									>
										Mark Granade
									</Text>
									<br />
									<Text
										as={"span"}
										color={"primary.500"}
										fontWeight="bold"
										textShadow="1px 1px #d716b6"
									>
										Full-Stack Web Developer!
									</Text>
								</Heading>
								<Box mt="5">
									<Text color={"gray.500"} fontWeight="medium" fontSize="2xl">
										My name is Mark Granade and I am an aspiring full-stack web
										developer! I decided to begin learning web development
										during quarantine and decided to enroll in Rutger's Coding
										Bootcamp.
									</Text>
									{/* <Stack spacing={{ base: "column", sm: "row" }}>
								<Button
									rounded={"full"}
									size={"md"}
									fontWeight={"normal"}
									px={6}
									colorScheme={"primary"}
									bg={"primary.400"}
									color="black"
									_hover={{ bg: "primary.500" }}
								>
									View my Portfolio
								</Button>
								<Button
									rounded={"full"}
									size={"lg"}
									fontWeight={"normal"}
									px={6}
								>
									View Resume
								</Button>
							</Stack> */}
								</Box>
							</Box>
						</Box>
					</Box>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Landing;
