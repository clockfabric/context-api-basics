import React from "react";

const Movie = ({ movieName, moviePrice, movieId }) => {
	return (
		<div>
			<h3>{movieName}</h3>
			<h5>{moviePrice}</h5>
			<h5>{movieId}</h5>
			<br />
		</div>
	);
};

export default Movie;
