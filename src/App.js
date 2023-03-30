/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';

import './App.css';
import Header from './components/Header';
import Center from './components/Center';
import Footer from './components/Footer';

const Context = createContext();

const cardsValues = [
  {
    id: 0,
    name: 'Din Jarin',
    photo: './imgs/din-jarin.png',
    selected: false,
  },
  {
    id: 0,
    name: 'Grogu',
    photo: './imgs/baby-yoda.jpg',
    selected: false,
  },
];

function App() {
  const [cards, setCards] = useState(cardsValues);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function verify(id) {
    return cards[id].selected;
  }

  function changeScore(newScore, newBestScore) {
    setScore(newScore);
    setBestScore(newBestScore);
  }

  function update(id) {
    const newCards = [...cards];
    newCards[id] = { ...newCards[id], selected: true };
    setCards(newCards);
    changeScore(score + 1, bestScore + 1);
  }

  function reset() {
    changeScore(0, 0);
    setScore(cards.map((item) => ({ ...item, selected: true })));
  }

  function selectCard(id) {
    const a = verify(id) ? update(id) : reset();
  }

  return (
    <div className="App">
      <Header />
      <Center cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
