const [numeros, setNumeros] = React.useState([null, null, null, null, null, null]);


const dadosPlayer1 = [
  { id: 1, name: 'dado1' },
  { id: 2, name: 'dado2' },
  { id: 3, name: 'dado3' },
  { id: 4, name: 'dado4' },
  { id: 5, name: 'dado5' },
  { id: 6, name: 'dado6' },
];
const CachoApp = () => {
  

    return (
        <div class="main-container">
            <h1>cacho</h1>

            <div class="manoplayer1">
             {dados.map(dados=>(
              <button
                key={dadosPlayer1.id}
                className={dadosPlayer1.name}
                onClick={()=>setSelectedDado(dado)}
              >

              </button>
             ))}
            </div>
        </div> 
    );
}

ReactDOM.render(<CachoApp />, document.getElementById('root'));