/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import cardsValues from './components/CardsValues';
import './App.css';
import Header from './components/Header';
import Center from './components/Center';
import Footer from './components/Footer';

function App() {
  const [cards, setCards] = useState(cardsValues);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function verify(id) {
    return cards[id].selected;
  }

  function update(id) {
    const newCards = [...cards];
    newCards[id] = { ...newCards[id], selected: true };
    setCards(newCards);
    setScore(score + 1);
  }

  function reset() {
    setScore(0);
    setCards(cards.map((item) => ({ ...item, selected: false })));
  }

  function selectCard(id) {
    const a = !verify(id) ? update(id) : reset();
  }

  useEffect(() => {
    if (score > bestScore) setBestScore(score);
  }, [score, bestScore]);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Center cards={cards} selectCard={selectCard} />
      <Footer />
    </div>
  );
}

export default App;
