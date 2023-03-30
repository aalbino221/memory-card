import logo from './assets/star-wars-logo-1002.png';
import './styles/header.css';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" id="logo" />
      <p>Memory Card Game</p>
      <div>
        <p>
          Score:
          <span> 0</span>
        </p>
        <p>
          Best Score:
          <span> 0</span>
        </p>
      </div>
    </div>
  );
}
