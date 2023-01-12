import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";

let initialState = [
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

function ActiveExample() {
    const [atividades, setAtividades] = useState(initialState)

    function addAtividade (e) {
      e.preventDefault();
  
      const atividade = {
        id: document.getElementById('id').value,
        descricao: document.getElementById('descricao').value
      };
      setAtividades([ ...atividades, { ...atividade }])
    }
  return (
    <>
        <form>
          <input id='id' type='number' placeholder='id'/>
          <input id='descricao' type='text' placeholder='descrição'/>
          <button onClick={addAtividade}> + Atividade </button>
        </form>
        <ListGroup as="ul">
            {atividades.map(ativ =>(
              <ListGroup.Item as="li" active key={ativ.id} className='list-group-item'>
                {ativ.id} - {ativ.descricao}
              </ListGroup.Item>
            ))}
          </ListGroup>
    </>
  );
}

export default ActiveExample;


/*
    <>
        <form>
          <input id='id' type='number' placeholder='id'/>
          <input id='descricao' type='text' placeholder='descrição'/>
          <button> + Atividade </button>
        </form>
        <ListGroup as="ul">
            {atividades.map(ativ =>(
              <ListGroup.Item as="li" active key={ativ.id} className='list-group-item'>
                {ativ.id} - {ativ.descricao}
              </ListGroup.Item>
            ))}
          </ListGroup>
    </>

*/