import headerstyles from '../../styles/components/layout/style.Header.css';
const Header = (props) => {
	return (
		
		<header><div className="nav">
			<div className="holder">
			<img src={`${process.env.PUBLIC_URL}favicon.png`} width="100" alt="Beholder"></img>
			<h1>El Templo de Oghma</h1><br></br>
			<h3>Un lugar de aprendizaje</h3>
			<div className="busqueda">
				SEARCH SYSTEM
			</div>
		</div>
		</div>
		</header>);
}

export default Header;
