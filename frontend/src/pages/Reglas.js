import style from '../styles/components/pages/style.Reglas.css';
const Reglas = (props) => {
	return (
		<main className="Reglas">
			<div>
				<div className="botones">
					<a>
						<div className="box box1">
							<div className="text"> 
								<img src={`${process.env.PUBLIC_URL}hechizos.png`}></img>
								<p>Hechizos</p>
								
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}razas.png`}></img>
								<p>Razas</p>
								
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}clases.png`}></img>
								<p>Clases</p>
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}equipo.png`}></img>
								<p>Equipo</p>
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}dotes.png`}></img>
								<p>Dotes</p>
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}Trasfondos.png`}></img>
								<p>Trasfondos</p>
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}magic.png`}></img>
								<p>Objetos mágicos</p>
							</div>
						</div>
					</a>
					<a>
					<div className="box box1">
							<div className="text">
								<img src={`${process.env.PUBLIC_URL}Monstruos.png`}></img>
								<p>Monstruos y NPCs</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</main>
		);
}

export default Reglas;

