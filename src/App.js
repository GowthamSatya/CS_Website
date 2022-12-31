import "./App.scss";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="main">
			<Navbar />
			<div className="main__outlet">
				<Outlet/>
			</div>
		</div>
	);
}

export default App;
