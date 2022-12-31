/* eslint-disable jsx-a11y/iframe-has-title */
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import { Button } from "@mui/material";
import "./styles.scss";
import React from "react";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.582928837607!2d87.29087901515365!3d23.5474986846898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76d3d866877cf%3A0x21e96ef4f4ff9fd1!2sNIT%20Durgapur!5e0!3m2!1sen!2sin!4v1672422098473!5m2!1sen!2sin"
					width="600"
					height="380"
					style={{ border: 0, borderRadius: "20px" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className="contact__right">
				<div className="contact__newsletter">
					<div className="contact__newsletter__header">
						<Typography varaint="h5" component="h5">
							Subscribe to our Newsletter
						</Typography>
					</div>
					<div className="contact__newsletter__body">
						<TextField
							ssx={{
								color: "white",
								width: "100%",
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
							label="Email"
							variant="outlined"
							fullWidth
							margin="normal"
						/>
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "10px 20px",
								width: "100%",
							}}
							variant="contained"
						>
							<MailIcon />
							<span style={{ margin: "0 10px" }}>Subscribe</span>
						</Button>
					</div>
				</div>
				<div className="contact__links">
					<div className="contact__hod">
						<Typography
							sx={{ marginBottom: "10px" }}
							variant="h5"
							component="h5"
						>
							Hod
						</Typography>
						<div className="contact__hod__body">
							<img
								src="data:image/jpeg;base64,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"
								alt=""
								className="contact__hod__body__img"
							/>

							<div className="contact__hod__body__about">
								<Typography variant="h6" component="h6">
									Jane Doe
								</Typography>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										flexDirection: "column",
										gap: "5px",
										justifyContent: "space-between",
										width: "100%",
									}}
								>
									<Button
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "100%",
											gap: "10px",
											borderRadius: "20px",
										}}
										variant="contained"
										color="success"
									>
										<MailIcon />
										Email
									</Button>
									<Button
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "100%",
											gap: "10px",
											borderRadius: "20px",
										}}
										variant="contained"
										color="secondary"
									>
										<LocalPhoneIcon />
										Mobile
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="contact__social">
						<a
							href="https://www.linkedin.com/school/national-institute-of-technology-durgapur/?originalSubdomain=in"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__social__button"
						>
							<LinkedInIcon
								sx={{
									width: "100%",
									height: "100%",
									color: "white",
									margin: "5px",
								}}
							/>
						</a>
						<a
							href="https://www.facebook.com/nitdgp.unofficial/"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__social__button"
						>
							<FacebookIcon
								sx={{
									width: "100%",
									height: "100%",
									color: "white",
									margin: "5px",
								}}
							/>
						</a>
						<a
							href="mailto:temp@mail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__social__button"
						>
							<MailIcon
								sx={{
									width: "100%",
									height: "100%",
									color: "white",
									margin: "5px",
								}}
							/>
						</a>
						<a
							href="https://nitdgp.ac.in/"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__social__button"
						>
							<LinkIcon
								sx={{
									width: "100%",
									height: "100%",
									color: "white",
									margin: "5px",
								}}
							/>
						</a>
					</div>
				</div>
			</div>

			<div className="contact__footer">
				<Typography variant="h5" component="h5">
					About This Website
				</Typography>
				<span variant="h6" color="h6">
					This Webiste is made for any generic computer science for a
					university, although many features like downloads, notices, archives,
					gallery, could be added in future but I made it in 2 days and can
					expect some bugs. Thank You.
				</span>
			</div>
			<div
				style={{
					color: "white",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: " 0 20px ",
				}}
				classname="contact__copy"
			>
				<span>Copyright@2023</span>
				<span>NIT Durgapur</span>
			</div>
		</div>
	);
};

export default Contact;
