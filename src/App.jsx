import Board from './components/Board';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1> Jogo da Velha </h1>
      <Board />
    </div>
  );
}

export default App;
