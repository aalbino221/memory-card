import PropTypes from 'prop-types';
import logo from './assets/star-wars-logo-1002.png';
import './styles/header.css';

function Header({ score, bestScore }) {
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

Header.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Header;
