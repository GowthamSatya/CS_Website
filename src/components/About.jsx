import React from "react";
import Typography from "@mui/material/Typography";
import "./styles.scss";

const About = () => {
	return (
		<div className="about-section">
			<div className="about-section__about">
				<div className="neo-box about-section__about__top">
					<Typography variant="h5" component="h2" sx={{ margin: "0 0 10px 0" }}>
						About
					</Typography>
					<Typography variant="body2">
						The Department started imparting instructions with the most modern
						curricula and syllabus to the students ofr undergraduate course
						since 1991 and post graduate course since July, 2004. The Department
						maintains an excellent teaching/learning and research environment
						with dedicated, qualified and dynamic faculties and well equiped
						laboratories. The Department of Computer Science and Engineering
						(CSE) embodies the university's tradition of excellence in
						engineering education. CSE is in a period of exciting growth and
						opportunity. CSE Graduates capture leading academic appointments as
						well as opportunities in renowned computer industries. The newly
						build second floor of the department includes highly sophisticated
						VLSI laboratory,Embedded Systems laboratory, Soft computing and
						Networking laboratories. Robotics, mobile communication, natural
						language processing are the broad areas into which the researchers
						have made a foray.
					</Typography>
				</div>
				<div className="neo-box about-section__about_bottom">
					<Typography variant="h5" component="h2" sx={{ margin: "0 0 10px 0" }}>
						Mission & Vision
					</Typography>
					<Typography variant="body2">
						Attaining global recognition in the area of Computer Science &
						Engineering through creating, applying and imparting scientific and
						technical education, research and training to meet the growing needs
						of the industry and society. <br />
						Imparting quality education through well-designed curriculum in tune
						with the challenging needs of the industry and society.
						<br />
						Providing state-of-art research facilities to generate knowledge and
						develop technologies in the thrust areas of Computer Science and
						Engineering. <br />
						Developing linkages with world classorganizations to strengthen
						industry-academia relationships for mutual benefit.
						<br />
						To produce quality engineers, researchers and successful
						professionals who will become responsible citizens by contributing
						to the progress of the nation.
					</Typography>
				</div>
			</div>
			<div className="neo-box about-section__blog">
				<Typography variant="h5" component="h2" sx={{ margin: "0 0 10px 0" }}>
					Blog
				</Typography>
				<div className="about-section__blog__posts">
					{[1, 1, 1, 1, 1, 1].map(() => {
						return (
							<div className="neo-box-out about-section__blog__posts__post">
								<div className="about-section__blog__posts__post__head">
									<Typography
										variant="h5"
										component="h2"
										sx={{ margin: "0 0 10px 0" }}
									>
										Post
									</Typography>
									<Typography
										variant="p"
										component="p"
										sx={{ margin: "0 0 10px 0" }}
									>
										11/10/22
									</Typography>
								</div>
								<div className="about-section__blog__posts__post__body">
									<Typography variant="p" component="p">
										lorem ipsum sit dor amer lorem ipsum sit dor amer lorem
										ipsum sit dor amer lorem ipsum sit dor amer lorem ipsum sit
										dor amer lorem ipsum sit dor amer lorem ipsum sit dor amer
										lorem ipsum sit dor amer lorem ipsum sit dor amer
									</Typography>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
 
export default About;
