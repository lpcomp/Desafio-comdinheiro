import { useState } from 'react';

import './styles/home.css';
import './styles/responsive.css';

import Card from './components/Card';
import Button from './components/Button';

function App() {

  const [cards, setcards] = useState([
    {
      name: 'ACESSE!'
    },
    {
      name: 'CADASTRE-SE'
    },
    {
      name: 'COMECE A USAR'
    }
  ]);

  return (
    <div className="container">
      <header>
        <h1>UMA NOVA <br/> FERRAMENTA</h1>
        <p>Inclua suas movimentações de investimentos e acompanhe seus <br/> rendimentos na hora que quiser</p>
      </header>
      
      <article>
        {cards.map((card, index) => (
          <Card key={index} name={card.name} />
        ))}
      </article>

      <footer>
        <Button name="BOTÃO DE AÇÃO 1" />
        <Button name="BOTÃO DE AÇÃO 2" />
      </footer>
    </div>
  );
}

export default App;
