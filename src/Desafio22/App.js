import './App.css';
import Soma from './Soma';  
import Subtracao from './Subtracao';
import Multiplicacao from './Multiplicacao';
import Divisao from './Divisao';

const Calculadora = (props) => <h3>Calculadora:</h3>

function App() {
  return (
    <div className="App">
      <Calculadora/>
      <Soma a={5} b={3} />
      <Subtracao a={10} b={3} />
      <Divisao a={10} b={2} />
      <Multiplicacao a={10} b={3} />
    </div>
  );
}

export default App;
