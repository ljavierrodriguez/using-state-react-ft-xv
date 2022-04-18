import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar
				links={[
					{ label: "Home", url: "/#home" },
					{ label: "Contact", url: "/#contact" },
				]}
			/>
			<div className="container text-center">
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		</>
	);
};

export default Home;
