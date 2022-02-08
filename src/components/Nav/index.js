import React from "react";
import { Box, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Nav(props) {
	const { navSelected, setNavSelected } = props;

	return (
		<Box bg={useColorModeValue("primary.200")} px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<Box>Mark Granade</Box>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						<Link
							px={2}
							py={1}
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#about"}
							onClick={() => setNavSelected("About")}
						>
							About
						</Link>
						<Link
							px={2}
							py={1}
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#Portfolio"}
							onClick={() => setNavSelected("Portfolio")}
						>
							Portfolio
						</Link>
						<Link
							px={2}
							py={1}
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#resume"}
							onClick={() => setNavSelected("Resume")}
						>
							Resume
						</Link>
						<Link
							px={2}
							py={1}
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#contact"}
							onClick={() => setNavSelected("Contact")}
						>
							Contact
						</Link>
					</HStack>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Nav;
