import React from "react";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Nav() {
	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
							href={"#"}
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
							href={"#"}
						>
							Projects
						</Link>
						<Link
							px={2}
							py={1}
							rounded={"md"}
							_hover={{
								textDecoration: "none",
								bg: useColorModeValue("gray.200", "gray.700"),
							}}
							href={"#"}
						>
							Resume
						</Link>
					</HStack>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Nav;
