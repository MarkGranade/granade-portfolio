import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// import { biLeftArrowAlt, biRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const spaceRPG = require("../../assets/images/space-rpg.png");
const goghBuy = require("../../assets/images/goghbuy.png");
const noteTaker = require("../../assets/images/note-taker.png");

// Settings for the slider
const settings = {
	dots: true,
	arrows: true,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

function Carousel() {
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "10px" });

	const cards = [spaceRPG, goghBuy, noteTaker];

	return (
		<Box
			// position={"relative"}
			height={"600px"}
			width={"full"}
			overflow={"hidden"}
		>
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			<Slider {...settings}>
				{cards.map((url, index) => (
					<Box
						key={index}
						height={"6xl"}
						// position="relative"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
						backgroundImage={`url(${url})`}
					/>
				))}
			</Slider>
		</Box>
	);
}

export default Carousel;
