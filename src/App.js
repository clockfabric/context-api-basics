import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<MovieProvider>
				<Nav />
				<AddMovie />
				<MovieList />
			</MovieProvider>
		</div>
	);
}

export default App;
