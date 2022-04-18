import React from "react";
import PropTypes from "prop-types";

/* 
const Navbar = (props) => {
    return (
        <nav className="nav justify-content-center">
            {props.links.map(({ label, url }, index) => (
                <a href={url} className="nav-link" key={index}>
                    {label}
                </a>
            ))}
        </nav>
    );
}; 
*/

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: "Luis",
			apellido: "Rodriguez",
		};

		/* 		this.saludo = this.saludo.bind(this);
        this.saludo2 = this.saludo2.bind(this);
        this.saludo3 = this.saludo3.bind(this);
        this.saludo4 = this.saludo4.bind(this); */
	}

	saludo = () => {
		this.saludo2();
		this.saludo3();
	};

	saludo2 = () => {
		console.log(this.props.links[0].label);
	};

	saludo3 = () => {
		console.log(this.props);
	};

	saludo4 = (e) => {
		console.log(e.target);
		console.log(this.state);
		this.setState({ nombre: "Ramon" });
	};

	render() {
		return (
			<>
				{this.saludo()}
				<nav className="nav justify-content-center">
					{this.props.links.map(({ label, url }, index) => (
						<a href={url} className="nav-link" key={index}>
							{label}
						</a>
					))}
					<a href="" className="nav-link">
						{this.state.nombre} {this.state.apellido}
					</a>
					{/* <button
						className="btn btn-success"
						onClick={this.saludo4}>
						Cambiar Nombre
					</button> */}
					<button
						className="btn btn-success"
						onClick={(e) => {
							this.saludo2(e);
							this.saludo4(e);
						}}>
						Cambiar Nombre
					</button>
				</nav>
			</>
		);
	}
}

Navbar.propTypes = {
	links: PropTypes.array.isRequired,
};

export default Navbar;
