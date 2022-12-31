import React from "react";
import Button from "@mui/material/Button";
import About from "../components/About";

const Home = () => {
	return (
		<div>
			<div className="main__home">
				<div className="main__top">
					<span style={{ fontWeight: 600, fontSize: "32px" }}>
						Department of Computer Science
					</span>
					<span style={{ fontWeight: 600, fontSize: "18px" }}>
						National Institute of Technology, Duragpur
					</span>
				</div>
				<div className="main__home__buttons">
					<Button
						color="error"
						sx={{ margin: "10px 0", borderRadius: "20px" }}
						variant="contained"
						size="large"
					>
						<a style={{color: "white", textDecoration: "none"}} href="http://14.139.221.18:9001/default.aspx?ReturnUrl=/">Student Login</a>
					</Button>
					<Button
						color="warning"
						variant="outlined"
						sx={{ margin: "10px 0", borderRadius: "20px" }}
						size="large"
					>
						Faculty Login
					</Button>
				</div>
			</div>
			<div className="main__about">
				<About />
			</div>
		</div>
	);
};

export default Home;
