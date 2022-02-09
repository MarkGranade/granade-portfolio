import React from "react";
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	BoxProps,
	FlexProps,
	Button,
	VStack,
} from "@chakra-ui/react";
import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
	FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

function SideBar(props) {
	const { navSelected, setNavSelected } = props;

	return (
		<Box
			bg={useColorModeValue("primary.100", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
		>
			<Flex
				direction="column"
				h="20"
				alignItems="center"
				mx="8"
				justifyContent="space-between"
			>
				<VStack spacing={8} mt="8" alignItems={"center"}>
					<Box borderBottom="2px" borderColor="gray.400">
						<Text fontSize="2xl" fontWeight="bold">
							Mark Granade
						</Text>
						<Text fontSize="1xl" align="center" mb="2">
							Full Stack Developer
						</Text>
					</Box>
					<VStack
						as={"nav"}
						spacing={6}
						w="full"
						align="flex-start"
						display={{ base: "none", md: "flex" }}
					>
						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#about"}
							onClick={() => setNavSelected("About")}
						>
							<FiHome />
							<Text ml="3">About</Text>
						</Button>

						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#portfolio"}
							onClick={() => setNavSelected("Portfolio")}
						>
							<FiTrendingUp />
							Projects
						</Button>

						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#experience"}
							onClick={() => setNavSelected("Experience")}
						>
							<FiCompass />
							Experience
						</Button>

						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#skills"}
							onClick={() => setNavSelected("Skills")}
						>
							<FiStar />
							Skills
						</Button>

						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#education"}
							onClick={() => setNavSelected("Education")}
						>
							<FiSettings />
							Education
						</Button>

						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#contact"}
							onClick={() => setNavSelected("Contact")}
						>
							<FiStar />
							Contact
						</Button>

						<Button
							as={"Link"}
							px={2}
							py={1}
							w="full"
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#resume"}
							onClick={() => setNavSelected("Resume")}
						>
							<FiMenu />
							Resume
						</Button>
					</VStack>
				</VStack>
			</Flex>
		</Box>
	);
}

export default SideBar;

function TESTSideBar(props) {
	const { navSelected, setNavSelected } = props;

	return (
		<Box
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontWeight="bold">
					Mark Granade
				</Text>
			</Flex>

			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: "cyan.400",
					color: "white",
				}}
			>
				<VStack as={"nav"} align="flex-start">
					<Button w="full">
						<FiHome />
						<Text ml="5">About</Text>
					</Button>

					<Button w="full">
						<FiTrendingUp />
						<Text ml="5">Experience</Text>
					</Button>

					<Button w="full">
						<FiCompass />
						<Text ml="5">Projects</Text>
					</Button>

					<Button w="full">
						<FiStar />
						<Text ml="5">Skills</Text>
					</Button>

					<Button w="full">
						<FiSettings />
						<Text ml="5">Education</Text>
					</Button>

					<Button w="full">
						<FiStar />
						<Text ml="5">Contact</Text>
					</Button>
					<Button w="full">
						<FiMenu />
						<Text ml="5">Resume</Text>
					</Button>
				</VStack>
			</Flex>
		</Box>
	);
}
