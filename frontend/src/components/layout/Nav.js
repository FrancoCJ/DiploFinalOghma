import navstyles from '../../styles/components/layout/style.Nav.css';
import NavLink from	'../NavLink.js';
import {} from "react-router-dom";
const Nav = (props) => {
	return (
	<nav>
		<div className="holder">
		<ul>
			<li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
			<li><NavLink activeClassName="activo" exact to="/Novedades">Novedades</NavLink></li>
			<li><NavLink activeClassName="activo" exact to="/Guia">Guía para nuevos jugadores</NavLink></li>
			<li>
			<div class="dropdown">
			<NavLink activeClassName="activo" exact to="/Reglas">Reglas del juego</NavLink>
 		 				<div class="dropdown-content">
						    <a href="#">Hechizos</a>
						    <a href="#">Razas</a>
						    <a href="#">Clases</a>
						    <a href="#">Equipo</a>
						    <a href="#">Dotes</a>
						    <a href="#">Trasfondos</a>
						    <a href="#">Objetos mágicos y equipamiento</a>
						    <a href="#">Monstruos y NPCs</a>
			  			</div>
				</div> 
			</li> 
			<li><NavLink activeClassName="activo" exact to="/Contacto">Contacto</NavLink></li>
		</ul>
		</div>
	</nav>
		);
}

export default Nav;
