import React from "react";
import "./styles.scss";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Typography, Button } from "@mui/material";

const grey = {
	50: "#f6f8fa",
	100: "#eaeef2",
	200: "#d0d7de",
	300: "#afb8c1",
	400: "#8c959f",
	500: "#6e7781",
	600: "#57606a",
	700: "#424a53",
	800: "#32383f",
	900: "#24292f",
};

const MainTab = styled(TabsUnstyled)`
	width: 100%;
`;

const Tab = styled(TabUnstyled)`
	font-family: IBM Plex Sans, sans-serif;
	color: #fff;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 600;
	background-color: #4d4d4d;
	width: 100%;
	padding: 10px 12px;
	margin: 6px 6px;
	border: none;
	border-radius: 35px;
	display: flex;
	justify-content: center;

	&:hover {
		background-color: ${grey[800]};
	}

	&:focus {
		color: #4d4d4d;
	}

	&.${tabUnstyledClasses.selected} {
		border-radius: 35px;
		background: #4d4d4d;
		box-shadow: inset 5px 5px 10px #1f1f1f, inset -5px -5px 10px #7b7b7b;
		color: #fff;
	}

	&.${buttonUnstyledClasses.disabled} {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&.${buttonUnstyledClasses.root} {
		width: 100%;
	}
`;

const TabPanel = styled(TabPanelUnstyled)(
	({ theme }) => `
	display: flex;
	align-items: center;
	justify-content: start;
	flex-wrap: wrap;
  width: 99%;
  font-family: IBM Plex Sans, sans-serif;
  margin:40px 0;
  padding: 10px 12px;

	
  `
);

const TabsList = styled(TabsListUnstyled)(
	({ theme }) => `
  min-width: 400px;
  width:100%;
  margin-bottom: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
 border-radius: 35px;
background: #4d4d4d;
box-shadow:  18px 18px 36px #373737,
             -18px -18px 36px #636363;
  `
);

const Events = () => {
	return (
		<div className="people">
			<MainTab defaultValue={0}>
				<TabsList>
					<Tab>Live Events</Tab>
					<Tab>Past Events</Tab>
					<Tab>Alumini Talks</Tab>
				</TabsList>
				<TabPanel value={0}>
					<div className="events__live">
						<div className="events__live__date">29/12/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h5" component="h6">
								CSE Students Society Auditions, Round-2
							</Typography>
						</div>
						<a href="https://meet.google.com">
							<Button
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "10px",
									borderRadius: "20px",
									height: "100%",
								}}
								variant="contained"
								color="success"
							>
								<VideocamIcon />
								Join
							</Button>
						</a>
					</div>
				</TabPanel>
				<TabPanel
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						width: "96%",
					}}
					value={1}
				>
					<div className="events__live">
						<div className="events__live__date">16/11/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h6" component="h6">
								CSE Students Society Auditions, Round-1
							</Typography>
						</div>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
								borderRadius: "20px",
								height: "100%",
							}}
							variant="contained"
							color="success"
							disabled
						>
							<VideocamIcon />
							Join
						</Button>
					</div>
					<div className="events__live">
						<div className="events__live__date">19/10/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h6" component="h6">
								CSE Grooup Meet
							</Typography>
						</div>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
								borderRadius: "20px",
								height: "100%",
							}}
							variant="contained"
							color="success"
							disabled
						>
							<VideocamIcon />
							Join
						</Button>
					</div>
					<div className="events__live">
						<div className="events__live__date">29/10/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h6" component="h6">
								Alumini Talk - 1
							</Typography>
						</div>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
								borderRadius: "20px",
								height: "100%",
							}}
							variant="contained"
							color="success"
							disabled
						>
							<VideocamIcon />
							Join
						</Button>
					</div>
					<div className="events__live">
						<div className="events__live__date">10/11/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h6" component="h6">
								Research Talks - 1
							</Typography>
						</div>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
								borderRadius: "20px",
								height: "100%",
							}}
							variant="contained"
							color="success"
							disabled
						>
							<VideocamIcon />
							Join
						</Button>
					</div>
					<div className="events__live">
						<div className="events__live__date">01/12/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h6" component="h6">
								Lorem Ipsum
							</Typography>
						</div>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
								borderRadius: "20px",
								height: "100%",
							}}
							variant="contained"
							color="success"
							disabled
						>
							<VideocamIcon />
							Join
						</Button>
					</div>
					<div className="events__live">
						<div className="events__live__date">10/12/2022</div>
						<div>
							<Typography sx={{ color: "#fff" }} variant="h6" component="h6">
								Lorem Ipsum
							</Typography>
						</div>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
								borderRadius: "20px",
								height: "100%",
							}}
							variant="contained"
							color="success"
							disabled
						>
							<VideocamIcon />
							Join
						</Button>
					</div>
				</TabPanel>
			</MainTab>
		</div>
	);
};

export default Events;
