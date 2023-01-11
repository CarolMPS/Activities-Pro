import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  const atividades = [
    {
      id: 1,
      descricao: "Primeira Atividade",
    },
    {
      id: 2,
      descricao: "Segunda Atividade",
    },
    {
      id: 3,
      descricao: "Terceira Atividade",
    },
    {
      id: 4,
      descricao: "Quarta Atividade",
    },
  ];
  return (
    <div className="App">
      <header>
      <ListGroup>
          {atividades.map(ativ =>(
            <ListGroup.Item key={ativ.id} className='list-group-item'>
              {ativ.id} - {ativ.descricao}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </header>
    </div>
  );
}

export default App;
