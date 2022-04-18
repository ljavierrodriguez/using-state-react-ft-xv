import React, { useState } from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
	/* const [valor, function] = useState(valorInicial) */
	const [state, setState] = useState({
		nombre: "",
		apellido: "Rodriguez",
	});

	const [name, setName] = useState("Ana");
	const [lastname, setLastname] = useState("Smith");

	const cambiarNombre = (e) => {
		/* setState({
            ...state,
            nombre: "Pedro",
        }); */
		/* setState((prevState) => {
            return { ...prevState, nombre: "Pedro" };
        }); */
		setState((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	return (
		<nav className="nav justify-content-center">
			{props.links.map(({ label, url }, index) => (
				<a href={url} className="nav-link" key={index}>
					{label}
				</a>
			))}
			<a href="" className="nav-link">
				{state.nombre} {state.apellido}
			</a>
			<a href="" className="nav-link">
				{name} {lastname}
			</a>
			<button className="btn btn-success" onClick={cambiarNombre}>
				Cambiar Nombre
			</button>
			{/* <input type="text" onChange={(e) => setName(e.target.value)} />
			<input type="text" onChange={(e) => setLastname(e.target.value)} /> */}

			<input
				type="text"
				onChange={(e) => cambiarNombre(e)}
				placeholder="Ingrese Nombre"
				name="nombre"
				className={state.nombre === "" ? "alert-danger" : ""}
			/>
			<input
				type="text"
				onChange={(e) =>
					setState((prevState) => {
						return {
							...prevState,
							[e.target.name]: e.target.value,
						};
					})
				}
				placeholder="Ingrese Apellido"
				name="apellido"
			/>
		</nav>
	);
};

/* class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "Luis",
            apellido: "Rodriguez",
        };

        this.saludo = this.saludo.bind(this);
        this.saludo2 = this.saludo2.bind(this);
        this.saludo3 = this.saludo3.bind(this);
        this.saludo4 = this.saludo4.bind(this);
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
                    <button className="btn btn-success" onClick={this.saludo4}>
                        Cambiar Nombre
                    </button>
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
} */

Navbar.propTypes = {
	links: PropTypes.array.isRequired,
};

export default Navbar;
