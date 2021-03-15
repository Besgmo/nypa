import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import { FiMoreVertical, FiBell } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header">
			<Override slot="SectionContent" sm-font="32px sans-serif" sm-width="50% content-box" />
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" quarkly-title="Title">
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-font="--headline2"
						sm-color="#ffffff"
					>
						Dashboard
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					quarkly-title="Menu"
					sm-text-align="right"
					sm-flex-direction="row"
				>
					{"        "}
					<Icon
						href=""
						category="fi"
						icon={FiMoreVertical}
						sm-color="#ffffff"
						size="40px"
						sm-align-self="center"
						sm-position="static"
						sm-justify-content="flex-end"
						sm-flex="inherit"
						sm-width="32px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section>
			<Text sm-color="--neon" sm-font="--headline1" sm-text-align="center">
				1230 ML
			</Text>
		</Section>
		<Section sm-color="#ECBB0C">
			<Override slot="SectionContent" sm-color="#ECBB0C" />
			<Stack>
				{"        "}
				<StackItem width="100%" display="flex" sm-align-self="center" sm-width="100% border-box">
					<Override slot="StackItemContent" sm-width="50% content-box" />
					<Icon category="fi" icon={FiBell} sm-align-self="center" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#ECBB0C"
						sm-padding="0px 0px 0px 6px"
						sm-font="--headline3"
					>
						Notification from device
					</Text>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Menu />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});