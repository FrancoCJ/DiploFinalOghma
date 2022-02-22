import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/novedaditem'
import '../styles/components/pages/style.novedades.css';

const NovedadesPage = (props) => {
	
	const [loading, setLoading] = useState(false);
	const [novedades, setNovedades] = useState([]);

	useEffect(() => {
		const cargarNovedades = async () => {
			setLoading(true);
			const response = await axios.get('http://localhost:3000/api/novedades');
			setNovedades(response.data);
			setLoading(false);
		};

		cargarNovedades();
	}, []);
	return (
	<main >
			<div className='novedades'>Novedades</div>
		{loading ? (
			<p>Cargando...</p>
		) : (
			novedades.map(item => <NovedadItem key={item.id}
				title={item.titulo}
				imagen={item.imagen} body={item.cuerpo} />)
		)}

	</main>
		);
}

export default NovedadesPage;

