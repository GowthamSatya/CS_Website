import React from "react";
import "./styles.scss";
import { Typography, ButtonGroup, Button, Tooltip } from "@mui/material";
import { ProjectTableCols } from "../utils/tableData";
import CourseTable from "../components/CourseTable";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Projects = () => {
	return (
		<div className="projects">
			<div className="projects__header">
				<Typography variant="h5" component="h5">
					Our Projects
				</Typography>
				<Tooltip arrow title="Sign in as Admin to modify">
					<ButtonGroup>
						<Button disabled color="warning" sx={{ borderRadius: "20px" }}>
							Contribute
						</Button>
						<Button disabled color="error" sx={{ borderRadius: "20px" }}>
							Modify Projects
						</Button>
					</ButtonGroup>
				</Tooltip>
			</div>
			<div className="projects__body">
				<CourseTable rows={rows} headings={ProjectTableCols} />
			</div>
		</div>
	);
};

export default Projects;
