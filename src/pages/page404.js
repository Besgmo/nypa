import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Section, Stack } from "@quarkly/components";
import { FiArrowLeft, FiInfo, FiActivity, FiArrowUpCircle, FiUnderline, FiMessageCircle, FiChevronRight, FiHelpCircle } from "react-icons/fi";
import { IoMdBatteryFull } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-color="#ECBB0C">
			<Override slot="SectionContent" sm-color="#ECBB0C" />
			<StackItem width="100%" display="flex" sm-align-self="center" sm-width="100% border-box">
				<Override slot="StackItemContent" sm-width="50% content-box" />
				<Icon category="fi" icon={FiArrowLeft} sm-align-self="center" sm-color="#ffffff" />
				<Text
					font="--lead"
					margin="0px 0px 0px 0px"
					display="inline-block"
					sm-color="#ffffff"
					sm-padding="0px 0px 0px 6px"
					sm-font="--headline3"
				>
					Back
				</Text>
				{"            "}
			</StackItem>
		</Section>
		<Section sm-padding="0px 0 0 0" sm-width="50% content-box">
			<Override slot="SectionContent" sm-width="50% content-box" />
			<Text sm-color="#979797" sm-font="normal 500 20px/1.2 --fontFamily-sansHelvetica">
				About
			</Text>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0">
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="16px 16px 5px 16px">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="fi" icon={FiInfo} color="#ffffff" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						Version app
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="0 16px 16px 40px">
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="Id"
						sm-color="#ffffff"
						sm-font="--base1"
						sm-padding="0px 0px 0px 10px"
					>
						0.1
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0">
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="16px 16px 5px 16px">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="fi" icon={FiActivity} color="#ffffff" sm-color="#FF5134" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						Device name
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="0 16px 16px 40px">
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="Id"
						sm-color="#ffffff"
						sm-font="--base1"
						sm-padding="0px 0px 0px 10px"
					>
						Nypa Alpha 0.1
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0">
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="16px 16px 5px 16px">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="io" icon={IoMdBatteryFull} color="#ffffff" sm-color="#09FF51" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						Battery level
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="0 16px 16px 40px">
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="Id"
						sm-color="#ffffff"
						sm-font="--base1"
						sm-padding="0px 0px 0px 10px"
					>
						65%
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0">
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="16px 16px 5px 16px">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="fi" icon={FiArrowUpCircle} color="#ffffff" sm-color="#5AC8FA" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						Firmware version
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="0 16px 16px 40px">
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="Id"
						sm-color="#ffffff"
						sm-font="--base1"
						sm-padding="0px 0px 0px 10px"
					>
						0.1 alpha
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section sm-padding="0px 0 0 0" sm-width="50% content-box">
			<Override slot="SectionContent" sm-width="50% content-box" />
			<Text sm-color="#979797" sm-font="normal 500 20px/1.2 --fontFamily-sansHelvetica">
				Settings
			</Text>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0">
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="100%" display="flex" sm-padding="16px 16px 5px 16px" sm-color="#ECBB0C">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="fi" icon={FiUnderline} />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						Measurement units
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="0 16px 16px 40px">
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						quarkly-title="Id"
						sm-color="#ffffff"
						sm-font="--base1"
						sm-padding="0px 0px 0px 10px"
					>
						ML
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section sm-padding="0px 0 0 0" sm-width="50% content-box">
			<Override slot="SectionContent" sm-width="50% content-box" />
			<Text sm-color="#979797" sm-font="normal 500 20px/1.2 --fontFamily-sansHelvetica">
				Help
			</Text>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0" sm-flex-direction="row">
			<Stack sm-flex-direction="row">
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="16px 16px 5px 16px">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="fi" icon={FiMessageCircle} color="#ffffff" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						Ask a question
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-flex-direction="row-reverse">
					{"        "}
					<Icon
						href=""
						category="fi"
						icon={FiChevronRight}
						sm-color="#ffffff"
						size="24px"
						sm-align-self="center"
						sm-position="static"
						sm-justify-content="flex-end"
						sm-flex="inherit"
						sm-width="32px"
						color="#979797"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="Version-app" sm-padding="0 0 24px 0" sm-flex-direction="row">
			<Stack sm-flex-direction="row">
				{"    "}
				<StackItem width="50%" display="flex" sm-padding="16px 16px 5px 16px">
					<Override slot="StackItemContent" sm-flex-direction="row" />
					{"        "}
					<Icon category="fi" icon={FiHelpCircle} color="#ffffff" />
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-color="#979797"
						sm-font="--base"
						sm-padding="0px 0px 0px 10px"
					>
						FAQ
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-flex-direction="row-reverse">
					{"        "}
					<Icon
						href=""
						category="fi"
						icon={FiChevronRight}
						sm-color="#ffffff"
						size="24px"
						sm-align-self="center"
						sm-position="static"
						sm-justify-content="flex-end"
						sm-flex="inherit"
						sm-width="32px"
						color="#979797"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<Override
				slot="SectionContent"
				sm-border-radius="8px"
				sm-border-color="#FF5134"
				sm-border-width="1px"
				sm-width="100% border-box"
			/>
			<Button
				sm-border-color="#FF5134"
				sm-background="00000"
				sm-border-width="2px"
				sm-border-radius="8px"
				sm-height="54px"
				sm-color="#FF5134"
				sm-border-style="solid"
				sm-font="--base1"
				sm-active-background="#FF5134"
				sm-active-color="#ffffff"
				sm-width="100% border-box"
			>
				Unpair device
			</Button>
		</Section>
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