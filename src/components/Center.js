import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import './styles/center.css';

function Center({ cards, selectCard }) {
  const [numbersArray, setNumbersArray] = useState([]);

  function randomNumbersArray(length, max) {
    const result = [];
    while (result.length < length) {
      const randomNumber = Math.floor(Math.random() * max);
      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }

    return result;
  }

  useEffect(() => {
    setNumbersArray(randomNumbersArray(5, 10));
  }, [cards]);

  // exemplo de uso:
  return (
    <div className="center">
      {numbersArray.map((index) => (
        <Tilt
          glareEnable
          glareColor="white"
          glareBorderRadius="1px"
          glarePosition="bottom"
          glareMaxOpacity={0.3}
          key={cards[index].id}
        >
          <div
            className="card"
            onClick={() => selectCard(cards[index].id)}
            onKeyDown={() => selectCard(cards[index].id)}
            role="button"
            tabIndex={0}
            key={cards[index].id}
          >
            <div
              className="card-img"
              style={{ backgroundImage: `url(${cards[index].photo})` }}
            />
            <p>{cards[index].name}</p>
          </div>
        </Tilt>
      ))}
    </div>
  );
}

Center.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  selectCard: PropTypes.func.isRequired,
};

export default Center;
