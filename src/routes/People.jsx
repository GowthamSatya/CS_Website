import React from "react";
import "./styles.scss";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import PeopleCard from "../components/PeopleCard";

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
  border-radius: 35px;
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

const People = () => {
	return (
		<div className="people">
			<MainTab defaultValue={0}>
				<TabsList>
					<Tab>Faculty</Tab>
					<Tab>Alumini</Tab>
					<Tab>Employees</Tab>
				</TabsList>
				<TabPanel value={0}>
					{[1, 1, 2, 3].map(() => {
						return <PeopleCard />;
					})}
				</TabPanel>
				<TabPanel sx={{ color: "#fff" }} value={1}>
					No Alumini Present...
				</TabPanel>
				<TabPanel sx={{ color: "#fff" }} value={2}>
					No Employees Present...
				</TabPanel>
			</MainTab>
		</div>
	);
};

export default People;
