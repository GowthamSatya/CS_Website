import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const Results = () => {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div className="results">
			<FormControl sx={{ width: "50%" }}>
				<InputLabel
					sx={{ color: "white", margin: "10px" }}
					id="demo-simple-select-label"
				>
					Select Semester
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="Select Semester"
					onChange={handleChange}
					sx={{
						color: "white",
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						".MuiSvgIcon-root ": {
							fill: "white !important",
						},
						"&.MuiInputLabel-root": {
							color: "white !important",
						},
						margin: "10px",
					}}
				>
					<MenuItem value={10}>1</MenuItem>
					<MenuItem value={20}>2</MenuItem>
					<MenuItem value={30}>3</MenuItem>
					<MenuItem value={20}>4</MenuItem>
					<MenuItem value={30}>5</MenuItem>
					<MenuItem value={20}>6</MenuItem>
					<MenuItem value={30}>7</MenuItem>
					<MenuItem value={20}>8</MenuItem>
				</Select>
				<TextField
					sx={{
						color: "white",
						margin: "10px",
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
					}}
					id="outlined-basic"
					label="Enter Registration Number"
					variant="outlined"
				/>

				<TextField
					sx={{
						margin: "10px",
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "rgba(228, 219, 233, 0.25)",
						},
					}}
					id="outlined-basic"
					label="Enter Roll Number"
					variant="outlined"
				/>
				<Button variant="contained" sx={{ margin: "10px" }}>
					Download Result
				</Button>
			</FormControl>
		</div>
	);
};

export default Results;
