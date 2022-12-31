import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import GradingIcon from "@mui/icons-material/Grading";
import EventIcon from "@mui/icons-material/Event";
import ScienceIcon from "@mui/icons-material/Science";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1.5),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function Navbar() {
	const [open, setOpen] = React.useState(false);

	const listStyle = {
		padding: "5px 15px",
		justifyContent: open ? "initial" : "space-between",
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		color: "white",
		width: "90%",
	};

	const activeStyle = {
		backgroundColor: "rgba(255,0,0,0.5)",
		padding: "5px 15px",
		borderRadius: "20px",
		justifyContent: open ? "initial" : "space-between",
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		color: "white",
		width: "90%",
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<Drawer
				sx={{
					"& .MuiPaper-root": {
						background: "rgba( 109, 108, 108, 0.3 )",
						boxShadow: "0 8px 32px 0 rgba(0,0,0, 0.37 )",
						backdropFilter: "blur( 12px )",
						borderRadius: "0 20px 20px 0",
					},
				}}
				variant="permanent"
				open={open}
			>
				<DrawerHeader>
					<IconButton
						color="white"
						aria-label="open drawer"
						onClick={() => {
							if (open) handleDrawerClose();
							else handleDrawerOpen();
						}}
						edge="start"
					>
						<MenuIcon sx={{ color: "white" }} />
					</IconButton>
				</DrawerHeader>
				<Divider light={true} />
				<List>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<HomeIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/courses"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<BookIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"Courses"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/people"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<PeopleIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"People"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/events"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<EventIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"Events"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/projects"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<AccountTreeIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"Projects"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/research"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<ScienceIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"Research"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/results"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<GradingIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"Results"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding sx={{ display: "block", color: "white" }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
							}}
						>
							<NavLink
								to="/contact"
								style={({ isActive }) => (isActive ? activeStyle : listStyle)}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<MailIcon sx={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText
									primary={"Contact"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</NavLink>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
		</Box>
	);
}
