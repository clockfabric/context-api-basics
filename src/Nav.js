import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				backgroundColor: "gray"
			}}>
			<h3>Movie List</h3>
			<p>List of movies: {movies.length}</p>
		</div>
	);
};

export default Nav;
