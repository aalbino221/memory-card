/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
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

  function findMouse(e) {
    const { currentTarget } = e;

    // Get the bounding rectangle of target
    const rect = currentTarget.getBoundingClientRect();

    // Mouse position
    let x = Math.floor(((e.clientX - rect.left) / 300) * 30);
    let y = Math.floor(((e.clientY - rect.top) / 300) * 30);

    if (x >= 6 && x <= 24) {
      if (x <= 18) {
        x = 25;
        y = 25;
      } else {
        x = 25;
        y = -25;
      }
    } else if (x < 5) {
      if (y <= 4 || y >= 31) {
        x -= 30;
        y = -25;
      } else {
        x -= 30;
        y -= 5;
      }
    } else if (x > 25) {
      if (y <= 4 || y >= 31) {
        y = -25;
      } else {
        y -= 5;
      }
    }

    currentTarget.style.transition = '300ms';
    currentTarget.style.transform = `rotateX(${y}deg) rotateZ(${0}deg) rotateY(${-x}deg)`;
  }

  function mouseOut(e) {
    const { currentTarget } = e;
    currentTarget.style.transform = '';
  }

  useEffect(() => {
    setNumbersArray(randomNumbersArray(5, 19));
  }, [cards]);

  // exemplo de uso:
  return (
    <div className="center">
      {numbersArray.map((index) => (
        <div
          className="card"
          onClick={() => selectCard(cards[index].id)}
          onKeyDown={() => selectCard(cards[index].id)}
          role="button"
          tabIndex={0}
          key={cards[index].id}
          onMouseOver={(e) => findMouse(e)}
          onMouseMove={(e) => findMouse(e)}
          onFocus={() => {}}
          onMouseLeave={(e) => mouseOut(e)}
        >
          <div
            className="card-img"
            style={{ backgroundImage: `url(${cards[index].photo})` }}
          />
          <p>{cards[index].name}</p>
        </div>
      ))}
    </div>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function CenterBackup({ cards, selectCard }) {
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

  function findMouse(e) {
    const { currentTarget } = e;

    // Get the bounding rectangle of target
    const rect = currentTarget.getBoundingClientRect();

    // Mouse position
    let x = Math.floor(((e.clientX - rect.left) / 300) * 30);
    let y = Math.floor(((e.clientY - rect.top) / 300) * 30);

    x = x < 14 ? x - 30 : x;
    y = y < 17 ? y - 30 : y;

    currentTarget.style.transition = '300ms';
    currentTarget.style.transform = `rotateX(${-y}deg) rotateZ(${0}deg) rotateY(${-x}deg)`;
  }

  function mouseOut(e) {
    const { currentTarget } = e;
    currentTarget.style.transform = '';
  }

  useEffect(() => {
    setNumbersArray(randomNumbersArray(5, 19));
  }, [cards]);

  // exemplo de uso:
  return (
    <div className="center">
      {numbersArray.map((index) => (
        <div
          className="card"
          onClick={() => selectCard(cards[index].id)}
          onKeyDown={() => selectCard(cards[index].id)}
          role="button"
          tabIndex={0}
          key={cards[index].id}
          onMouseMove={(e) => findMouse(e)}
          onFocus={() => {}}
          onMouseLeave={(e) => mouseOut(e)}
        >
          <div
            className="card-img"
            style={{ backgroundImage: `url(${cards[index].photo})` }}
          />
          <p>{cards[index].name}</p>
        </div>
      ))}
    </div>
  );
}
