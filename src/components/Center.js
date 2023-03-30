/* eslint-disable react/prop-types */
import './styles/center.css';

export default function Center({ setScore }, { setCards }, { setBestScore }) {
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
    <div className="center">
      <div className="card">
        <div
          className="card-img"
          style={{ backgroundImage: 'url(./imgs/din-jarin.png)' }}
        />
        <p>Din Jarin</p>
      </div>
      <div className="card">
        <div
          className="card-img"
          style={{ backgroundImage: 'url(./imgs/baby-yoda.jpg)' }}
        />
        <p>Grogu</p>
      </div>
    </div>
  );
}
