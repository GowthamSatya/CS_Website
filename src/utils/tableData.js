function createData(title, code, l, t, s, c) {
	return { title, code, l, t, s, c };
}

export const ProjectTableCols = [
	"Sl No",
	"Title",
	"Name of the PI",
	"Name of the CoPIs",
	"Funding Agency	Amount (Rs.)",
	"Project Status",
	"Date of Initiation",
	"Date of Completion",
];

export const ResearchTableCols = [
	"Collaborating Institute / Organization	Areas of Collaboration",
	"Faculty",
	"Members Involved",
	"Year",
];

export const SemesterTableCols = ["COURSE TITLE	", "CODE", "L", "T", "S", "C"];

export const SemesterTableRows = [
	{
		id: "1",
		rows: [
			createData("Engineering Chemistry", "CYC01", 2.0, 1.0, 0.0, 3.0),

			createData("Chemistry Laboratory", "CYS51", 0.0, 0.0, 2.0, 1.0),
			createData("Environmental Science", "ESC01", 2.0, 0.0, 0.0, 2.0),
			createData(
				"Professional Communication Laboratory",
				"HSS51",
				1.0,
				0.0,
				2.0,
				2.0
			),
			createData("Mathematics – I", "MAC01", 3.0, 1.0, 0.0, 4.0),
			createData("Engineering Physics", "PHC01", 2.0, 1.0, 0.0, 3.0),
			createData("Physics Laboratory", "PHS51", 0.0, 0.0, 2.0, 1.0),
			createData("Workshop Practice", "WSS51", 0.0, 0.0, 3.0, 1.5),
			createData("Engineering Mechanics", "XEC01", 2.0, 1.0, 0.0, 3.0),
			createData("Engineering Graphics", "XES51", 1.0, 0.0, 3.0, 2.5),
			createData("Co-curricular Activities - I", "	XXS51", 0.0, 0.0, 2.0, 1.0),
		],
	},
];
