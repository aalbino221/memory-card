/* eslint-disable react/prop-types */
import logo from './assets/star-wars-logo-1002.png';
import './styles/header.css';

export default function Header({ score, bestScore }) {
  return (
    <div className="header">
      <img src={logo} alt="" id="logo" />
      <p>Memory Card Game</p>
      <div>
        <p>
          Score:
          <span>{score}</span>
        </p>
        <p>
          Best Score:
          <span>{bestScore}</span>
        </p>
      </div>
    </div>
  );
}
