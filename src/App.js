import './App.css';  
import Soma from './Soma';  
import Subtracao from './Subtracao';
import Multiplicacao from './Multiplicacao';
import Divisao from './Divisao';

function App() {
  return (
    <div className="App">
      <Soma a={5} b={3} />
      <Subtracao a={10} b={3} />
      <Divisao a={10} b={2} />
      <Multiplicacao a={10} b={3} />
    </div>
  );
}

export default App;
