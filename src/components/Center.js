/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import './styles/center.css';

export default function Center({ cards, selectCard }) {
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
    setNumbersArray(randomNumbersArray(5, 19));
  }, [cards]);

  // exemplo de uso:
  return (
    <div className="center">
      {numbersArray.map((index) => (
        <Tilt glareEnable glareColor="white" glareBorderRadius="1px" glarePosition="bottom" glareMaxOpacity={0.3}>
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
