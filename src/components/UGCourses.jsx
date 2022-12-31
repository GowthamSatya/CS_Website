import React from "react";
import "./styles.scss";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import CourseTable from "./CourseTable";

import { SemesterTableCols, SemesterTableRows } from "../utils/tableData";

const rows = SemesterTableRows[0].rows;
console.log(rows);

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
		border-radius: 25px;
		background: #4d4d4d;
		box-shadow: inset 9px 9px 18px #3c3c3c, inset -9px -9px 18px #5e5e5e;
		color: #fff;
	}

	&.${buttonUnstyledClasses.disabled} {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

const TabPanel = styled(TabPanelUnstyled)(
	({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  border-radius: 35px;
  `
);

const TabsList = styled(TabsListUnstyled)(
	({ theme }) => `
  min-width: 400px;
  margin-bottom: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
 border-radius: 35px;
  `
);

const UGCourses = () => {
	return (
		<div>
			<TabsUnstyled defaultValue={0}>
				<TabsList>
					<Tab>Semester-1</Tab>
					<Tab>Semester-2</Tab>
					<Tab>Semester-3</Tab>
					<Tab>Semester-4</Tab>
					<Tab>Semester-5</Tab>
					<Tab>Semester-6</Tab>
					<Tab>Semester-7</Tab>
					<Tab>Semester-8</Tab>
				</TabsList>
				<TabPanel value={0}>
					{" "}
					<CourseTable rows={rows} headings={SemesterTableCols} />
				</TabPanel>
				<TabPanel value={1}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={2}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={3}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={4}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={5}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={6}>Dummy Data Yet to Add</TabPanel>
				<TabPanel value={7}>Dummy Data Yet to Add</TabPanel>
			</TabsUnstyled>
		</div>
	);
};

export default UGCourses;
