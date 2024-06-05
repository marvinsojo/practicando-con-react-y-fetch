import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const About = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">About</h1>
            <p>http://localhost:3000/about</p>
			<p>
				<img src={rigoImage} />
			</p>
			<Link to="/">
                Home
            </Link>
		</div>
	);
};

export default About;