import { useCallback, useEffect, useState } from 'react';
import cardsValues from './components/CardsValues';
import './App.css';
import Header from './components/Header';
import Center from './components/Center';
import Footer from './components/Footer';

function App() {
  const [cards, setCards] = useState(cardsValues);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const selectCard = useCallback(
    (id) => {
      function verify() {
        return cards[id].selected;
      }

      function update() {
        const newCards = [...cards];
        newCards[id] = { ...newCards[id], selected: true };
        setCards(newCards);
        setScore(score + 1);
      }

      function reset() {
        setScore(0);
        setCards(cards.map((item) => ({ ...item, selected: false })));
      }
      // eslint-disable-next-line no-unused-vars
      const a = !verify(id) ? update(id) : reset();
    },
    [cards, score],
  );

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
