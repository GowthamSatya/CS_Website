import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import People from "./routes/People";
import Projects from "./routes/Projects";
import Research from "./routes/Research";
import Contact from "./routes/Contact";
import Events from "./routes/Events";
import Results from "./routes/Results";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/courses",
				element: <Courses />,
			},
			{
				path: "/people",
				element: <People />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/research",
				element: <Research />,
			},
			{
				path: "/events",
				element: <Events />,
			},
			{
				path: "/Results",
				element: <Results />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
