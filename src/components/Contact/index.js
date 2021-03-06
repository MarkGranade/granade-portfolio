import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from "@chakra-ui/react";
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";

function ContactForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;

	// Handles ContactForm submission
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);

			if (!isValid) {
				setErrorMessage("Invalid email.");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<Container maxW="full" mt={0} centerContent overflow="hidden">
			<Flex>
				<Box
					bg="primary.300"
					color="gray.500"
					borderRadius="lg"
					m={{ sm: 4, md: 16, lg: 10 }}
					p={{ sm: 5, md: 5, lg: 16 }}
				>
					<Box p={4}>
						<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
							<WrapItem>
								<Box>
									<Heading>Contact</Heading>
									<Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
										Fill out the form below to contact
									</Text>
									<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
										<VStack pl={0} spacing={3} alignItems="flex-start">
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												color="gray.500"
												_hover={{
													border: "2px solid",
													borderColor: "secondary.200",
												}}
												leftIcon={<MdPhone color="#f787e5" size="20px" />}
											>
												+1-555-555-5555
											</Button>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												color="gray.500"
												_hover={{
													border: "2px solid",
													borderColor: "secondary.200",
												}}
												leftIcon={<MdEmail color="#f787e5" size="20px" />}
											>
												mark.granade@gmail.com
											</Button>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												color="gray.500"
												_hover={{
													border: "2px solid",
													borderColor: "secondary.200",
												}}
												leftIcon={<MdLocationOn color="#f787e5" size="20px" />}
											>
												Long Valley, New Jersey
											</Button>
										</VStack>
									</Box>
									<HStack
										mt={{ lg: 10, md: 10 }}
										spacing={5}
										px={5}
										alignItems="flex-start"
									>
										<a href="https://www.linkedin.com/in/mark-granade/">
											<IconButton
												aria-label="linkedin"
												variant="ghost"
												size="lg"
												isRound={true}
												_hover={{ bg: "secondary.200", color: "primary.300" }}
												icon={<BsLinkedin size="28px" />}
											/>
										</a>
										<a href="https://github.com/MarkGranade">
											<IconButton
												aria-label="github"
												variant="ghost"
												size="lg"
												isRound={true}
												_hover={{ bg: "secondary.200", color: "primary.300" }}
												icon={<BsGithub size="28px" />}
											/>
										</a>

										{/* <IconButton
											aria-label="discord"
											variant="ghost"
											size="lg"
											isRound={true}
											_hover={{ bg: "secondary.200", color: "primary.300" }}
											icon={<BsDiscord size="28px" />}
										/> */}
									</HStack>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box bg="white" borderRadius="lg">
									<Box m={8} color="#0B0E3F">
										<VStack spacing={5}>
											<FormControl id="name">
												<FormLabel>Your Name</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement
														pointerEvents="none"
														children={<BsPerson color="gray.800" />}
													/>
													<Input type="text" size="md" />
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Mail</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement
														pointerEvents="none"
														children={<MdOutlineEmail color="gray.800" />}
													/>
													<Input type="text" size="md" />
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Message</FormLabel>
												<Textarea
													borderColor="gray.300"
													_hover={{ borderRadius: "gray.300" }}
													placeholder="message"
												/>
											</FormControl>
											<FormControl id="name" float="right">
												<Button
													variant="solid"
													bg="#0D74FF"
													bg="secondary.100"
													_hover={{}}
												>
													Send Message
												</Button>
											</FormControl>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
}

export default ContactForm;
