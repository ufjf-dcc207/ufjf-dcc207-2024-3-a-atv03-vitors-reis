
import Animal from './Animal';
import './App.css'

function App() {

  return <div className="app">

  {/* tem que colocar uma barra no final da tag vazia se nao nao funciona */}

  <Animal icone ="🐻" nome="Urso" peso= {200} extincao={true} />

  <Animal icone ="🦭" nome="Foca" peso= {200} extincao={true} />

  <Animal icone ="🐋" nome="Baleia Azul" peso= {15000} extincao={true} />


  </div>;
  }   
export default App
