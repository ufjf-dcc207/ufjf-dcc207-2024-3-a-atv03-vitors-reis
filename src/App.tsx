
import Animal from './Animal';
import './App.css'
import Exibicao from './exibicao';

function App() {

  return <div className="app">

  {/* tem que colocar uma barra no final da tag vazia se nao nao funciona */}
  <Exibicao abertura={new Date("2024-11-06T08:00:00.000-03:00")}
  fechamento={new Date("2024-11-06T16:00:00.000-03:00")} cercado ="A1">
  <Animal icone ="🐻" nome="Urso" peso= {200} extincao={true} />
 
  <Animal icone ="🦭" nome="Foca" peso= {200} extincao={true} />
  </Exibicao>
  <Exibicao abertura={new Date("2024-11-06T08:00:00.000-03:00")}
  fechamento={new Date("2024-12-06T16:00:00.000-03:00")} cercado ="M2-Marinho">
  <Animal icone ="🐋" nome="Baleia Azul" peso= {15000} extincao={true} />
  </Exibicao>


  </div>;
  }   
export default App
