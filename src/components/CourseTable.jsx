import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CourseTable = ({ rows, headings }) => {
	return (
		<div>
			<TableContainer
				component={Paper}
				sx={{
					background: "#4d4d4d",
					width: "97%",
					margin: "20px",
					border: "1px solid white",
					borderRadius: "20px",
				}}
			>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow sx={{ backgroundColor: "white" }}>
							{headings.map((col) => {
								return <TableCell>{col}</TableCell>;
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.code}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
									color: "white",
								}}
							>
								<TableCell sx={{ color: "white" }} component="th" scope="row">
									{row.title}
								</TableCell>
								<TableCell sx={{ color: "white" }}>{row.code}</TableCell>
								<TableCell sx={{ color: "white" }}>{row.l}</TableCell>
								<TableCell sx={{ color: "white" }}>{row.t}</TableCell>
								<TableCell sx={{ color: "white" }}>{row.s}</TableCell>
								<TableCell sx={{ color: "white" }}>{row.c}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default CourseTable;
