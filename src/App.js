import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";

function App() {
	return (
		<Router>
			<>
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
					</Switch>
				</div>
			</>
		</Router>
	);
}

export default App;
