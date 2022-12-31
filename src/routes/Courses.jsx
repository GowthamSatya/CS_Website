import React from "react";
import "./styles.scss";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { ButtonGroup, Button ,Tooltip} from "@mui/material";

import UGCourses from "../components/UGCourses";

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
  width: 99%;
  font-family: IBM Plex Sans, sans-serif;
  margin:40px 0;
  padding: 10px 12px;
  border-radius: 35px;
background: #4d4d4d;
box-shadow:  18px 18px 40px #383838,
             -18px -18px 40px #626262;
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

const Courses = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="courses">
			<MainTab defaultValue={0}>
				<TabsList>
					<Tab>UG</Tab>
					<Tab>PG</Tab>
					<Tab>PhD</Tab>
				</TabsList>
				<TabPanel value={0}>
					<UGCourses />
				</TabPanel>
				<TabPanel value={1}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={2}>Dummy Data Yet to Add</TabPanel>
			</MainTab>
			<Tooltip arrow title="You don't have permission to do this">
				<ButtonGroup>
					<Button
						disableElevation
						sx={{ borderRadius: "20px" }}
						variant="contained"
						color="success"
						disabled
					>
						Add A Course
					</Button>
					<Button
						disableElevation
						sx={{ borderRadius: "20px" }}
						variant="contained"
						color="error"
						disabled
					>
						Update Table
					</Button>
				</ButtonGroup>
			</Tooltip>
		</div>
	);
};

export default Courses;
