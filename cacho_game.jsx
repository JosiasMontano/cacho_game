

const dadosPlayer1 = [
  { id: 1, name: 'dado1' },
  { id: 2, name: 'dado2' },
  { id: 3, name: 'dado3' },
  { id: 4, name: 'dado4' },
  { id: 5, name: 'dado5' },
  { id: 6, name: 'dado6' },
];

const tablaPlayer1 = [
  { id: 1, name: 'balas' },
  { id: 2, name: 'tontos' },
  { id: 3, name: 'trenes' },
  { id: 4, name: 'cuadras' },
  { id: 5, name: 'quinas' },
  { id: 6, name: 'cenas' },
  { id: 7, name: 'escalera' },
  { id: 8, name: 'poker' },
  { id: 9, name: 'full' },
  { id: 10, name: 'grande1' },
  { id: 11, name: 'grande2' },
];

function generadorDeNumerosAleatorios() {
  return Math.floor(Math.random() * 6)+1;
}

const CachoApp = () => {
  

    return (
        <div className="main-container">
            <h1>cacho</h1>
            <div className="player1Side">
            <h3>PLAYER 1</h3>
             <div class="manoplayer1">
              {dadosPlayer1.map(dado=>(
               <button
                 key={dado.id}
                 className={dado.name}
               >
                 {dado.id}
               </button>
              ))}
             </div> 

             <div class="tablaplayer1">
              {tablaPlayer1.map(tabla=>( 
                <button
                  key={tabla.id}
                  className={tabla.name}
                >
                  {tabla.name}
                </button>
              ))}
             </div>
            </div>

            <div className="player2Side">
            <h3>PLAYER 2</h3>
             <div class="manoplayer1">
              {dadosPlayer1.map(dado=>(
               <button
                 key={dado.id}
                 className={dado.name}
               >
                 {dado.id}
               </button>
              ))}
             </div> 

             <div className="tablaplayer1">
              {tablaPlayer1.map(tabla=>( 
                <button
                  key={tabla.id}
                  className={tabla.name}
                >
                  {tabla.name}
                </button>
              ))}
             </div>
             <div>
              <button className="lanzarButton">Lanzar</button>
              <button className="relanzarButton">Relanzar</button>
              <button className="terminarTurnoButton">Terminar turno</button>
             </div>
            </div>
        </div> 
    );
}

ReactDOM.render(<CachoApp />, document.getElementById('root'));

{/* const CachoApp = () => {
  // Estado para los valores de los dados (inicializados en 1, pero puedes cambiarlo)
  const [valoresDados, setValoresDados] = useState([1, 1, 1, 1, 1, 1]);
  return (
    <div className="player2Side">
      <h3>PLAYER 2</h3>
      <div className="manoplayer1">
        {dadosPlayer1.map((dado) => (
          <button
            key={dado.id}
            className={dado.name}
          >
            {valoresDados[dado.id - 1]}  
          </button>
        ))}
      </div>
      <div>
        <button
          className="lanzarButton"
          onClick={() => setValoresDados(valoresDados.map(() => generadorDeNumerosAleatorios()))}  // Actualiza todos los valores al presionar
        >
          Lanzar
        </button>
      </div>
    </div>
  );
}; */}
  
  
  