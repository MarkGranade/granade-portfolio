// all my global style overrides
import { extendTheme } from "@chakra-ui/react";

const styles = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "teal.400",
				color: "gray.400",
			},
			// styles for the `a`
			a: {
				color: "red.700",
				_hover: {
					textDecoration: "underline",
				},
			},
		},
	},
});

export default styles;
