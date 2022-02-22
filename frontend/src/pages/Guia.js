import style from  '../styles/components/pages/style.guia.css';
const HomePage = (props) => {
	return (
<main>
        <div className="holder">
          <div className="introduccion"> 
            <h2 style={{textAlign: 'center'}}>¿Qué es Dungeons and Dragons?</h2>
            <p style={{textAlign: 'center'}}>explicación bonita sobre de que trata el juego</p>
          </div>
          <div className="nav">
            <div className="holder">
              <ul style={{textAlign: 'center'}}>
                <li><a className="active" href="inicio.html">Bienvenido a D&amp;D</a></li>
                <li><a href="personaje.html">Creando un personaje</a></li>
                <li><a href="juego.html">Dentro del juego</a></li>
              </ul>
            </div>
          </div>
          <div className="htpmaster">
            <div className="htp">
              <h2 style={{textAlign: 'center'}}>Como jugar</h2>
              <p style={{textAlign: 'center'}}>Al momento de jugar, Dungeons and Dragons se desarrolla siguiendo este simple patrón</p>
            </div>
            <div className="htpg">
              <div className="htpc">
                <h4 style={{textAlign: 'justify'}}>1. El DM describe la escena</h4>
              </div>
              <div className="htpc">
                <h4 style={{textAlign: 'justify'}}>2. Los jugadores describen como desean interactuar</h4>
              </div>
              <div className="htpc">
                <h4 style={{textAlign: 'justify'}}>3. El DM relata los resultados</h4>
              </div>
            </div>
          </div>
          <div className="die">
            <h2 style={{textAlign: 'center'}}>Dados de juego</h2>
            <p style={{textAlign: 'center'}}>El juego utiliza dados poliédricos con diferentes cantidad de lados</p>
          </div>
          <div className="coremaster">
            <div className="corer">
              <h2 style={{textAlign: 'center'}}>La regla central</h2>
              <p style={{textAlign: 'center'}}>Cuando el resultado de una accion sea incierto, el juego depende de tirar un d20 para determinar el exito o fracaso</p>			
            </div>
            <div className="coreg">
              <div className="core">
                <h4 style={{textAlign: 'center'}}>1. Tira el dado y suma el modificador</h4>
              </div>
              <div className="core">
                <h4 style={{textAlign: 'center'}}>2. Aplica bonificaciones o penalidades</h4>
              </div>
              <div className="core">
                <h4 style={{textAlign: 'center'}}>3. Compara el total contra el objetivo</h4>
              </div>
            </div>
          </div>
          <div className="container-ortr">
            <div className="tittle-ortr">
              <h2 style={{textAlign: 'center'}}>test</h2>
              <div className="ortr ortr1"><h4 style={{textAlign: 'center'}}>Nisi incididunt aliqua duis excepteur.</h4></div>
              <div className="ortr ortr2"><h4 style={{textAlign: 'center'}}>Irure et cupidatat.</h4></div>
              <div className="ortr ortr3"><h4 style={{textAlign: 'center'}}>Lorem ipsum sint aliquip irure laborum officia.</h4></div>
              <div className="ortr ortr4"><h4 style={{textAlign: 'center'}}>Sed reprehenderit consequat sunt.</h4></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

export default HomePage;

