import styles from  '../styles/components/pages/style.HomePage.css';

const Home = (props) => {
	return (
<main className="holder">
		<div className="text">
		<img src={process.env.PUBLIC_URL +"RNNum6K.jpg"} width="40%"></img>
			<h2>El templo de Oghma</h2>
			<p>Nuestro objetivo aquí en el templo de Oghma es acercar de manera simple y  concisa uno de los juegos de rol de mesa mas grandes y conocidos del mundo, Dungeons & Dragons.
			Aquí podrán encontrar todo el contenido oficial al alcance y organizado de manera fácil de leer y utilizar.
			Cambien contamos con una guía para simplificar el proceso de aprendizaje para todos aquellos que están iniciando en el hobby.</p>
		</div>
		<div className="text">
			<h2>El futuro</h2>
			<p>El sitio se encuentra en constante  desarrollo y mejora. Es el trabajo de amor de una sola persona y poco a poco se ira agregando mas contenido y nuevas secciones.
			Una de las secciones en la que se esta trabajando es un creador de personajes, completo con todas las opciones que DnD, Dungeons & Dragons, 5ta edición tiene para ofrecer.
			</p>
		</div>

</main>
		);
}

export default Home;

