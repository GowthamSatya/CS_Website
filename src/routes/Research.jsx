import React from "react";
import "./styles.scss";
import { Typography } from "@mui/material";
import { ResearchTableCols } from "../utils/tableData";
import CourseTable from "../components/CourseTable";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
];

const Research = () => {
	return (
		<div className="projects">
			<div className="projects__header">
				<Typography variant="h5" component="h5">
					Research and Experminentation
				</Typography>
			</div>
			<div className="projects__body">
				<CourseTable rows={rows} headings={ResearchTableCols} />
			</div>
		</div>
	);
};

export default Research;
